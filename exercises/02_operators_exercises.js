// ============================================================
// EXERCISE 02 — Operators & Coercion
// ============================================================
// Fill in the TODOs below. Then run:
//
//   node exercises/02_operators_exercises.js
// ============================================================

// TODO 1: Write a function isEven(n) that returns true if n is even
// Hint: n % 2 === 0
// Example: isEven(4) → true, isEven(7) → false
function isEven(n) {
  // your code here
}

// TODO 2: Write a function isStrictEqual(a, b) that returns a === b
// Example: isStrictEqual(5, "5") → false, isStrictEqual(5, 5) → true
function isStrictEqual(a, b) {
  // your code here
}

// TODO 3: Write a function isTruthy(value) that returns Boolean(value)
// Example: isTruthy(0) → false, isTruthy("hello") → true
function isTruthy(value) {
  // your code here
}

// TODO 4: Write a function defaultName(name) that returns name || "Guest"
// Example: defaultName("") → "Guest", defaultName("Aiman") → "Aiman"
function defaultName(name) {
  // your code here
}

// TODO 5: Write a function area(length, width) that returns length * width
// Example: area(5, 4) → 20
function area(length, width) {
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

check("isEven(4)", () => isEven(4), true)
check("isEven(7)", () => isEven(7), false)
check("isEven(0)", () => isEven(0), true)
check("isStrictEqual(5, '5')", () => isStrictEqual(5, "5"), false)
check("isStrictEqual(5, 5)", () => isStrictEqual(5, 5), true)
check("isTruthy(0)", () => isTruthy(0), false)
check("isTruthy('hello')", () => isTruthy("hello"), true)
check("isTruthy([])", () => isTruthy([]), true)
check("defaultName('')", () => defaultName(""), "Guest")
check("defaultName('Aiman')", () => defaultName("Aiman"), "Aiman")
check("area(5, 4)", () => area(5, 4), 20)
check("area(3, 3)", () => area(3, 3), 9)

console.log(`\n${passed} passed, ${failed} failed`)
if (failed > 0) {
  console.log("Sila check balik jawapan awak! 💪")
  process.exitCode = 1
} else {
  console.log("Semua betul! Gempak! 🎉")
}
