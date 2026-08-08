// ============================================================
// EXERCISE 01 — Variables & Types
// ============================================================
// Fill in the TODOs below. Then run:
//
//   node exercises/01_variables_exercises.js
//
// The checker at the bottom will tell you if you're right!
// ============================================================

// TODO 1: Write a function add(a, b) that returns a + b
// Example: add(2, 3) should return 5
function add(a, b) {
  // your code here
}

// TODO 2: Write a function greet(name) that returns `Hello, ${name}!`
// Example: greet("Aiman") should return "Hello, Aiman!"
function greet(name) {
  // your code here
}

// TODO 3: Write a function getType(value) that returns typeof value
// Example: getType(42) should return "number"
function getType(value) {
  // your code here
}

// TODO 4: Write a function describe(city, temp) that returns
// `${city} is ${temp} degrees today`
// Example: describe("KL", 33) should return "KL is 33 degrees today"
function describe(city, temp) {
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
