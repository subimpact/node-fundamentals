// ============================================================
// LESSON 11 — Async JavaScript
// ============================================================
// THE most important lesson in this whole course.
// JavaScript is single-threaded — it does ONE thing at a time.
// But it can DELEGATE slow work (network, files, timers) and
// come back when it's done. That's async.
//
// The evolution: callbacks → Promises → async/await
// You'll see all three in real code. Master all three.
// ============================================================

// ============================================================
// 1. The problem — slow operations block everything
// ============================================================

console.log("Start")

setTimeout(() => {
  console.log("2 seconds later...")
}, 2000)

console.log("End")

// Output order:
//   Start
//   End
//   2 seconds later...
//
// ⚠️ "End" prints BEFORE the timeout! setTimeout doesn't block.
// It says "call this function later" and moves on immediately.
// This is the heart of async: DON'T WAIT, schedule and continue.

// ============================================================
// 2. Callbacks — the original way
// ============================================================
// A callback is a function passed to another function,
// called when the work is done.

function fetchUser(id, callback) {
  setTimeout(() => {
    const user = { id, name: "Aiman" }
    callback(user)          // call the callback with the result
  }, 1000)
}

fetchUser(1, user => {
  console.log("Got user:", user.name)
})

// ============================================================
// 3. Callback hell — why callbacks got a bad name
// ============================================================
// Nested callbacks become unreadable fast:

// fetchUser(1, user => {
//   fetchPosts(user.id, posts => {
//     fetchComments(posts[0].id, comments => {
//       console.log(comments)   // 3 levels deep already!
//     })
//   })
// })

// This "pyramid of doom" is why Promises were invented.

// ============================================================
// 4. Promises — the modern fix
// ============================================================
// A Promise is an object representing a future value.
// It's in one of three states:
//   pending   — work in progress
//   fulfilled — succeeded, has a value
//   rejected  — failed, has a reason

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true
    if (success) {
      resolve("Berjaya!")      // → fulfilled
    } else {
      reject(new Error("Gagal!"))  // → rejected
    }
  }, 1000)
})

// .then() runs on success, .catch() runs on failure:
promise
  .then(result => console.log("Resolved:", result))
  .catch(error => console.log("Rejected:", error.message))

// ============================================================
// 5. Promise chaining — no more pyramid!
// ============================================================

function fetchUserP(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: "Aiman" }), 500)
  })
}

function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve([{ id: 1, title: "Post 1" }, { id: 2, title: "Post 2" }]), 500)
  })
}

fetchUserP(1)
  .then(user => {
    console.log("User:", user.name)
    return fetchPosts(user.id)      // return the next promise!
  })
  .then(posts => {
    console.log("Posts:", posts.length)
  })
  .catch(error => console.log("Anywhere in the chain:", error.message))

// Each .then receives the previous .then's return value.
// One .catch at the end handles errors from ANY step.

// ============================================================
// 6. async/await — promises made beautiful (2026: use this!)
// ============================================================
// async/await is syntactic sugar over promises.
// It reads like normal synchronous code.

async function showUserAndPosts() {
  const user = await fetchUserP(1)      // wait for this promise
  console.log("User:", user.name)

  const posts = await fetchPosts(user.id)  // wait again
  console.log("Posts:", posts.length)
}

showUserAndPosts()

// await pauses the function until the promise settles.
// The function must be declared `async` to use await.

// ============================================================
// 7. Error handling with async/await — try/catch works!
// ============================================================

async function safeFetch() {
  try {
    const user = await fetchUserP(1)
    console.log("Got:", user.name)
  } catch (error) {
    console.log("Failed:", error.message)
  }
}

safeFetch()

// Remember Lesson 10's warning? With async/await,
// try/catch finally works for async code. This is the way.

// ============================================================
// 8. Promise.all — run things in parallel
// ============================================================

async function fetchAll() {
  const [user, posts] = await Promise.all([
    fetchUserP(1),        // these run AT THE SAME TIME
    fetchPosts(1)
  ])
  console.log("User:", user.name, "| Posts:", posts.length)
}

fetchAll()

// Without Promise.all, the two awaits would run one after
// another (2 seconds total). With it: 1 second. Parallel!

// ============================================================
// 9. fetch — real network calls (built into Node 18+)
// ============================================================

async function getGitHubUser(username) {
  const response = await fetch(`https://api.github.com/users/${username}`)
  if (!response.ok) {
    throw new Error(`GitHub says: ${response.status}`)
  }
  const data = await response.json()
  return data
}

// Uncomment to try (needs internet):
// getGitHubUser("subimpact")
//   .then(user => console.log("GitHub user:", user.name, "-", user.public_repos, "repos"))
//   .catch(error => console.log("Error:", error.message))

// ============================================================
// 10. The event loop — what's actually happening
// ============================================================

console.log("1. Sync code")

setTimeout(() => console.log("2. Timer callback"), 0)

Promise.resolve().then(() => console.log("3. Promise microtask"))

console.log("4. More sync code")

// Output:
//   1. Sync code
//   4. More sync code
//   3. Promise microtask
//   2. Timer callback
//
// Order: sync code first, THEN microtasks (promises),
// THEN macrotasks (timers). This is the event loop.
// You don't need to master it today — just know it exists.

// ============================================================
// EXERCISE TIME!
// ============================================================
// Open exercises/11_async_exercises.js and fill in the TODOs.
// ============================================================
