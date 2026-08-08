// ============================================================
// SOLUTION 13 — npm
// ============================================================
// Compare with your own answers, then run:
//
//   node solutions/13_npm_solutions.js
// ============================================================

const initCommand = "npm init -y"
const installCommand = "npm install express"
const caretMeaning = "allow minor and patch updates, but not major"
const packagesFolder = "node_modules"
const lockFile = "package-lock.json"
const devFlag = "--save-dev"

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
