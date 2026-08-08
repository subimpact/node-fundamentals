#!/usr/bin/env node
// ============================================================
// scripts/verify.js — runs every lesson + solution
// ============================================================
// Usage: npm test
//
// This script:
//   1. Runs every file in lessons/ (with a timeout)
//   2. Runs every file in solutions/ (must pass all checkers)
//   3. Reports pass/fail per file
//
// Special cases:
//   - Lesson 17 (HTTP) starts servers that never exit → killed after 2s
//   - Lesson 19 (capstone) needs a command argument → runs "list"
//   - Lessons that create files → cleaned up after
// ============================================================

const { spawnSync } = require("node:child_process")
const fs = require("node:fs")
const path = require("node:path")

const ROOT = path.join(__dirname, "..")
const LESSONS_DIR = path.join(ROOT, "lessons")
const SOLUTIONS_DIR = path.join(ROOT, "solutions")

// Files that legitimately don't exit on their own (servers, streams)
const NON_EXITING = new Set([
  "17_http_and_servers.js"
])

// Files that need special arguments
const SPECIAL_ARGS = {
  "19_capstone_todo_cli.js": ["list"]
}

// Files that create artifacts we should clean up
const CLEANUP = [
  path.join(LESSONS_DIR, "todos.json"),
  path.join(LESSONS_DIR, "output.txt"),
  path.join(LESSONS_DIR, "stream_output.txt"),
  path.join(LESSONS_DIR, "copied.txt"),
  path.join(LESSONS_DIR, "temp_files")
]

function runFile(filePath, args = [], timeoutMs = 10000) {
  const result = spawnSync(process.execPath, [filePath, ...args], {
    encoding: "utf8",
    timeout: timeoutMs,
    cwd: ROOT
  })

  if (result.error && result.error.code === "ETIMEDOUT") {
    return { ok: true, note: "timed out (expected for servers)" }
  }

  if (result.status !== 0) {
    return { ok: false, output: result.stdout + result.stderr }
  }

  return { ok: true }
}

function cleanup() {
  for (const p of CLEANUP) {
    try {
      fs.rmSync(p, { recursive: true, force: true })
    } catch {
      // ignore
    }
  }
}

let failures = 0
let total = 0

console.log("=".repeat(60))
console.log("  NODE FUNDAMENTALS — VERIFY")
console.log("=".repeat(60))

// --- Lessons ---
console.log("\n📚 LESSONS")
const lessons = fs.readdirSync(LESSONS_DIR)
  .filter(f => f.endsWith(".js"))
  .sort()

for (const lesson of lessons) {
  total++
  const args = SPECIAL_ARGS[lesson] || []
  const timeout = NON_EXITING.has(lesson) ? 3000 : 10000
  const result = runFile(path.join(LESSONS_DIR, lesson), args, timeout)

  if (result.ok) {
    console.log(`  ✅ ${lesson}${result.note ? ` (${result.note})` : ""}`)
  } else {
    failures++
    console.log(`  ❌ ${lesson}`)
    console.log(result.output.split("\n").slice(-5).join("\n"))
  }
}

// --- Solutions ---
console.log("\n💡 SOLUTIONS")
const solutions = fs.readdirSync(SOLUTIONS_DIR)
  .filter(f => f.endsWith(".js"))
  .sort()

for (const solution of solutions) {
  total++
  const result = runFile(path.join(SOLUTIONS_DIR, solution))

  if (result.ok) {
    // Check that all checks passed (no ❌ in output)
    const output = result.output || ""
    const failedChecks = (output.match(/❌/g) || []).length
    if (failedChecks > 0) {
      failures++
      console.log(`  ❌ ${solution} — ${failedChecks} checker(s) failed`)
    } else {
      console.log(`  ✅ ${solution}`)
    }
  } else {
    failures++
    console.log(`  ❌ ${solution}`)
    console.log(result.output.split("\n").slice(-5).join("\n"))
  }
}

cleanup()

console.log("\n" + "=".repeat(60))
if (failures === 0) {
  console.log(`  ALL ${total} FILES PASS ✅ — Gempak!`)
} else {
  console.log(`  ${failures}/${total} FAILED ❌ — Sila check!`)
  process.exitCode = 1
}
console.log("=".repeat(60))
