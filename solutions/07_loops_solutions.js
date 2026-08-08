// ============================================================
// SOLUTION 07 — Loops
// ============================================================
// Compare with your own answers, then run:
//
//   node solutions/07_loops_solutions.js
// ============================================================

function countdown(n) {
  const result = []
  for (let i = n; i >= 1; i--) {
    result.push(i)
  }
  return result
}

function sumTo(n) {
  let sum = 0
  let i = 1
  while (i <= n) {
    sum += i
    i++
  }
  return sum
}

function collectKeys(obj) {
  const keys = []
  for (const key in obj) {
    keys.push(key)
  }
  return keys
}

function findFirst(numbers, target) {
  for (const n of numbers) {
    if (n > target) {
      return n
    }
  }
  return null
}

function oddNumbers(n) {
  const result = []
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      continue
    }
    result.push(i)
  }
  return result
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

check("countdown(3)", () => countdown(3), [3, 2, 1])
check("countdown(1)", () => countdown(1), [1])
check("sumTo(5)", () => sumTo(5), 15)
check("sumTo(10)", () => sumTo(10), 55)
check("collectKeys({ a: 1, b: 2 })", () => collectKeys({ a: 1, b: 2 }), ["a", "b"])
check("collectKeys({ x: 1 })", () => collectKeys({ x: 1 }), ["x"])
check("findFirst([1, 5, 3, 9], 4)", () => findFirst([1, 5, 3, 9], 4), 5)
check("findFirst([1, 2, 3], 10)", () => findFirst([1, 2, 3], 10), null)
check("oddNumbers(7)", () => oddNumbers(7), [1, 3, 5, 7])
check("oddNumbers(2)", () => oddNumbers(2), [1])

console.log(`\n${passed} passed, ${failed} failed`)
if (failed > 0) {
  console.log("Sila check balik jawapan awak! 💪")
  process.exitCode = 1
} else {
  console.log("Semua betul! Gempak! 🎉")
}
