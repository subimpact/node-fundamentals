// ============================================================
// LESSON 09 — Scope & Closures
// ============================================================
// Scope = where a variable is visible/accessible.
// Closures = functions that "remember" their birthplace.
// This is the lesson where JavaScript clicks for most people.
// ============================================================

// ============================================================
// 1. Global scope — visible everywhere
// ============================================================

const globalVar = "I'm global"

function showGlobal() {
  console.log(globalVar)   // can see it — it's global
}

showGlobal()               // "I'm global"

// ============================================================
// 2. Local scope — visible only inside
// ============================================================

function localDemo() {
  const localVar = "I'm local"
  console.log(localVar)    // works — we're inside
}

localDemo()                // "I'm local"
// console.log(localVar)   // ❌ ReferenceError! Not visible outside.

// ============================================================
// 3. Block scope — let and const are block-scoped
// ============================================================

{
  const blockVar = "inside braces"
  let blockLet = "also inside"
  console.log(blockVar)    // works
}
// console.log(blockVar)   // ❌ ReferenceError! Block ended.

// if/for/while blocks create scope too:
for (let i = 0; i < 3; i++) {
  // i is visible here
}
// console.log(i)         // ❌ ReferenceError! i is gone.

// ============================================================
// 4. var vs let — the old weirdness
// ============================================================
// var is NOT block-scoped — it's function-scoped (or global).
// This is why var causes bugs and let/const replaced it.

if (true) {
  var oldVar = "I escape the block!"
  let newLet = "I stay in the block"
}

console.log(oldVar)    // "I escape the block!" — var leaked out!
// console.log(newLet) // ❌ ReferenceError — let stayed inside.

// RULE: never use var in new code. Use const (default) or let.

// ============================================================
// 5. Hoisting — declarations are "moved up"
// ============================================================

console.log(hoistedFunction())   // works! "I was hoisted"

function hoistedFunction() {
  return "I was hoisted"
}

// Function declarations are fully hoisted — you can call them
// before they appear in the file.

// ⚠️ But let/const are NOT usable before their line:
// console.log(x)   // ❌ ReferenceError (temporal dead zone)
// const x = 5

// ============================================================
// 6. Closures — functions remember their birthplace
// ============================================================
// A closure is a function that keeps access to the variables
// of the scope where it was CREATED — even after that scope
// has finished running.

function counter() {
  let count = 0            // local to counter()

  return function () {     // this inner function...
    count += 1              // ...remembers `count`!
    return count
  }
}

const myCounter = counter()   // counter() is done, but...

console.log(myCounter())    // 1 — count is still alive!
console.log(myCounter())    // 2
console.log(myCounter())    // 3

// HOW? The inner function "closes over" count.
// Even though counter() finished, the returned function
// keeps a private reference to count. That's a closure!

// ============================================================
// 7. Why closures matter — private data
// ============================================================

function createBankAccount(initialBalance) {
  let balance = initialBalance   // PRIVATE — no one outside can touch it

  return {
    deposit(amount) {
      balance += amount
      return `Deposited RM${amount}. Balance: RM${balance}`
    },
    withdraw(amount) {
      if (amount > balance) return "Tak cukup duit!"
      balance -= amount
      return `Withdrew RM${amount}. Balance: RM${balance}`
    },
    check() {
      return `Balance: RM${balance}`
    }
  }
}

const account = createBankAccount(100)
console.log(account.deposit(50))    // Deposited RM50. Balance: RM150
console.log(account.withdraw(30))   // Withdrew RM30. Balance: RM120
console.log(account.check())         // Balance: RM120
// console.log(account.balance)     // undefined — it's private!

// This is how real libraries hide internal state.
// The balance is only changeable through the returned methods.

// ============================================================
// 8. Closures in loops — the classic trap
// ============================================================

// TRAP: using var in a loop with closures
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(`var: ${i}`), 100)
}
// Prints: var: 3, var: 3, var: 3  ⚠️ all 3!

// FIX: use let (block-scoped, each iteration gets its own i)
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(`let: ${j}`), 100)
}
// Prints: let: 0, let: 1, let: 2  ✅

// With var, all closures share the SAME i (which ends at 3).
// With let, each iteration creates a fresh j for its closure.
// This is THE classic JavaScript interview question!

// ============================================================
// EXERCISE TIME!
// ============================================================
// Open exercises/09_scope_closures_exercises.js and fill in the TODOs.
// ============================================================
