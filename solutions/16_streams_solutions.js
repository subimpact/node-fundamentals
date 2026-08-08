// ============================================================
// SOLUTION 16 — Streams & Buffers
// ============================================================
// Compare with your own answers, then run:
//
//   node solutions/16_streams_solutions.js
// ============================================================

const fs = require("node:fs")
const path = require("node:path")

function bufferToString(buffer) {
  return buffer.toString("utf8")
}

function stringToBuffer(str) {
  return Buffer.from(str)
}

function copyFile(source, dest) {
  return new Promise((resolve, reject) => {
    const readStream = fs.createReadStream(source)
    const writeStream = fs.createWriteStream(dest)

    readStream.on("error", reject)
    writeStream.on("error", reject)
    writeStream.on("finish", resolve)

    readStream.pipe(writeStream)
  })
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
