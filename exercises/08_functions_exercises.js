// ============================================================
// EXERCISE 08 — Functions
// ============================================================
// Fill in the TODOs below. Then run:
//
//   node exercises/08_functions_exercises.js
// ============================================================

// TODO 1: Write an arrow function double(n) that returns n * 2
// Example: double(5) → 10
const double = (n) => {
  // your code here
}

// TODO 2: Write an arrow function greet(name = "dunia") that returns
// `Hello, ${name}!`
// Example: greet() → "Hello, dunia!", greet("Aiman") → "Hello, Aiman!"
const greet = (name = "dunia") => {
  // your code here
}

// TODO 3: Write a function applyTwice(n, fn) that calls fn twice:
// fn(fn(n))
// Example: applyTwice(3, x => x + 1) → 5
function applyTwice(n, fn) {
  // your code here
}

// TODO 4: Write a function makeAdder(x) that returns a function
// that adds x to its argument
// Example: const add5 = makeAdder(5); add5(10) → 15
function makeAdder(x) {
  // your code here
}

// TODO 5: Write a function sumAll(...numbers) that returns the sum
// of all arguments
// Example: sumAll(1, 2, 3) → 6
function sumAll(...numbers) {
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

check("double(5)", () => double(5), 10)
check("double(0)", () => double(0), 0)
check("greet()", () => greet(), "Hello, dunia!")
check("greet('Aiman')", () => greet("Aiman"), "Hello, Aiman!")
check("applyTwice(3, x => x + 1)", () => applyTwice(3, x => x + 1), 5)
check("applyTwice(2, x => x * 3)", () => applyTwice(2, x => x * 3), 18)
check("makeAdder(5)(10)", () => makeAdder(5)(10), 15)
check("makeAdder(0)(7)", () => makeAdder(0)(7), 7)
check("sumAll(1, 2, 3)", () => sumAll(1, 2, 3), 6)
check("sumAll(1, 2, 3, 4, 5)", () => sumAll(1, 2, 3, 4, 5), 15)

console.log(`\n${passed} passed, ${failed} failed`)
if (failed > 0) {
  console.log("Sila check balik jawapan awak! 💪")
  process.exitCode = 1
} else {
  console.log("Semua betul! Gempak! 🎉")
}
