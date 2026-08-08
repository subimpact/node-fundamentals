// ============================================================
// LESSON 18 — CLI & Process
// ============================================================
// Node isn't just for servers — it's great for command-line
// tools too. This lesson covers the process object: how to
// read arguments, environment variables, and user input.
// ============================================================

// ============================================================
// 1. process.argv — command-line arguments
// ============================================================
// Run this file with extra arguments to see them:
//   node lessons/18_cli_and_process.js hello dunia 42

console.log(process.argv)
// [
//   '/usr/bin/node',                    ← index 0: the node binary
//   '/path/to/18_cli_and_process.js',   ← index 1: this file
//   'hello',                            ← index 2: your first arg
//   'dunia',                            ← index 3
//   '42'                                ← index 4
// ]

// Your arguments start at index 2:
const args = process.argv.slice(2)
console.log("Your args:", args)

// ============================================================
// 2. A real CLI tool — greet someone by name
// ============================================================

function greetCLI() {
  const args = process.argv.slice(2)
  const name = args[0] || "dunia"
  const times = Number(args[1]) || 1

  for (let i = 0; i < times; i++) {
    console.log(`Hello, ${name}!`)
  }
}

// Try: node lessons/18_cli_and_process.js Aiman 3
// greetCLI()   // uncomment to run

// ============================================================
// 3. process.env — environment variables
// ============================================================
// Environment variables are key-value pairs set outside
// your code. Perfect for secrets (API keys, passwords).

console.log("HOME:", process.env.HOME)
console.log("USER:", process.env.USER)
console.log("NODE_ENV:", process.env.NODE_ENV || "(not set)")

// Set them when running:
//   NODE_ENV=production node lessons/18_cli_and_process.js
//   MY_SECRET=abc123 node lessons/18_cli_and_process.js

// ⚠️ NEVER hardcode secrets in code. Use env vars.
// (And never commit .env files — that's how leaks happen!)

// ============================================================
// 4. process.exit — stop the program
// ============================================================

// process.exit(0)   // 0 = success
// process.exit(1)   // 1 = error

// Exit codes matter for automation:
//   - 0: everything fine
//   - 1: something failed
//   - 2: usage error (wrong arguments)
// Scripts and CI systems check these!

// ============================================================
// 5. Reading user input — readline
// ============================================================

const readline = require("node:readline")

function askQuestion() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question("Siapa nama awak? ", answer => {
    console.log(`Selamat datang, ${answer}!`)
    rl.close()   // important! otherwise the program hangs
  })
}

// askQuestion()   // uncomment to try — type your name and press Enter

// ============================================================
// 6. process.stdin — input as a stream
// ============================================================
// For reading lots of input (piped data), stdin is a stream:

//   echo "hello" | node lessons/18_cli_and_process.js
process.stdin.on("data", chunk => {
  console.log("Got:", chunk.toString().trim())
})

// ============================================================
// 7. process.cwd() vs __dirname
// ============================================================

console.log("cwd:", process.cwd())        // where you RAN the command
console.log("__dirname:", __dirname)      // where THIS FILE lives

// These differ! If you run from /tmp:
//   cwd = /tmp, __dirname = .../node-fundamentals/lessons
// Use __dirname for file paths, process.cwd() for user intent.

// ============================================================
// 8. process.on — reacting to lifecycle events
// ============================================================

process.on("exit", code => {
  console.log(`Exiting with code ${code}`)
})

// process.on("SIGINT", ...) — Ctrl+C:
process.on("SIGINT", () => {
  console.log("\nCtrl+C pressed — bye!")
  process.exit(0)
})

// ============================================================
// 9. Building a real CLI — the pattern
// ============================================================
// A simple CLI structure:

//   const args = process.argv.slice(2)
//   const command = args[0]        // e.g. "add", "list", "remove"
//
//   switch (command) {
//     case "add":    // ... do add
//     case "list":   // ... do list
//     case "help":
//       console.log("Usage: todo <add|list|remove> ...")
//     default:
//       console.log("Unknown command:", command)
//       process.exit(1)
//   }

// You'll build exactly this in Lesson 19 — the capstone!

// ============================================================
// EXERCISE TIME!
// ============================================================
// Open exercises/18_cli_exercises.js and fill in the TODOs.
// ============================================================
