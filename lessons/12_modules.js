// ============================================================
// LESSON 12 — Modules
// ============================================================
// Modules = splitting code into separate files.
// Node has TWO module systems:
//
//   CommonJS — the original (require / module.exports)
//   ESM      — the modern standard (import / export)
//
// This course uses CommonJS (the default for .js files).
// We'll cover ESM at the end so you recognize both.
// ============================================================

// ============================================================
// 1. Why modules?
// ============================================================
// One file with 5000 lines is unreadable. Modules let you:
//   - Split code into logical pieces
//   - Reuse code across files
//   - Hide internals (only export what others should use)

// ============================================================
// 2. Exporting — module.exports
// ============================================================
// Look at helpers/math.js in this repo:

//   // helpers/math.js
//   function add(a, b) { return a + b }
//   function multiply(a, b) { return a * b }
//
//   module.exports = { add, multiply }

// module.exports is the "door" of the module.
// Whatever you put on it is what other files can import.

// ============================================================
// 3. Importing — require
// ============================================================

const math = require("../helpers/math.js")

console.log(math.add(2, 3))        // 5
console.log(math.multiply(2, 3))   // 6

// require("../helpers/math.js") loads the file and returns
// its module.exports. The .js extension is optional:
//   require("../helpers/math")   // also works

// ============================================================
// 4. Destructuring imports
// ============================================================

const { add, multiply } = require("../helpers/math.js")
console.log(add(10, 5))        // 15
console.log(multiply(10, 5))   // 50

// ============================================================
// 5. Built-in modules — no path needed
// ============================================================
// Node ships with many built-in modules. Just require them:

const os = require("node:os")
const path = require("node:path")

console.log("Platform:", os.platform())      // linux / darwin / win32
console.log("CPUs:", os.cpus().length)
console.log("Home:", os.homedir())

console.log("Path separator:", path.sep)     // "/" on Linux/Mac, "\\" on Windows
console.log("Joined:", path.join("a", "b", "c.txt"))  // a/b/c.txt

// The "node:" prefix (node:os) is the modern style — it makes
// it clear these are built-ins, not npm packages.

// ============================================================
// 6. require caches — modules load once
// ============================================================

// If two files require the same module, it runs ONCE.
// The second require gets the cached exports. This means:
//   - module-level code runs once
//   - shared state persists across files

// ============================================================
// 7. module.exports vs exports
// ============================================================

//   // This works:
//   exports.add = (a, b) => a + b
//
//   // This does NOT work:
//   exports = { add: (a, b) => a + b }   // ❌ breaks the reference!
//
// exports is just a shortcut for module.exports.
// Reassigning exports breaks the link. Use module.exports
// (or exports.name = ...) and you'll never hit this trap.

// ============================================================
// 8. ESM — the modern standard (import/export)
// ============================================================
// ESM uses import/export and requires .mjs files (or
// "type": "module" in package.json).

//   // helpers/math.mjs
//   export function add(a, b) { return a + b }
//
//   // main.mjs
//   import { add } from "./helpers/math.mjs"
//   console.log(add(2, 3))   // 5

// ESM is the future — new projects increasingly use it.
// But CommonJS is still everywhere (and is the default for
// .js files). Learn both; this course leads with CommonJS.

// ============================================================
// 9. Your own module — try it!
// ============================================================
// Create a file called mymodule.js:
//
//   const secret = "hidden"
//   function shout(msg) { return msg.toUpperCase() }
//   module.exports = { shout }
//
// Then in any other file:
//   const m = require("./mymodule.js")
//   console.log(m.shout("hello"))   // HELLO
//
// Notice: `secret` is NOT exported — other files can't see it.
// That's encapsulation: modules hide their internals.

// ============================================================
// EXERCISE TIME!
// ============================================================
// Open exercises/12_modules_exercises.js and fill in the TODOs.
// ============================================================
