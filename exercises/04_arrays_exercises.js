// ============================================================
// EXERCISE 04 — Arrays
// ============================================================
// Fill in the TODOs below. Then run:
//
//   node exercises/04_arrays_exercises.js
// ============================================================

// TODO 1: Write a function doubleAll(numbers) that returns
// numbers.map(n => n * 2)
// Example: doubleAll([1, 2, 3]) → [2, 4, 6]
function doubleAll(numbers) {
  // your code here
}

// TODO 2: Write a function evens(numbers) that returns
// numbers.filter(n => n % 2 === 0)
// Example: evens([1, 2, 3, 4, 5, 6]) → [2, 4, 6]
function evens(numbers) {
  // your code here
}

// TODO 3: Write a function total(numbers) that returns
// numbers.reduce((sum, n) => sum + n, 0)
// Example: total([1, 2, 3, 4]) → 10
function total(numbers) {
  // your code here
}

// TODO 4: Write a function firstTwo(items) that returns the first
// 2 items using slice
// Example: firstTwo(["roti", "teh", "nasi"]) → ["roti", "teh"]
function firstTwo(items) {
  // your code here
}

// TODO 5: Write a function addToEnd(items, item) that returns
// [...items, item]
// Example: addToEnd([1, 2], 3) → [1, 2, 3]
function addToEnd(items, item) {
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

check("doubleAll([1, 2, 3])", () => doubleAll([1, 2, 3]), [2, 4, 6])
check("doubleAll([5])", () => doubleAll([5]), [10])
check("evens([1, 2, 3, 4, 5, 6])", () => evens([1, 2, 3, 4, 5, 6]), [2, 4, 6])
check("evens([1, 3, 5])", () => evens([1, 3, 5]), [])
check("total([1, 2, 3, 4])", () => total([1, 2, 3, 4]), 10)
check("total([10, 20])", () => total([10, 20]), 30)
check("firstTwo(['roti', 'teh', 'nasi'])", () => firstTwo(["roti", "teh", "nasi"]), ["roti", "teh"])
check("firstTwo(['a', 'b'])", () => firstTwo(["a", "b"]), ["a", "b"])
check("addToEnd([1, 2], 3)", () => addToEnd([1, 2], 3), [1, 2, 3])
check("addToEnd([], 'first')", () => addToEnd([], "first"), ["first"])

console.log(`\n${passed} passed, ${failed} failed`)
if (failed > 0) {
  console.log("Sila check balik jawapan awak! 💪")
  process.exitCode = 1
} else {
  console.log("Semua betul! Gempak! 🎉")
}
