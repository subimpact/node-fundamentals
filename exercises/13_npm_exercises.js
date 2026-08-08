// ============================================================
// EXERCISE 13 — npm
// ============================================================
// This exercise is about KNOWLEDGE, not code — the checker
// tests what you learned from the lesson. Fill in the TODOs
// with the correct answers, then run:
//
//   node exercises/13_npm_exercises.js
// ============================================================

// TODO 1: What command creates a new package.json?
// (Answer: "npm init -y")
const initCommand = ""

// TODO 2: What command installs a package called "express"?
// (Answer: "npm install express")
const installCommand = ""

// TODO 3: What does the ^ in "^5.4.2" mean?
// (Answer: "allow minor and patch updates, but not major")
const caretMeaning = ""

// TODO 4: What folder holds installed packages?
// (Answer: "node_modules")
const packagesFolder = ""

// TODO 5: What file records the EXACT installed versions?
// (Answer: "package-lock.json")
const lockFile = ""

// TODO 6: What flag installs a dev-only dependency?
// (Answer: "--save-dev")
const devFlag = ""

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

check("initCommand", () => initCommand, "npm init -y")
check("installCommand", () => installCommand, "npm install express")
check("caretMeaning", () => caretMeaning, "allow minor and patch updates, but not major")
check("packagesFolder", () => packagesFolder, "node_modules")
check("lockFile", () => lockFile, "package-lock.json")
check("devFlag", () => devFlag, "--save-dev")

console.log(`\n${passed} passed, ${failed} failed`)
if (failed > 0) {
  console.log("Sila check balik jawapan awak! 💪")
  process.exitCode = 1
} else {
  console.log("Semua betul! Gempak! 🎉")
}
