// ============================================================
// SOLUTION 02 — Operators & Coercion
// ============================================================
// Compare with your own answers, then run:
//
//   node solutions/02_operators_solutions.js
// ============================================================

function isEven(n) {
  return n % 2 === 0
}

function isStrictEqual(a, b) {
  return a === b
}

function isTruthy(value) {
  return Boolean(value)
}

function defaultName(name) {
  return name || "Guest"
}

function area(length, width) {
  return length * width
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

check("isEven(4)", () => isEven(4), true)
check("isEven(7)", () => isEven(7), false)
check("isEven(0)", () => isEven(0), true)
check("isStrictEqual(5, '5')", () => isStrictEqual(5, "5"), false)
check("isStrictEqual(5, 5)", () => isStrictEqual(5, 5), true)
check("isTruthy(0)", () => isTruthy(0), false)
check("isTruthy('hello')", () => isTruthy("hello"), true)
check("isTruthy([])", () => isTruthy([]), true)
check("defaultName('')", () => defaultName(""), "Guest")
check("defaultName('Aiman')", () => defaultName("Aiman"), "Aiman")
check("area(5, 4)", () => area(5, 4), 20)
check("area(3, 3)", () => area(3, 3), 9)

console.log(`\n${passed} passed, ${failed} failed`)
if (failed > 0) {
  console.log("Sila check balik jawapan awak! 💪")
  process.exitCode = 1
} else {
  console.log("Semua betul! Gempak! 🎉")
}
