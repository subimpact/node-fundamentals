// ============================================================
// EXERCISE 09 — Scope & Closures
// ============================================================
// Fill in the TODOs below. Then run:
//
//   node exercises/09_scope_closures_exercises.js
// ============================================================

// TODO 1: Write a function makeCounter() that returns a function.
// Each call to the returned function increments a counter
// and returns the new count.
// Example:
//   const counter = makeCounter()
//   counter() → 1
//   counter() → 2
//   counter() → 3
function makeCounter() {
  // your code here
}

// TODO 2: Write a function createBankAccount(initialBalance) that
// returns an object with:
//   deposit(amount) — adds to balance, returns new balance
//   withdraw(amount) — subtracts if enough, returns new balance
//   check() — returns current balance
// The balance must be PRIVATE (a closure variable).
// Example:
//   const acc = createBankAccount(100)
//   acc.deposit(50) → 150
//   acc.withdraw(30) → 120
//   acc.check() → 120
function createBankAccount(initialBalance) {
  // your code here
}

// TODO 3: Write a function createMultiplier(factor) that returns
// a function which multiplies its argument by factor.
// Example:
//   const double = createMultiplier(2)
//   double(10) → 20
function createMultiplier(factor) {
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

check("makeCounter() sequence", () => {
  const counter = makeCounter()
  return [counter(), counter(), counter()]
}, [1, 2, 3])

check("makeCounter() independent", () => {
  const a = makeCounter()
  const b = makeCounter()
  a()
  a()
  return [a(), b()]
}, [3, 1])

check("createBankAccount deposit", () => {
  const acc = createBankAccount(100)
  return acc.deposit(50)
}, 150)

check("createBankAccount withdraw", () => {
  const acc = createBankAccount(100)
  acc.deposit(50)
  return acc.withdraw(30)
}, 120)

check("createBankAccount check", () => {
  const acc = createBankAccount(100)
  acc.deposit(50)
  acc.withdraw(30)
  return acc.check()
}, 120)

check("createBankAccount private balance", () => {
  const acc = createBankAccount(100)
  return acc.balance
}, undefined)

check("createMultiplier(2)(10)", () => createMultiplier(2)(10), 20)
check("createMultiplier(3)(5)", () => createMultiplier(3)(5), 15)

console.log(`\n${passed} passed, ${failed} failed`)
if (failed > 0) {
  console.log("Sila check balik jawapan awak! 💪")
  process.exitCode = 1
} else {
  console.log("Semua betul! Gempak! 🎉")
}
