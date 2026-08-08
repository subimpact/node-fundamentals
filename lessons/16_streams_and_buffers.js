// ============================================================
// LESSON 16 — Streams & Buffers
// ============================================================
// Buffers = raw binary data (like a byte array).
// Streams = data that flows in chunks, piece by piece.
// Together they let Node handle HUGE data without
// loading it all into memory at once.
// ============================================================

// ============================================================
// 1. Buffers — raw bytes
// ============================================================
// When you read a file WITHOUT an encoding, you get a Buffer:

const fs = require("node:fs")
const path = require("node:path")

const filePath = path.join(__dirname, "sample.txt")
const buffer = fs.readFileSync(filePath)   // no "utf8" → Buffer!
console.log(buffer)                        // <Buffer 48 65 6c 6c 6f ...>

// A Buffer is a fixed-size chunk of memory holding bytes.
// "Hello" in bytes: 48 65 6c 6c 6f (hex for H-e-l-l-o)

// Convert Buffer → string:
console.log(buffer.toString("utf8"))       // "Hello from Lesson 14!"

// Create a buffer from a string:
const buf = Buffer.from("nasi lemak")
console.log(buf.length)                    // 10 — bytes, not characters!
console.log(buf.toString())                // "nasi lemak"

// ============================================================
// 2. Why buffers matter
// ============================================================
// Text files are bytes. Images are bytes. Videos are bytes.
// Everything on disk is bytes. Buffers are how Node
// represents "bytes" in memory. You'll see them whenever
// you work with binary data or network responses.

// ============================================================
// 3. Streams — data in chunks
// ============================================================
// Imagine a 5GB video file. Reading it ALL into memory
// would use 5GB of RAM! Streams solve this: read a chunk,
// process it, discard it, read the next chunk.

// A readable stream:
const readStream = fs.createReadStream(filePath, "utf8")

readStream.on("data", chunk => {
  console.log("Chunk received:", chunk)
})

readStream.on("end", () => {
  console.log("--- Stream finished ---")
})

// For a small file this is one chunk. For a big file,
// "data" fires many times with pieces of the file.

// ============================================================
// 4. Writing streams
// ============================================================

const writeStream = fs.createWriteStream(path.join(__dirname, "stream_output.txt"))

writeStream.write("Line 1\n")
writeStream.write("Line 2\n")
writeStream.write("Line 3\n")
writeStream.end()   // signal we're done

writeStream.on("finish", () => {
  console.log("Write stream finished!")
})

// ============================================================
// 5. pipe — connect streams together
// ============================================================
// pipe() is the magic method: it takes a readable stream's
// output and feeds it into a writable stream.

// Copy a file using streams (memory-efficient!):
const source = fs.createReadStream(filePath)
const dest = fs.createWriteStream(path.join(__dirname, "copied.txt"))

source.pipe(dest)

dest.on("finish", () => {
  console.log("File copied via pipe!")
})

// ============================================================
// 6. process.stdout — a stream you already use
// ============================================================
// console.log writes to process.stdout, which is a stream!

process.stdout.write("Direct stream write!\n")
// Same as console.log("Direct stream write!")

// ============================================================
// 7. Why streams matter in real apps
// ============================================================
//   - Serving a big file over HTTP: stream it, don't load it
//   - Processing logs: read line by line, not all at once
//   - Uploads/downloads: handle chunks as they arrive
//
// Example (Lesson 17 preview):
//   const server = http.createServer((req, res) => {
//     const stream = fs.createReadStream("big.mp4")
//     stream.pipe(res)   // streams the file to the browser!
//   })

// ============================================================
// 8. The three stream types
// ============================================================
//   Readable  — you read FROM it (file, HTTP request, stdin)
//   Writable  — you write TO it (file, HTTP response, stdout)
//   Duplex    — both (sockets, HTTP requests/responses)
//
// Events you'll see:
//   Readable: "data" (chunk arrived), "end" (no more)
//   Writable: "finish" (all flushed), "error"
//   Both:     "error" (something broke)

// ============================================================
// EXERCISE TIME!
// ============================================================
// Open exercises/16_streams_exercises.js and fill in the TODOs.
// ============================================================
