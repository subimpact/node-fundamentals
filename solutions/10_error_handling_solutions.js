// ============================================================
// SOLUTION 10 — Error Handling
// ============================================================
// Compare with your own answers, then run:
//
//   node solutions/10_error_handling_solutions.js
// ============================================================

function safeDivide(a, b) {
  if (b === 0) {
    return "Tak boleh bahagi dengan zero!"
  }
  return a / b
}

function parseJSONSafe(str) {
  try {
    return JSON.parse(str)
  } catch {
    return null
  }
}

function withdraw(balance, amount) {
  if (amount > balance) {
    throw new Error("Baki tak cukup!")
  }
  return balance - amount
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

check("safeDivide(10, 2)", () => safeDivide(10, 2), 5)
check("safeDivide(10, 0)", () => safeDivide(10, 0), "Tak boleh bahagi dengan zero!")
check("safeDivide(7, 2)", () => safeDivide(7, 2), 3.5)
check("parseJSONSafe('{\"a\":1}')", () => parseJSONSafe('{"a":1}'), { a: 1 })
check("parseJSONSafe('bad')", () => parseJSONSafe("bad"), null)
check("parseJSONSafe('{\"x\":[1,2]}')", () => parseJSONSafe('{"x":[1,2]}'), { x: [1, 2] })
check("withdraw(100, 50)", () => withdraw(100, 50), 50)
check("withdraw(50, 100) throws", () => {
  try {
    withdraw(50, 100)
    return "no error"
  } catch (err) {
    return err.message
  }
}, "Baki tak cukup!")
check("withdraw(30, 30)", () => withdraw(30, 30), 0)

console.log(`\n${passed} passed, ${failed} failed`)
if (failed > 0) {
  console.log("Sila check balik jawapan awak! 💪")
  process.exitCode = 1
} else {
  console.log("Semua betul! Gempak! 🎉")
}
