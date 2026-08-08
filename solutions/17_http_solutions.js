// ============================================================
// SOLUTION 17 — HTTP & Servers
// ============================================================
// Compare with your own answers, then run:
//
//   node solutions/17_http_solutions.js
// ============================================================

const http = require("node:http")

function createGreetingServer() {
  return http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "text/plain" })
      res.end("Hello, dunia!")
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" })
      res.end("Tak jumpa!")
    }
  })
}

function createJSONServer() {
  return http.createServer((req, res) => {
    if (req.url === "/api/foods" && req.method === "GET") {
      const foods = [
        { name: "Nasi Lemak", price: 3.5 },
        { name: "Roti Canai", price: 1.5 },
        { name: "Teh Tarik", price: 2.0 }
      ]
      res.writeHead(200, { "Content-Type": "application/json" })
      res.end(JSON.stringify(foods))
    } else {
      res.writeHead(404, { "Content-Type": "application/json" })
      res.end(JSON.stringify({ error: "Not found" }))
    }
  })
}

// ============================================================
// CHECKER — same as the exercise file
// ============================================================

let passed = 0
let failed = 0

function check(name, fn, expected) {
  try {
    const actual = fn()
    const ok = JSON.stringify(actual) === JSON.stringify(expected)
    if (ok) {
      passed++
      console.log(`✅ ${name} — betul!`)
    } else {
      failed++
      console.log(`❌ ${name}`)
      console.log(`   got:      ${JSON.stringify(actual)}`)
      console.log(`   expected: ${JSON.stringify(expected)}`)
    }
  } catch (err) {
    failed++
    console.log(`❌ ${name}`)
    console.log(`   Error: ${err.message}`)
  }
}

function request(server, path) {
  return new Promise((resolve, reject) => {
    const port = 4000 + Math.floor(Math.random() * 1000)
    server.listen(port, () => {
      http.get(`http://localhost:${port}${path}`, res => {
        let body = ""
        res.on("data", chunk => (body += chunk))
        res.on("end", () => {
          server.close()
          resolve({ status: res.statusCode, type: res.headers["content-type"], body })
        })
      }).on("error", reject)
    })
  })
}

async function runChecks() {
  const greetingServer = createGreetingServer()
  const home = await request(greetingServer, "/")
  check("GET / status", () => home.status, 200)
  check("GET / type", () => home.type, "text/plain")
  check("GET / body", () => home.body, "Hello, dunia!")

  const greetingServer2 = createGreetingServer()
  const missing = await request(greetingServer2, "/nope")
  check("GET /nope status", () => missing.status, 404)
  check("GET /nope body", () => missing.body, "Tak jumpa!")

  const jsonServer = createJSONServer()
  const foods = await request(jsonServer, "/api/foods")
  check("GET /api/foods status", () => foods.status, 200)
  check("GET /api/foods type", () => foods.type, "application/json")
  const foodsData = JSON.parse(foods.body)
  check("GET /api/foods is array", () => Array.isArray(foodsData), true)
  check("GET /api/foods has nasi lemak", () => foodsData.some(f => f.name === "Nasi Lemak"), true)

  const jsonServer2 = createJSONServer()
  const jsonMissing = await request(jsonServer2, "/api/other")
  check("GET /api/other status", () => jsonMissing.status, 404)
  check("GET /api/other body", () => JSON.parse(jsonMissing.body), { error: "Not found" })

  console.log(`\n${passed} passed, ${failed} failed`)
  if (failed > 0) {
    console.log("Sila check balik jawapan awak! 💪")
    process.exitCode = 1
  } else {
    console.log("Semua betul! Gempak! 🎉")
  }
}

runChecks()
