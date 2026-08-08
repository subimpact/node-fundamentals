// ============================================================
// SOLUTION 01 — Variables & Types
// ============================================================
// Compare with your own answers, then run:
//
//   node solutions/01_variables_solutions.js
//
// It should print all ✅ — that's how you know it's right!
// ============================================================

function add(a, b) {
  return a + b
}

function greet(name) {
  return `Hello, ${name}!`
}

function getType(value) {
  return typeof value
}

function describe(city, temp) {
  return `${city} is ${temp} degrees today`
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

check("add(2, 3)", () => add(2, 3), 5)
check("add(10, 20)", () => add(10, 20), 30)
check("greet('Aiman')", () => greet("Aiman"), "Hello, Aiman!")
check("greet('Bala')", () => greet("Bala"), "Hello, Bala!")
check("getType(42)", () => getType(42), "number")
check("getType('hello')", () => getType("hello"), "string")
check("getType(true)", () => getType(true), "boolean")
check("describe('KL', 33)", () => describe("KL", 33), "KL is 33 degrees today")
check("describe('Penang', 29)", () => describe("Penang", 29), "Penang is 29 degrees today")

console.log(`\n${passed} passed, ${failed} failed`)
if (failed > 0) {
  console.log("Sila check balik jawapan awak! 💪")
  process.exitCode = 1
} else {
  console.log("Semua betul! Gempak! 🎉")
}
