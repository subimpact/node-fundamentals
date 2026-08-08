// ============================================================
// LESSON 00 — Hello Node!
// ============================================================
// Selamat datang! This is where your Node.js journey starts.
//
// What is Node.js?
//   Node.js is a RUNTIME — a program that runs JavaScript
//   outside the browser. Before Node (2009), JavaScript could
//   only run inside web browsers. Now it can run on servers,
//   in terminals, in robots, everywhere!
//
// What is JavaScript?
//   The LANGUAGE. The rules of the game (variables, loops,
//   functions...). Node is just one place where JS can run.
//
//   Think of it like this:
//     JavaScript = the recipe book (the language)
//     Node.js    = the kitchen (the runtime)
//     Browser    = another kitchen (also runs JS!)
//
// In this course, we run JavaScript in the Node kitchen.
// ============================================================

// ============================================================
// 1. Your first program
// ============================================================
// console.log() prints text to the terminal.
// It's the JavaScript version of "print" in other languages.

console.log("Hello, dunia!")          // Double quotes work
console.log('Hello, dunia!')          // Single quotes work too
console.log(`Hello, dunia!`)          // Backticks work as well (more on this later!)

// ============================================================
// 2. Comments
// ============================================================
// Lines starting with // are comments — Node ignores them.
// They're for YOU (and other humans) to read.

// This is a comment
console.log("This is not a comment")  // This part after // is a comment

// ============================================================
// 3. Node vs Browser
// ============================================================
// In the browser, JavaScript can do things like:
//   document.getElementById("button")   // touch the webpage
//   alert("Hello!")                      // popup box
//
// In Node, JavaScript can do things like:
//   console.log("Hello")                 // print to terminal
//   process.version                      // what Node version is this?
//   require("fs")                        // read files (Lesson 14!)
//
// Some things work in BOTH (like console.log).
// Some things are browser-only (like alert).
// Some things are Node-only (like process).
// We'll learn the Node-only stuff in Part 2!

// ============================================================
// 4. Running this file
// ============================================================
// In your terminal, type:
//
//   node lessons/00_hello_node.js
//
// You should see the "Hello, dunia!" lines above.
//
// You can also use the Node REPL (Read-Eval-Print Loop):
//   Type `node` in your terminal, press Enter.
//   Now you can type JavaScript directly and see results instantly:
//
//     > 1 + 1
//     2
//     > console.log("testing")
//     testing
//
//   Type .exit or press Ctrl+C twice to leave the REPL.

// ============================================================
// 5. Numbers and basic math (sneak preview!)
// ============================================================
// Don't worry, Lesson 01 covers this properly. Just enjoy:

console.log(1 + 1)          // 2
console.log(10 - 3)         // 7
console.log(4 * 5)          // 20
console.log(10 / 4)         // 2.5 (JavaScript does real division!)
console.log(10 % 3)         // 1 (remainder — "10 mod 3")

// ============================================================
// 6. Strings (sneak preview!)
// ============================================================
// Text in JavaScript is called a "string".

console.log("Nasi lemak" + " " + "sedap")   // + joins strings together
console.log("I am " + 30 + " years old")    // number gets converted automatically

// ============================================================
// EXERCISE TIME!
// ============================================================
// Before moving on, try these in the REPL (type `node` first):
//
//   1. Print your own name:        console.log("Your Name")
//   2. Print 25 * 4                (what do you get?)
//   3. Print "Makan" + " " + "sedap"
//   4. What happens if you type:   console.log("5" + 5)   ?
//      (Interesting, right? We'll explain in Lesson 02!)
//
// When you're done, move on to Lesson 01!
// ============================================================
