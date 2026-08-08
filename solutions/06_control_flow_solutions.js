// ============================================================
// SOLUTION 06 — Control Flow
// ============================================================
// Compare with your own answers, then run:
//
//   node solutions/06_control_flow_solutions.js
// ============================================================

function grade(score) {
  if (score >= 90) return "A"
  if (score >= 80) return "B"
  if (score >= 70) return "C"
  return "D"
}

function canDrive(age, hasLicense) {
  return age >= 18 && hasLicense
}

function priceLabel(price) {
  return price > 100 ? "mahal" : "murah"
}

function dayActivity(day) {
  switch (day) {
    case "Monday":
      return "Meeting"
    case "Tuesday":
    case "Wednesday":
      return "Coding"
    case "Saturday":
    case "Sunday":
      return "Makan-makan!"
    default:
      return "Kerja biasa"
  }
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
