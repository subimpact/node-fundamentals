// ============================================================
// EXERCISE 10 — Error Handling
// ============================================================
// Fill in the TODOs below. Then run:
//
//   node exercises/10_error_handling_exercises.js
// ============================================================

// TODO 1: Write a function safeDivide(a, b) that returns a / b,
// but returns "Tak boleh bahagi dengan zero!" if b is 0.
// (Use try/catch OR a simple check — your choice!)
// Example: safeDivide(10, 2) → 5, safeDivide(10, 0) → "Tak boleh bahagi dengan zero!"
function safeDivide(a, b) {
  // your code here
}

// TODO 2: Write a function parseJSONSafe(str) that returns
// JSON.parse(str), but returns null if parsing fails.
// (Use try/catch!)
// Example: parseJSONSafe('{"a":1}') → { a: 1 }, parseJSONSafe("bad") → null
function parseJSONSafe(str) {
  // your code here
}

// TODO 3: Write a function withdraw(balance, amount) that throws
// an Error with message "Baki tak cukup!" if amount > balance,
// otherwise returns balance - amount.
// Example: withdraw(100, 50) → 50, withdraw(50, 100) → throws!
function withdraw(balance, amount) {
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
