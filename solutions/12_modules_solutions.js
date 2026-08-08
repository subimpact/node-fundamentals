// ============================================================
// SOLUTION 12 — Modules
// ============================================================
// Compare with your own answers, then run:
//
//   node solutions/12_modules_solutions.js
// ============================================================

const math = require("../helpers/math.js")

function addThenMultiply(a, b, c) {
  return math.add(a, b) * c
}

function subtractThenAdd(a, b, c) {
  return math.subtract(a, b) + c
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
