// ============================================================
// EXERCISE 06 — Control Flow
// ============================================================
// Fill in the TODOs below. Then run:
//
//   node exercises/06_control_flow_exercises.js
// ============================================================

// TODO 1: Write a function grade(score) that returns:
//   "A" if score >= 90
//   "B" if score >= 80
//   "C" if score >= 70
//   "D" otherwise
// Example: grade(85) → "B"
function grade(score) {
  // your code here
}

// TODO 2: Write a function canDrive(age, hasLicense) that returns
// true only if age >= 18 AND hasLicense is true
// Example: canDrive(20, true) → true, canDrive(20, false) → false
function canDrive(age, hasLicense) {
  // your code here
}

// TODO 3: Write a function priceLabel(price) that returns
// "mahal" if price > 100, otherwise "murah"
// (Use the ternary operator!)
// Example: priceLabel(150) → "mahal", priceLabel(50) → "murah"
function priceLabel(price) {
  // your code here
}

// TODO 4: Write a function dayActivity(day) that returns:
//   "Meeting" for "Monday"
//   "Coding" for "Tuesday" or "Wednesday"
//   "Makan-makan!" for "Saturday" or "Sunday"
//   "Kerja biasa" for anything else
// (Use a switch statement!)
// Example: dayActivity("Saturday") → "Makan-makan!"
function dayActivity(day) {
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

check("grade(95)", () => grade(95), "A")
check("grade(85)", () => grade(85), "B")
check("grade(75)", () => grade(75), "C")
check("grade(50)", () => grade(50), "D")
check("canDrive(20, true)", () => canDrive(20, true), true)
check("canDrive(20, false)", () => canDrive(20, false), false)
check("canDrive(16, true)", () => canDrive(16, true), false)
check("priceLabel(150)", () => priceLabel(150), "mahal")
check("priceLabel(50)", () => priceLabel(50), "murah")
check("priceLabel(100)", () => priceLabel(100), "murah")
check("dayActivity('Monday')", () => dayActivity("Monday"), "Meeting")
check("dayActivity('Tuesday')", () => dayActivity("Tuesday"), "Coding")
check("dayActivity('Saturday')", () => dayActivity("Saturday"), "Makan-makan!")
check("dayActivity('Friday')", () => dayActivity("Friday"), "Kerja biasa")

console.log(`\n${passed} passed, ${failed} failed`)
if (failed > 0) {
  console.log("Sila check balik jawapan awak! 💪")
  process.exitCode = 1
} else {
  console.log("Semua betul! Gempak! 🎉")
}
