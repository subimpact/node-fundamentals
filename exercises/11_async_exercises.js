// ============================================================
// EXERCISE 11 — Async JavaScript
// ============================================================
// Fill in the TODOs below. Then run:
//
//   node exercises/11_async_exercises.js
// ============================================================

// TODO 1: Write a function wait(ms) that returns a Promise which
// resolves after ms milliseconds.
// Example: await wait(100) — waits 100ms then continues
function wait(ms) {
  // your code here
}

// TODO 2: Write an async function fetchUser(id) that returns
// { id, name: "Aiman" } after a 50ms delay (use wait + await!)
// Example: await fetchUser(1) → { id: 1, name: "Aiman" }
async function fetchUser(id) {
  // your code here
}

// TODO 3: Write an async function fetchUserAndPosts(id) that:
//   1. awaits fetchUser(id)
//   2. returns { user, posts: ["post 1", "post 2"] }
// Example: await fetchUserAndPosts(1)
//   → { user: { id: 1, name: "Aiman" }, posts: ["post 1", "post 2"] }
async function fetchUserAndPosts(id) {
  // your code here
}

// ============================================================
// CHECKER — jangan ubah apa-apa di bawah garisan ini!
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

async function runChecks() {
  // wait() resolves
  const waitResult = await new Promise(resolve => {
    const start = Date.now()
    wait(50).then(() => resolve(Date.now() - start >= 40))
  })
  check("wait(50) resolves after delay", () => waitResult, true)

  // wait() is a Promise
  check("wait(1) is a Promise", () => wait(1) instanceof Promise, true)

  // fetchUser
  const user = await fetchUser(1)
  check("fetchUser(1)", () => user, { id: 1, name: "Aiman" })

  // fetchUserAndPosts
  const result = await fetchUserAndPosts(1)
  check("fetchUserAndPosts(1)", () => result, {
    user: { id: 1, name: "Aiman" },
    posts: ["post 1", "post 2"]
  })

  console.log(`\n${passed} passed, ${failed} failed`)
  if (failed > 0) {
    console.log("Sila check balik jawapan awak! 💪")
    process.exitCode = 1
  } else {
    console.log("Semua betul! Gempak! 🎉")
  }
}

runChecks()
