// ============================================================
// EXERCISE 07 — Loops
// ============================================================
// Fill in the TODOs below. Then run:
//
//   node exercises/07_loops_exercises.js
// ============================================================

// TODO 1: Write a function countdown(n) that returns an array
// from n down to 1 (use a for loop!)
// Example: countdown(3) → [3, 2, 1]
function countdown(n) {
  // your code here
}

// TODO 2: Write a function sumTo(n) that returns the sum of
// 1 + 2 + ... + n (use a while loop!)
// Example: sumTo(5) → 15
function sumTo(n) {
  // your code here
}

// TODO 3: Write a function collectKeys(obj) that returns an array
// of the object's keys (use for...in!)
// Example: collectKeys({ a: 1, b: 2 }) → ["a", "b"]
function collectKeys(obj) {
  // your code here
}

// TODO 4: Write a function findFirst(numbers, target) that returns
// the FIRST number in the array that is greater than target,
// or null if none (use for...of + break!)
// Example: findFirst([1, 5, 3, 9], 4) → 5
function findFirst(numbers, target) {
  // your code here
}

// TODO 5: Write a function oddNumbers(n) that returns an array of
// odd numbers from 1 to n (use continue to skip evens!)
// Example: oddNumbers(7) → [1, 3, 5, 7]
function oddNumbers(n) {
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

check("countdown(3)", () => countdown(3), [3, 2, 1])
check("countdown(1)", () => countdown(1), [1])
check("sumTo(5)", () => sumTo(5), 15)
check("sumTo(10)", () => sumTo(10), 55)
check("collectKeys({ a: 1, b: 2 })", () => collectKeys({ a: 1, b: 2 }), ["a", "b"])
check("collectKeys({ x: 1 })", () => collectKeys({ x: 1 }), ["x"])
check("findFirst([1, 5, 3, 9], 4)", () => findFirst([1, 5, 3, 9], 4), 5)
check("findFirst([1, 2, 3], 10)", () => findFirst([1, 2, 3], 10), null)
check("oddNumbers(7)", () => oddNumbers(7), [1, 3, 5, 7])
check("oddNumbers(2)", () => oddNumbers(2), [1])

console.log(`\n${passed} passed, ${failed} failed`)
if (failed > 0) {
  console.log("Sila check balik jawapan awak! 💪")
  process.exitCode = 1
} else {
  console.log("Semua betul! Gempak! 🎉")
}
