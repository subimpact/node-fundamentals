// ============================================================
// SOLUTION 08 — Functions
// ============================================================
// Compare with your own answers, then run:
//
//   node solutions/08_functions_solutions.js
// ============================================================

const double = (n) => n * 2

const greet = (name = "dunia") => `Hello, ${name}!`

function applyTwice(n, fn) {
  return fn(fn(n))
}

function makeAdder(x) {
  return function (n) {
    return n + x
  }
}

function sumAll(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0)
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
