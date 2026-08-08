// ============================================================
// LESSON 01 — Variables & Types
// ============================================================
// Variables are named boxes that hold values.
// JavaScript has THREE ways to declare them:
//
//   let    — a variable that can CHANGE later (reassignable)
//   const  — a constant, CANNOT change after assignment
//   var    — old way, has weird rules (we'll explain in Lesson 09)
//
// RULE OF THUMB: use const by default. Only use let when you
// KNOW the value needs to change. This prevents bugs!
// ============================================================

// ============================================================
// 1. let — the changeable variable
// ============================================================

let age = 30
console.log(age)          // 30

age = 31                  // Reassign — allowed with let
console.log(age)          // 31

// ============================================================
// 2. const — the unchangeable constant
// ============================================================

const name = "Aiman"
console.log(name)         // Aiman

// name = "Ali"           // ❌ ERROR! Cannot reassign a const
// Uncomment the line above and run to see the error.

// ============================================================
// 3. Data types — what kinds of values exist?
// ============================================================

const myNumber = 42            // number — integers AND decimals
const myDecimal = 3.14         // also a number
const myString = "Hello"       // string — text, in quotes
const myBoolean = true         // boolean — true or false
const myNull = null            // null — "intentionally empty"
let myUndefined                // undefined — "not set yet"
const myArray = [1, 2, 3]      // array — a list (Lesson 04!)
const myObject = { a: 1 }      // object — key-value pairs (Lesson 05!)

// ============================================================
// 4. typeof — "what type is this?"
// ============================================================
// typeof tells you the type of a value. Super useful for debugging!

console.log(typeof 42)          // number
console.log(typeof 3.14)        // number  (no separate "float" type!)
console.log(typeof "Hello")     // string
console.log(typeof true)        // boolean
console.log(typeof null)        // object  ⚠️ famous JavaScript quirk!
console.log(typeof myUndefined) // undefined
console.log(typeof [1, 2, 3])   // object  ⚠️ arrays are objects (Lesson 04)
console.log(typeof { a: 1 })    // object

// ⚠️ TWO FAMOUS QUIRKS (memorize these, they come up in interviews):
//   1. typeof null === "object"  — a bug from 1995, kept for compatibility
//   2. typeof [1,2,3] === "object" — arrays ARE objects, just special ones

// ============================================================
// 5. Numbers — integers and decimals are the same type
// ============================================================

const price = 9.90
const quantity = 3
const total = price * quantity
console.log(total)              // 29.700000000000003  ⚠️ floating point quirk!
console.log(Math.round(total * 100) / 100)  // 29.7 — the fix

// ⚠️ FLOATING POINT QUIRK: 0.1 + 0.2 === 0.30000000000000004
// Computers store decimals in binary, and some decimals can't be
// represented exactly. For money, round carefully (like above) or
// use integers (cents) — we'll see this again in Lesson 02!

// ============================================================
// 6. Strings — text
// ============================================================

const greeting = "Apa khabar?"
console.log(greeting)

// Strings have a .length property:
console.log("Hello".length)     // 5

// And you can access individual characters with [index]:
// (indexes start at 0!)
console.log("Hello"[0])         // H
console.log("Hello"[1])         // e
console.log("Hello"[4])         // o

// ============================================================
// 7. Booleans — true or false
// ============================================================

const isRaining = true
const isSunny = false
console.log(isRaining)          // true
console.log(isSunny)            // false

// Booleans usually come from COMPARISONS (Lesson 02):
console.log(5 > 3)              // true
console.log(5 < 3)              // false

// ============================================================
// 8. Template literals — strings with superpowers
// ============================================================
// Backticks (`) let you embed variables directly with ${...}
// This is the MODERN way to build strings. Use it!

const city = "Kuala Lumpur"
const temp = 33
console.log(`I live in ${city}, it's ${temp} degrees today!`)
// Output: I live in Kuala Lumpur, it's 33 degrees today!

// Compare with old-style concatenation:
console.log("I live in " + city + ", it's " + temp + " degrees today!")
// Same output, but uglier. Template literals win!

// ============================================================
// EXERCISE TIME!
// ============================================================
// Open exercises/01_variables_exercises.js and fill in the TODOs.
// Then run:  node exercises/01_variables_exercises.js
// ============================================================
