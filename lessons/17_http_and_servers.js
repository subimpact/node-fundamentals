// ============================================================
// LESSON 17 — HTTP & Servers
// ============================================================
// The moment you've been building toward: your own web server!
// Node's http module lets you create servers with ZERO
// dependencies. (Express — the popular framework — is just
// a nicer wrapper around this module.)
// ============================================================

const http = require("node:http")

// ============================================================
// 1. Your first server
// ============================================================

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" })
  res.end("Hello, dunia! 🌏")
})

// server.listen(port, callback) starts listening:
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000")
})

// ⚠️ THIS BLOCKS — the server keeps running forever.
// To test: open http://localhost:3000 in your browser,
// or run `curl http://localhost:3000` in another terminal.
// Press Ctrl+C to stop the server.

// ============================================================
// 2. Anatomy of a request
// ============================================================
// The callback receives (req, res):
//   req — the REQUEST: what the client asked for
//   res — the RESPONSE: what you send back

// req has:
//   req.url        — the path ("/", "/about", "/api/users")
//   req.method     — "GET", "POST", "PUT", "DELETE"...
//   req.headers    — headers object

// ============================================================
// 3. Routing — different paths, different responses
// ============================================================

const router = http.createServer((req, res) => {
  const { url, method } = req

  if (url === "/" && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end("Home page")
  } else if (url === "/about" && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end("About us — kami belajar Node!")
  } else if (url === "/api/time" && method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify({ time: new Date().toISOString() }))
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" })
    res.end("404 — tak jumpa!")
  }
})

router.listen(3001, () => {
  console.log("Router server at http://localhost:3001")
})

// Test:
//   curl http://localhost:3001/            → Home page
//   curl http://localhost:3001/about       → About us...
//   curl http://localhost:3001/api/time    → {"time":"..."}
//   curl http://localhost:3001/nope       → 404 — tak jumpa!

// ============================================================
// 4. JSON APIs — the bread and butter of backend dev
// ============================================================

const apiServer = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" })

  if (req.url === "/api/foods") {
    const foods = [
      { name: "Nasi Lemak", price: 3.50 },
      { name: "Roti Canai", price: 1.50 },
      { name: "Teh Tarik", price: 2.00 }
    ]
    res.end(JSON.stringify(foods))
  } else {
    res.end(JSON.stringify({ error: "Not found" }))
  }
})

apiServer.listen(3002, () => {
  console.log("API server at http://localhost:3002/api/foods")
})

// ============================================================
// 5. Reading POST data
// ============================================================
// POST requests carry a body. Read it from the request stream:

const postServer = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/api/orders") {
    let body = ""

    req.on("data", chunk => {
      body += chunk          // collect chunks as they arrive
    })

    req.on("end", () => {
      const order = JSON.parse(body)   // body is a JSON string
      console.log("Order received:", order)

      res.writeHead(201, { "Content-Type": "application/json" })
      res.end(JSON.stringify({ status: "ok", order }))
    })
  } else {
    res.writeHead(404, { "Content-Type": "application/json" })
    res.end(JSON.stringify({ error: "Not found" }))
  }
})

postServer.listen(3003, () => {
  console.log("POST server at http://localhost:3003")
})

// Test with curl:
//   curl -X POST http://localhost:3003/api/orders \
//     -H "Content-Type: application/json" \
//     -d '{"item": "nasi lemak", "qty": 2}'

// ============================================================
// 6. Status codes — the language of HTTP
// ============================================================
//   200 OK            — success
//   201 Created       — resource created (POST)
//   301/302 Redirect  — moved
//   400 Bad Request   — client sent something wrong
//   401 Unauthorized  — not logged in
//   403 Forbidden     — logged in but not allowed
//   404 Not Found     — doesn't exist
//   500 Server Error  — server crashed (your bug!)

// ============================================================
// 7. Content-Type — telling the client what you're sending
// ============================================================
//   text/plain          — plain text
//   text/html           — HTML page
//   application/json    — JSON data
//   image/png           — image
//   text/css            — stylesheet
//
// Get it wrong and the client won't know how to read your
// response. Always set it!

// ============================================================
// 8. Why Express exists
// ============================================================
// You've just seen the raw http module. It works, but:
//   - Routing is manual if/else chains
//   - Reading POST bodies is manual
//   - No middleware system
//
// Express (Phase 2 of your journey!) wraps all this into
// clean APIs. But now you KNOW what it does under the hood.
// That's the difference between a user and a developer.

// ============================================================
// EXERCISE TIME!
// ============================================================
// Open exercises/17_http_exercises.js and fill in the TODOs.
// ============================================================
