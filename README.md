# 🟢 Node Fundamentals

**Learn JavaScript + Node.js from zero to hero — Malaysian style! 🇲🇾**

![Node](https://img.shields.io/badge/Node-24%20LTS-339933?logo=nodedotjs&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)
![Lessons](https://img.shields.io/badge/Lessons-20-blue)
![Exercises](https://img.shields.io/badge/Exercises-13-orange)

A complete, beginner-friendly JavaScript + Node.js learning guide with hands-on lessons, exercises, and solutions. Written in fun Malaysian English so you won't fall asleep reading code. Confirm shiok one!

> **New to programming?** Start at Lesson 00 and go in order. Part 1 is pure JavaScript — you don't need to know anything before starting.

## 🗺️ The Grand Master Roadmap

This repo is **Phase 1** of a three-phase journey:

- **Phase 1 — THIS repo (`node-fundamentals`)**: JavaScript + Node core → confident Node developer (CLI tools, file scripts, simple servers)
- **Phase 2 — `node-backend`** *(coming soon)*: Express/Fastify, REST APIs, databases, auth, testing, deployment → professional backend developer
- **Phase 3 — `node-advanced`** *(coming soon)*: streams deep-dive, worker threads, performance, security, TypeScript → master

## 📚 What you'll learn

**Part 1 — JavaScript (Lessons 00–11):** the language itself, running in Node.

| # | Lesson | Topics |
|---|---|---|
| 00 | [Hello Node!](lessons/00_hello_node.js) | What is Node, node vs browser, running scripts |
| 01 | [Variables & Types](lessons/01_variables_and_types.js) | let, const, var, typeof, numbers, strings, booleans |
| 02 | [Operators & Coercion](lessons/02_operators_and_coercion.js) | Arithmetic, == vs ===, truthiness, short-circuit |
| 03 | [Strings & Template Literals](lessons/03_strings_and_template_literals.js) | Methods, slicing, template literals, .includes() |
| 04 | [Arrays](lessons/04_arrays.js) | map, filter, reduce, spread, destructuring |
| 05 | [Objects & JSON](lessons/05_objects_and_json.js) | Object literals, destructuring, JSON.parse/stringify |
| 06 | [Control Flow](lessons/06_control_flow.js) | if/else, switch, ternary, logical operators |
| 07 | [Loops](lessons/07_loops.js) | for, while, for...of, for...in, break, continue |
| 08 | [Functions](lessons/08_functions.js) | function declarations, arrows, callbacks, default params |
| 09 | [Scope & Closures](lessons/09_scope_and_closures.js) | Block scope, hoisting, closures, IIFE |
| 10 | [Error Handling](lessons/10_error_handling.js) | try/catch/finally, throw, custom errors |
| 11 | [Async JavaScript](lessons/11_async_javascript.js) | Callbacks, Promises, async/await — the bridge to Node |

**Part 2 — Node Runtime (Lessons 12–19):** what makes Node special.

| # | Lesson | Topics |
|---|---|---|
| 12 | [Modules](lessons/12_modules.js) | CommonJS require, module.exports, ESM import |
| 13 | [npm](lessons/13_npm.js) | init, install, package.json, scripts, semver |
| 14 | [File System](lessons/14_file_system.js) | fs read/write, path, sync vs async |
| 15 | [Events](lessons/15_events.js) | EventEmitter, on/emit, once |
| 16 | [Streams & Buffers](lessons/16_streams_and_buffers.js) | Buffers, readable/writable streams, pipe |
| 17 | [HTTP & Servers](lessons/17_http_and_servers.js) | http.createServer, routes, JSON API |
| 18 | [CLI & Process](lessons/18_cli_and_process.js) | process.argv, env, exit codes, stdin |
| 19 | [Capstone: Todo CLI](lessons/19_capstone_todo_cli.js) | Build a real todo app with file persistence |

## ✅ Requirements

- **Node.js 24 LTS or newer** — download from [nodejs.org](https://nodejs.org)
- Nothing else! No frameworks, no dependencies. Everything runs with plain `node`.

Check your version:

```bash
node --version   # should print v24.x.x or higher
```

## 🚀 Quick Start

1. **Clone the repo:**
   ```bash
   git clone https://github.com/subimpact/node-fundamentals.git
   cd node-fundamentals
   ```

2. **Read and run lessons in order:**
   ```bash
   node lessons/00_hello_node.js
   node lessons/01_variables_and_types.js
   # ... and so on
   ```
   *(Not sure if your output is right? Check [EXPECTED_OUTPUTS.md](EXPECTED_OUTPUTS.md)!)*

3. **Try the exercises:**
   ```bash
   # Open the exercise file, fill in the TODOs
   # Then run it. There are built-in Malaysian checkers to guide you!
   node exercises/01_variables_exercises.js

   # Check the solutions when you're done:
   node solutions/01_variables_solutions.js
   ```

4. **Run everything at once** (lessons + solutions must all pass):
   ```bash
   npm test
   ```

## 📁 Project Structure

```
node-fundamentals/
├── README.md              ← You are here!
├── LICENSE                ← MIT License
├── .gitignore             ← Git ignore rules
├── package.json           ← Project metadata + npm test
├── EXPECTED_OUTPUTS.md    ← What each lesson should print
├── CHANGELOG.md           ← Version history
├── CONTRIBUTING.md        ← How to help out
├── lessons/               ← 20 lesson files (read + run these!)
├── exercises/             ← 13 exercise files with built-in checkers
├── solutions/             ← 13 solution files
└── scripts/
    └── verify.js          ← Runs every lesson + solution (npm test)
```

## 🎓 How the exercises work

Each exercise file has **TODO comments** where you write your code, and a **checker** at the bottom that tests your answers automatically:

```bash
$ node exercises/04_arrays_exercises.js
✅ double([1, 2, 3]) — betul!
✅ evens([1, 2, 3, 4, 5, 6]) — betul!
❌ total([1, 2, 3])
   got:      6
   expected: 7
```

No setup, no test framework — just run the file and see how you did. Solutions are in `solutions/` when you're stuck.

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) — terima kasih in advance! 🇲🇾

## 📜 License

MIT — use it, share it, teach with it. Just keep the attribution.
