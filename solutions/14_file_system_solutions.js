// ============================================================
// SOLUTION 14 — File System
// ============================================================
// Compare with your own answers, then run:
//
//   node solutions/14_file_system_solutions.js
// ============================================================

const fs = require("node:fs/promises")
const path = require("node:path")

async function readGreeting() {
  const data = await fs.readFile(path.join(__dirname, "..", "lessons", "sample.txt"), "utf8")
  return data.trim()
}

async function writeHello(filePath) {
  await fs.writeFile(filePath, "Hello, dunia!")
}

async function appendLine(filePath, line) {
  await fs.appendFile(filePath, line + "\n")
}

// ============================================================
// CHECKER — same as the exercise file
// ============================================================

let passed = 0
let failed = 0

function check(name, fn, expected) {
  try {
    const actual = fn()
    const ok = JSON.stringify(actual) === JSON.stringify(expected)
    if (ok) {
      passed++
      console.log(`✅ ${name} — betul!`)
    } else {
      failed++
      console.log(`❌ ${name}`)
      console.log(`   got:      ${JSON.stringify(actual)}`)
      console.log(`   expected: ${JSON.stringify(expected)}`)
    }
  } catch (err) {
    failed++
    console.log(`❌ ${name}`)
    console.log(`   Error: ${err.message}`)
  }
}

async function runChecks() {
  const greeting = await readGreeting()
  check("readGreeting()", () => greeting, "Hello from Lesson 14!")

  const testFile = path.join(__dirname, "test_output.txt")
  await writeHello(testFile)
  const written = await fs.readFile(testFile, "utf8")
  check("writeHello()", () => written, "Hello, dunia!")

  await appendLine(testFile, "Line 2")
  const appended = await fs.readFile(testFile, "utf8")
  // writeHello writes "Hello, dunia!" (no newline), so appendLine
  // adds "Line 2\n" right after it:
  check("appendLine()", () => appended, "Hello, dunia!Line 2\n")

  await fs.unlink(testFile).catch(() => {})

  console.log(`\n${passed} passed, ${failed} failed`)
  if (failed > 0) {
    console.log("Sila check balik jawapan awak! 💪")
    process.exitCode = 1
  } else {
    console.log("Semua betul! Gempak! 🎉")
  }
}

runChecks()
