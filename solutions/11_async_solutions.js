// ============================================================
// SOLUTION 11 — Async JavaScript
// ============================================================
// Compare with your own answers, then run:
//
//   node solutions/11_async_solutions.js
// ============================================================

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function fetchUser(id) {
  await wait(50)
  return { id, name: "Aiman" }
}

async function fetchUserAndPosts(id) {
  const user = await fetchUser(id)
  return { user, posts: ["post 1", "post 2"] }
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

async function runChecks() {
  const waitResult = await new Promise(resolve => {
    const start = Date.now()
    wait(50).then(() => resolve(Date.now() - start >= 40))
  })
  check("wait(50) resolves after delay", () => waitResult, true)

  check("wait(1) is a Promise", () => wait(1) instanceof Promise, true)

  const user = await fetchUser(1)
  check("fetchUser(1)", () => user, { id: 1, name: "Aiman" })

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
