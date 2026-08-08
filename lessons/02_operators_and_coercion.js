// ============================================================
// LESSON 02 — Operators & Coercion
// ============================================================
// Operators are the symbols that DO things: + - * / % == ===
// Coercion is JavaScript's automatic type conversion — and it's
// the source of the language's most famous bugs (and jokes).
// ============================================================

// ============================================================
// 1. Arithmetic operators
// ============================================================

console.log(7 + 3)      // 10  addition
console.log(7 - 3)      // 4   subtraction
console.log(7 * 3)      // 21  multiplication
console.log(7 / 3)      // 2.3333333333333335  division (always real!)
console.log(7 % 3)      // 1   remainder (modulo)
console.log(7 ** 2)     // 49  exponent (7 squared)

// ============================================================
// 2. Assignment operators — shortcuts
// ============================================================

let x = 10
x += 5        // same as: x = x + 5
console.log(x)  // 15

x -= 3        // same as: x = x - 3
console.log(x)  // 12

x *= 2        // same as: x = x * 2
console.log(x)  // 24

x /= 4        // same as: x = x / 4
console.log(x)  // 6

x %= 4        // same as: x = x % 4
console.log(x)  // 2

// ============================================================
// 3. Comparison operators — produce booleans
// ============================================================

console.log(5 > 3)        // true
console.log(5 < 3)        // false
console.log(5 >= 5)       // true
console.log(5 <= 4)       // false
console.log(5 === 5)      // true   STRICT equal (type AND value)
console.log(5 !== 5)      // false  STRICT not equal

// ============================================================
// 4. == vs === — THE most important lesson in JavaScript
// ============================================================
// ==  : LOOSE equality — converts types first, then compares
// === : STRICT equality — no conversion, type must match
//
// RULE: ALWAYS use === and !==. Never use == or !=.
// (Linters will actually warn you about ==!)

console.log(5 == "5")       // true   ⚠️ string converted to number!
console.log(5 === "5")      // false  ✅ different types, no conversion

console.log(0 == false)     // true   ⚠️ false converts to 0!
console.log(0 === false)    // false  ✅

console.log("" == false)    // true   ⚠️ empty string converts to 0 too!
console.log("" === false)   // false  ✅

console.log(null == undefined)   // true   ⚠️ they're "equal" loosely!
console.log(null === undefined)  // false  ✅

// THE MEME:  "5" == 5 is true, but "5" === 5 is false.
//            "0" == false is true, but "0" === false is false.
//            null == undefined is true, but null === undefined is false.
// Just use === and you'll never fall into these traps!

// ============================================================
// 5. Truthiness — what counts as "true"?
// ============================================================
// In conditions (if/while/&&/||), JavaScript converts values
// to booleans. Some values are "falsy" — they act like false.

// FALSY values (act like false):
//   false, 0, "" (empty string), null, undefined, NaN
//
// EVERYTHING ELSE is truthy (acts like true):
//   true, 1, -1, "hello", "0" (string!), [], {} (empty array/object!)

console.log(Boolean(0))          // false
console.log(Boolean(""))         // false
console.log(Boolean(null))       // false
console.log(Boolean(undefined))  // false
console.log(Boolean(NaN))        // false
console.log(Boolean("0"))        // true   ⚠️ non-empty string!
console.log(Boolean([]))         // true   ⚠️ empty array is truthy!
console.log(Boolean({}))         // true   ⚠️ empty object is truthy!

// ============================================================
// 6. Logical operators — && || !
// ============================================================

// && (AND) — true only if BOTH sides are truthy
console.log(true && true)     // true
console.log(true && false)    // false

// || (OR) — true if EITHER side is truthy
console.log(true || false)    // true
console.log(false || false)   // false

// ! (NOT) — flips the boolean
console.log(!true)            // false
console.log(!false)           // true

// ============================================================
// 7. Short-circuiting — && and || are smart
// ============================================================
// || returns the FIRST truthy value (doesn't evaluate the rest)
// && returns the FIRST falsy value (or the last if all truthy)

console.log("hello" || "world")    // "hello"  (first truthy wins)
console.log("" || "fallback")      // "fallback"  (empty string is falsy!)
console.log(0 || 42)               // 42
console.log("a" && "b")            // "b"  (both truthy → last one)
console.log(null && "b")           // null (first falsy wins)

// CLASSIC PATTERN — default values with ||:
const username = ""                // imagine this comes from user input
const displayName = username || "Guest"
console.log(displayName)          // "Guest" — empty username falls back!

// ============================================================
// 8. Implicit coercion — when JS converts for you
// ============================================================

// + with a string → concatenation (string wins)
console.log("5" + 5)          // "55"  ⚠️ NOT 10!
console.log("Total: " + 10)   // "Total: 10"

// Other operators → numbers win
console.log("5" - 2)          // 3   ⚠️ string converted to number!
console.log("5" * "2")        // 10  ⚠️ both converted!
console.log("10" / 2)         // 5

// The + trap is why "5" + 5 is "55" but "5" - 2 is 3.
// JavaScript: + is overloaded (add OR concatenate), the rest are math-only.

// ============================================================
// 9. NaN — Not a Number
// ============================================================
// When math fails, you get NaN. NaN is the ONLY value that
// is not equal to itself!

console.log(0 / 0)              // NaN
console.log("abc" * 2)          // NaN
console.log(NaN === NaN)        // false  ⚠️ quirk!
console.log(Number.isNaN(NaN))  // true   ✅ the correct way to check

// ============================================================
// EXERCISE TIME!
// ============================================================
// Open exercises/02_operators_exercises.js and fill in the TODOs.
// ============================================================
