// ============================================================
// LESSON 10 — Error Handling
// ============================================================
// Errors happen. Good code doesn't avoid errors — it handles
// them gracefully. This lesson teaches the try/catch pattern.
// ============================================================

// ============================================================
// 1. What happens without handling?
// ============================================================

// console.log(unknownVariable)
// ❌ ReferenceError: unknownVariable is not defined
// The program CRASHES — everything after that line never runs.

// ============================================================
// 2. try / catch — catch the error, keep going
// ============================================================

try {
  console.log(unknownVariable)   // this throws
  console.log("This never runs") // skipped!
} catch (error) {
  console.log("Something went wrong:", error.message)
}

console.log("Program continues!")   // ✅ still runs

// try: attempt the risky code
// catch: if anything in try throws, jump here with the error
// The program doesn't crash — it recovers.

// ============================================================
// 3. The error object
// ============================================================

try {
  JSON.parse("not json at all")
} catch (error) {
  console.log("name:", error.name)        // SyntaxError
  console.log("message:", error.message)   // Unexpected token...
  console.log("stack:", error.stack)       // where it happened (long!)
}

// Common error types:
//   ReferenceError — variable doesn't exist
//   TypeError      — wrong type used (e.g. calling a number)
//   SyntaxError    — invalid syntax (often from JSON.parse)
//   RangeError     — number out of range

// ============================================================
// 4. throw — create your own errors
// ============================================================

function divide(a, b) {
  if (b === 0) {
    throw new Error("Tak boleh bahagi dengan zero!")
  }
  return a / b
}

try {
  console.log(divide(10, 2))    // 5
  console.log(divide(10, 0))    // throws!
} catch (error) {
  console.log("Error:", error.message)   // Error: Tak boleh bahagi dengan zero!
}

// throw stops the function immediately and hands the error
// to the nearest catch.

// ============================================================
// 5. Custom error classes
// ============================================================
// For bigger apps, make your own error types:

class InsufficientFundsError extends Error {
  constructor(balance, amount) {
    super(`Baki RM${balance} tak cukup untuk RM${amount}`)
    this.name = "InsufficientFundsError"
    this.balance = balance
    this.amount = amount
  }
}

function withdraw(balance, amount) {
  if (amount > balance) {
    throw new InsufficientFundsError(balance, amount)
  }
  return balance - amount
}

try {
  withdraw(50, 100)
} catch (error) {
  console.log(error.name)        // InsufficientFundsError
  console.log(error.message)     // Baki RM50 tak cukup untuk RM100
  console.log(error.balance)     // 50 — custom data travels with it!
}

// ============================================================
// 6. finally — runs no matter what
// ============================================================

function riskyOperation() {
  try {
    console.log("Trying...")
    throw new Error("Boom!")
  } catch (error) {
    console.log("Caught:", error.message)
  } finally {
    console.log("Cleanup — always runs!")   // even if no error
  }
}

riskyOperation()
// Trying...
// Caught: Boom!
// Cleanup — always runs!

// finally is for cleanup: closing files, clearing timers,
// releasing resources. It runs whether or not there was an error.

// ============================================================
// 7. try/finally without catch — let it crash, but clean up
// ============================================================

function withFinallyOnly() {
  try {
    console.log("Doing risky thing...")
    throw new Error("Still crashes")
  } finally {
    console.log("But cleanup happened first!")
  }
}

// withFinallyOnly()   // uncomment to see: cleanup runs, THEN crash

// ============================================================
// 8. Catching specific errors
// ============================================================

try {
  JSON.parse("{bad json")
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log("It's a syntax problem:", error.message)
  } else {
    console.log("Something else:", error.message)
  }
}

// ============================================================
// 9. Errors in async code — preview of Lesson 11!
// ============================================================
// Async errors DON'T get caught by surrounding try/catch.
// You need .catch() or try/catch inside async functions.

// WRONG — this does NOT catch the async error:
// try {
//   setTimeout(() => { throw new Error("async boom") }, 100)
// } catch (error) {
//   console.log("Never runs!")   // ❌
// }

// We'll learn the RIGHT way in Lesson 11. Promise it!

// ============================================================
// EXERCISE TIME!
// ============================================================
// Open exercises/10_error_handling_exercises.js and fill in the TODOs.
// ============================================================
