// ============================================================
// SOLUTION 04 — Arrays
// ============================================================
// Compare with your own answers, then run:
//
//   node solutions/04_arrays_solutions.js
// ============================================================

function doubleAll(numbers) {
  return numbers.map(n => n * 2)
}

function evens(numbers) {
  return numbers.filter(n => n % 2 === 0)
}

function total(numbers) {
  return numbers.reduce((sum, n) => sum + n, 0)
}

function firstTwo(items) {
  return items.slice(0, 2)
}

function addToEnd(items, item) {
  return [...items, item]
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
