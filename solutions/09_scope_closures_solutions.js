// ============================================================
// SOLUTION 09 — Scope & Closures
// ============================================================
// Compare with your own answers, then run:
//
//   node solutions/09_scope_closures_solutions.js
// ============================================================

function makeCounter() {
  let count = 0
  return function () {
    count += 1
    return count
  }
}

function createBankAccount(initialBalance) {
  let balance = initialBalance

  return {
    deposit(amount) {
      balance += amount
      return balance
    },
    withdraw(amount) {
      if (amount > balance) {
        return "Tak cukup duit!"
      }
      balance -= amount
      return balance
    },
    check() {
      return balance
    }
  }
}

function createMultiplier(factor) {
  return function (n) {
    return n * factor
  }
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
