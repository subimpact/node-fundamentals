// ============================================================
// EXERCISE 18 — CLI & Process
// ============================================================
// This exercise is about KNOWLEDGE, not code — the checker
// tests what you learned from the lesson. Fill in the TODOs
// with the correct answers, then run:
//
//   node exercises/18_cli_exercises.js
// ============================================================

// TODO 1: What index does process.argv start YOUR arguments at?
// (Answer: "2")
const argsStartIndex = ""

// TODO 2: What does process.exit(0) mean?
// (Answer: "success")
const exitZero = ""

// TODO 3: What does process.exit(1) mean?
// (Answer: "error")
const exitOne = ""

// TODO 4: What module reads user input from the terminal?
// (Answer: "readline")
const inputModule = ""

// TODO 5: What's the difference between process.cwd() and __dirname?
// (Answer: "cwd is where you ran the command, __dirname is where the file lives")
const cwdVsDirname = ""

// TODO 6: What should you use for secrets like API keys?
// (Answer: "environment variables")
const secrets = ""

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
