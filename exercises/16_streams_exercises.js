// ============================================================
// EXERCISE 16 — Streams & Buffers
// ============================================================
// Fill in the TODOs below. Then run:
//
//   node exercises/16_streams_exercises.js
// ============================================================

const fs = require("node:fs")
const path = require("node:path")

// TODO 1: Write a function bufferToString(buffer) that returns
// buffer.toString("utf8")
// Example: bufferToString(Buffer.from("hello")) → "hello"
function bufferToString(buffer) {
  // your code here
}

// TODO 2: Write a function stringToBuffer(str) that returns
// Buffer.from(str)
// Example: stringToBuffer("hello") → <Buffer 68 65 6c 6c 6f>
function stringToBuffer(str) {
  // your code here
}

// TODO 3: Write a function copyFile(source, dest) that copies
// a file using streams + pipe. It should return a Promise
// that resolves when the copy is done.
// Hint: createReadStream(source).pipe(createWriteStream(dest))
//       and resolve on the dest "finish" event
// Example: await copyFile("a.txt", "b.txt")
function copyFile(source, dest) {
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
  check("bufferToString(Buffer.from('hello'))", () => bufferToString(Buffer.from("hello")), "hello")
  check("bufferToString(Buffer.from('nasi lemak'))", () => bufferToString(Buffer.from("nasi lemak")), "nasi lemak")

  const buf = stringToBuffer("hello")
  check("stringToBuffer('hello') is Buffer", () => Buffer.isBuffer(buf), true)
  check("stringToBuffer('hello') content", () => buf.toString(), "hello")

  const source = path.join(__dirname, "..", "lessons", "sample.txt")
  const dest = path.join(__dirname, "copy_test.txt")
  await copyFile(source, dest)
  const copied = fs.readFileSync(dest, "utf8")
  check("copyFile() content", () => copied, "Hello from Lesson 14!\n")
  fs.unlinkSync(dest)

  console.log(`\n${passed} passed, ${failed} failed`)
  if (failed > 0) {
    console.log("Sila check balik jawapan awak! 💪")
    process.exitCode = 1
  } else {
    console.log("Semua betul! Gempak! 🎉")
  }
}

runChecks()
