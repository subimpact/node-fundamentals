// ============================================================
// SOLUTION 18 — CLI & Process
// ============================================================
// Compare with your own answers, then run:
//
//   node solutions/18_cli_solutions.js
// ============================================================

const argsStartIndex = "2"
const exitZero = "success"
const exitOne = "error"
const inputModule = "readline"
const cwdVsDirname = "cwd is where you ran the command, __dirname is where the file lives"
const secrets = "environment variables"

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

check("argsStartIndex", () => argsStartIndex, "2")
check("exitZero", () => exitZero, "success")
check("exitOne", () => exitOne, "error")
check("inputModule", () => inputModule, "readline")
check("cwdVsDirname", () => cwdVsDirname, "cwd is where you ran the command, __dirname is where the file lives")
check("secrets", () => secrets, "environment variables")

console.log(`\n${passed} passed, ${failed} failed`)
if (failed > 0) {
  console.log("Sila check balik jawapan awak! 💪")
  process.exitCode = 1
} else {
  console.log("Semua betul! Gempak! 🎉")
}
