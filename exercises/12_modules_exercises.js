// ============================================================
// EXERCISE 12 — Modules
// ============================================================
// Fill in the TODOs below. Then run:
//
//   node exercises/12_modules_exercises.js
// ============================================================

// TODO 1: Require the helpers/math.js module (use the correct
// relative path — this file is in exercises/, helpers is in ../)
// const math = require(...)
const math = require("../helpers/math.js")

// TODO 2: Write a function addThenMultiply(a, b, c) that uses
// math.add(a, b) then multiplies the result by c
// Example: addThenMultiply(2, 3, 4) → 20
function addThenMultiply(a, b, c) {
  // your code here
}

// TODO 3: Write a function subtractThenAdd(a, b, c) that uses
// math.subtract(a, b) then adds c
// Example: subtractThenAdd(10, 3, 2) → 9
function subtractThenAdd(a, b, c) {
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

check("math module loaded", () => typeof math.add, "function")
check("math.add(2, 3)", () => math.add(2, 3), 5)
check("math.multiply(2, 3)", () => math.multiply(2, 3), 6)
check("math.subtract(10, 3)", () => math.subtract(10, 3), 7)
check("addThenMultiply(2, 3, 4)", () => addThenMultiply(2, 3, 4), 20)
check("addThenMultiply(1, 1, 10)", () => addThenMultiply(1, 1, 10), 20)
check("subtractThenAdd(10, 3, 2)", () => subtractThenAdd(10, 3, 2), 9)
check("subtractThenAdd(5, 5, 5)", () => subtractThenAdd(5, 5, 5), 5)

console.log(`\n${passed} passed, ${failed} failed`)
if (failed > 0) {
  console.log("Sila check balik jawapan awak! 💪")
  process.exitCode = 1
} else {
  console.log("Semua betul! Gempak! 🎉")
}
