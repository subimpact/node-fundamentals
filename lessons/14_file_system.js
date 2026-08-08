// ============================================================
// LESSON 14 — File System
// ============================================================
// Reading and writing files is THE most common Node task.
// The fs module is your toolbox. This lesson covers the
// essentials: read, write, append, paths, sync vs async.
// ============================================================

const fs = require("node:fs")
const path = require("node:path")

// ============================================================
// 1. Reading a file — synchronous (blocking)
// ============================================================
// The sync versions end in "Sync". They BLOCK the program
// until the file is read. Simple, but don't use in servers.

const filePath = path.join(__dirname, "sample.txt")
const content = fs.readFileSync(filePath, "utf8")
console.log("File content:", content)

// __dirname = the folder this file lives in (built-in)
// "utf8" = decode as text (without it you get a Buffer — Lesson 16!)

// ============================================================
// 2. Reading a file — asynchronous (non-blocking)
// ============================================================
// The async version takes a callback. The program continues
// while the file loads. This is the server-friendly way.

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.log("Error:", err.message)
    return
  }
  console.log("Async content:", data)
})

console.log("This prints BEFORE the async read finishes!")

// ============================================================
// 3. Reading with promises — the modern way
// ============================================================
// fs/promises gives you async/await versions. Best of both:

const fsp = require("node:fs/promises")

async function readWithAwait() {
  try {
    const data = await fsp.readFile(filePath, "utf8")
    console.log("Promise content:", data)
  } catch (err) {
    console.log("Error:", err.message)
  }
}

readWithAwait()

// ============================================================
// 4. Writing files
// ============================================================

const outputPath = path.join(__dirname, "output.txt")

// Sync write (overwrites!):
fs.writeFileSync(outputPath, "Hello from Lesson 14!\n")

// Async write with await:
async function writeFile() {
  await fsp.writeFile(outputPath, "Overwritten with await!\n")
  console.log("File written!")
}

writeFile()

// ⚠️ writeFile OVERWRITES the whole file. To add to the end,
// use appendFile (section 5).

// ============================================================
// 5. Appending — add to the end
// ============================================================

async function appendLine() {
  await fsp.appendFile(outputPath, "Appended line!\n")
  const final = await fsp.readFile(outputPath, "utf8")
  console.log("Final content:", final)
}

appendLine()

// ============================================================
// 6. Checking if a file exists
// ============================================================

async function checkExists() {
  try {
    await fsp.access(outputPath)
    console.log("output.txt exists!")
  } catch {
    console.log("output.txt does NOT exist")
  }
}

checkExists()

// ============================================================
// 7. Directories — create and list
// ============================================================

async function dirWork() {
  const dir = path.join(__dirname, "temp_files")
  await fsp.mkdir(dir, { recursive: true })   // create (recursive = nested ok)

  const entries = await fsp.readdir(__dirname)
  console.log("Files in this folder:", entries)
}

dirWork()

// ============================================================
// 8. path — the path toolkit
// ============================================================

console.log("basename:", path.basename(filePath))     // sample.txt
console.log("dirname:", path.dirname(filePath))       // .../lessons
console.log("extname:", path.extname(filePath))       // .txt
console.log("isAbsolute:", path.isAbsolute(filePath)) // true

// ⚠️ NEVER build paths with string concatenation:
//   const bad = __dirname + "/" + "file.txt"   // breaks on Windows!
// Use path.join() — it handles separators for every OS.

// ============================================================
// 9. Sync vs async — when to use which
// ============================================================
//   SYNC (readFileSync): blocks everything until done.
//     OK for: startup scripts, one-off tools, config loading.
//     BAD for: web servers (blocks ALL users while reading!).
//
//   ASYNC (readFile + callback): doesn't block.
//     OK for: servers, anything with users waiting.
//
//   PROMISES (fs/promises + await): async + readable.
//     The modern default. Use this unless you have a reason not to.

// ============================================================
// EXERCISE TIME!
// ============================================================
// Open exercises/14_file_system_exercises.js and fill in the TODOs.
// ============================================================
