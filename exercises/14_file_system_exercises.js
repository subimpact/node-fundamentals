// ============================================================
// EXERCISE 14 — File System
// ============================================================
// Fill in the TODOs below. Then run:
//
//   node exercises/14_file_system_exercises.js
// ============================================================

const fs = require("node:fs/promises")
const path = require("node:path")

// TODO 1: Write an async function readGreeting() that reads
// ../lessons/sample.txt and returns its content (trimmed!)
// Hint: use fs.readFile with "utf8", then .trim()
// Example: await readGreeting() → "Hello from Lesson 14!"
async function readGreeting() {
  // your code here
}

// TODO 2: Write an async function writeHello(filePath) that
// writes "Hello, dunia!" to the given file path
// Example: await writeHello("hello.txt") — creates hello.txt
async function writeHello(filePath) {
  // your code here
}

// TODO 3: Write an async function appendLine(filePath, line) that
// appends line + "\n" to the given file
// Example: await appendLine("hello.txt", "Line 2")
async function appendLine(filePath, line) {
  // your code here
}

// ============================================================
// CHECKER — jangan ubah apa-apa di bawah garisan ini!
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

  // cleanup
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
