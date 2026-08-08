#!/usr/bin/env node
// Generates EXPECTED_OUTPUTS.md by running every lesson and capturing output.
// Usage: node scripts/generate_expected_outputs.js
const { spawnSync } = require("node:child_process")
const fs = require("node:fs")
const path = require("node:path")

const ROOT = path.join(__dirname, "..")
const LESSONS_DIR = path.join(ROOT, "lessons")

const NON_EXITING = new Set(["17_http_and_servers.js"])
const SPECIAL_ARGS = { "19_capstone_todo_cli.js": ["list"] }

const lessons = fs.readdirSync(LESSONS_DIR).filter(f => f.endsWith(".js")).sort()

let md = `# 📺 Expected Outputs

> What each lesson should print when you run it.
>
> Generated on ${new Date().toISOString().slice(0, 10)} by actually running every lesson on Node ${process.version}.
>
> If your output differs, check that you're running the latest version of the files (\`git pull\`).

`

for (const lesson of lessons) {
  const args = SPECIAL_ARGS[lesson] || []
  const timeout = NON_EXITING.has(lesson) ? 3000 : 10000
  const result = spawnSync(process.execPath, [path.join(LESSONS_DIR, lesson), ...args], {
    encoding: "utf8",
    timeout,
    cwd: ROOT
  })

  md += `## ${lesson}\n\n`
  md += "```\n"

  if (result.error && result.error.code === "ETIMEDOUT") {
    md += `(Server lesson — starts servers and keeps running. Press Ctrl+C to stop.)\n`
  } else if (result.status !== 0) {
    md += `(Error: exit code ${result.status})\n${result.stderr}\n`
  } else {
    md += result.stdout
  }

  md += "```\n\n"
}

// Clean up artifacts created by lessons
const CLEANUP = [
  path.join(LESSONS_DIR, "todos.json"),
  path.join(LESSONS_DIR, "output.txt"),
  path.join(LESSONS_DIR, "stream_output.txt"),
  path.join(LESSONS_DIR, "copied.txt"),
  path.join(LESSONS_DIR, "temp_files")
]
for (const p of CLEANUP) {
  try { fs.rmSync(p, { recursive: true, force: true }) } catch {}
}

fs.writeFileSync(path.join(ROOT, "EXPECTED_OUTPUTS.md"), md)
console.log(`Wrote EXPECTED_OUTPUTS.md (${md.length} chars, ${lessons.length} lessons)`)
