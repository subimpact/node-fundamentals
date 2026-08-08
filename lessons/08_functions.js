// ============================================================
// LESSON 08 — Functions
// ============================================================
// Functions are reusable blocks of code. You give them inputs
// (parameters), they give you an output (return value).
// ============================================================

// ============================================================
// 1. Function declarations
// ============================================================

function add(a, b) {
  return a + b
}

console.log(add(2, 3))      // 5
console.log(add(10, 20))    // 30

// function = keyword
// add = name
// (a, b) = parameters (the inputs)
// { return a + b } = body (what it does)
// return = the output

// ============================================================
// 2. Functions without return — return undefined
// ============================================================

function greet(name) {
  console.log(`Hello, ${name}!`)
}

const result = greet("Aiman")   // prints: Hello, Aiman!
console.log(result)             // undefined — no return!

// If a function doesn't return anything, it returns undefined.

// ============================================================
// 3. Arrow functions — the modern way
// ============================================================

// Same function, three styles:
function addOld(a, b) { return a + b }          // declaration

const addArrow = (a, b) => { return a + b }      // arrow, block body

const addShort = (a, b) => a + b                 // arrow, implicit return!

console.log(addOld(1, 2))     // 3
console.log(addArrow(1, 2))   // 3
console.log(addShort(1, 2))   // 3

// With ONE parameter, you can even drop the parentheses:
const double = n => n * 2
console.log(double(5))        // 10

// ⚠️ Arrow functions with a block body { } need explicit return.
// Arrow functions WITHOUT braces return the expression automatically.

// ============================================================
// 4. Default parameters
// ============================================================

function order(drink, size = "regular") {
  return `${size} ${drink}`
}

console.log(order("teh tarik"))           // "regular teh tarik"
console.log(order("kopi o", "besar"))     // "besar kopi o"

// ============================================================
// 5. Callbacks — functions passed to functions
// ============================================================
// This is THE most important concept in JavaScript.
// A callback is a function you pass as an argument, to be
// called later (by the receiving function).

function processNumber(n, callback) {
  const doubled = n * 2
  return callback(doubled)
}

const result1 = processNumber(5, x => x + 1)     // 11
const result2 = processNumber(5, x => x * 10)    // 100
console.log(result1, result2)

// Array methods are full of callbacks (Lesson 04):
const nums = [1, 2, 3]
const doubledNums = nums.map(n => n * 2)   // the arrow IS the callback
console.log(doubledNums)                   // [ 2, 4, 6 ]

// ============================================================
// 6. Higher-order functions — functions that use functions
// ============================================================

function makeMultiplier(factor) {
  return function (n) {
    return n * factor
  }
}

const double2 = makeMultiplier(2)
const triple = makeMultiplier(3)

console.log(double2(10))    // 20
console.log(triple(10))     // 30

// makeMultiplier RETURNS a function. This is called a
// "factory" pattern — you'll see it everywhere in real code.

// ============================================================
// 7. Rest parameters — ...gathers extra arguments
// ============================================================

function sumAll(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0)
}

console.log(sumAll(1, 2, 3))          // 6
console.log(sumAll(1, 2, 3, 4, 5))    // 15

// ...numbers collects ALL arguments into an array.

// ============================================================
// 8. Arrow functions and this — the big difference
// ============================================================

const person = {
  name: "Aiman",
  greetRegular: function () {
    return `Hello, I'm ${this.name}`   // this = person
  },
  greetArrow: () => {
    return `Hello, I'm ${this.name}`   // this = ??? (NOT person!)
  }
}

console.log(person.greetRegular())   // "Hello, I'm Aiman"
console.log(person.greetArrow())     // "Hello, I'm undefined"

// ⚠️ Arrow functions DON'T have their own this.
// They inherit this from where they were defined (the outer scope).
// Rule of thumb: use regular functions for object METHODS,
// use arrows for callbacks and short transformations.

// ============================================================
// 9. IIFE — Immediately Invoked Function Expression
// ============================================================
// A function that runs the moment it's defined.
// (You'll see this in older code and some patterns.)
// Note the leading semicolon — it protects against the
// "automatic semicolon insertion" trap (see below).

;(function () {
  console.log("I run immediately!")
})()

// ⚠️ ASI TRAP: without the semicolon, this happens:
//   console.log("hi")
//   (function () { ... })()
// JavaScript reads it as: console.log("hi")(function(){...})()
// — calling the RESULT of console.log as a function. Crash!
// A leading ; on IIFEs (and lines starting with ( or [) is
// the standard protection.

// ============================================================
// EXERCISE TIME!
// ============================================================
// Open exercises/08_functions_exercises.js and fill in the TODOs.
// ============================================================
