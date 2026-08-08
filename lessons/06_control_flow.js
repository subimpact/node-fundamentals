// ============================================================
// LESSON 06 — Control Flow
// ============================================================
// Control flow = making decisions. Your code chooses which
// path to take based on conditions.
// ============================================================

// ============================================================
// 1. if / else if / else
// ============================================================

const score = 75

if (score >= 90) {
  console.log("A — gempak!")
} else if (score >= 80) {
  console.log("B — bagus!")
} else if (score >= 70) {
  console.log("C — ok lah")
} else {
  console.log("D — kena study lagi!")
}

// Only ONE branch runs — the first condition that's true.
// Order matters! Check the most specific conditions first.

// ============================================================
// 2. Conditions are just booleans
// ============================================================

const isRaining = true

if (isRaining) {
  console.log("Bawa payung!")
}

// if (isRaining === true) is redundant — isRaining IS already
// a boolean. Just write if (isRaining).

// ============================================================
// 3. Truthiness in conditions
// ============================================================
// Remember Lesson 02? Falsy values: false, 0, "", null, undefined, NaN

const username = ""

if (username) {
  console.log(`Hello, ${username}`)
} else {
  console.log("Hello, Guest")   // runs — empty string is falsy!
}

// This pattern (checking if a value "exists") is everywhere in JS.

// ============================================================
// 4. Combining conditions — && and ||
// ============================================================

const age = 25
const hasLicense = true

if (age >= 18 && hasLicense) {
  console.log("Boleh drive!")        // both must be true
}

const isWeekend = true
const isHoliday = false

if (isWeekend || isHoliday) {
  console.log("Tak payah kerja!")     // either one being true is enough
}

// ============================================================
// 5. The ternary operator — if/else in one line
// ============================================================
// condition ? valueIfTrue : valueIfFalse

const price = 50
const label = price > 100 ? "mahal" : "murah"
console.log(label)    // "murah"

// Same as:
// let label
// if (price > 100) { label = "mahal" } else { label = "murah" }

// Use ternaries for SIMPLE choices. If it gets complex, use if/else.

// ============================================================
// 6. switch — many fixed options
// ============================================================

const day = "Saturday"
let activity

switch (day) {
  case "Monday":
    activity = "Meeting"
    break
  case "Tuesday":
  case "Wednesday":
    activity = "Coding"
    break
  case "Saturday":
  case "Sunday":
    activity = "Makan-makan!"
    break
  default:
    activity = "Kerja biasa"
}

console.log(activity)   // "Makan-makan!"

// ⚠️ Don't forget `break`! Without it, execution "falls through"
// to the next case. (Sometimes that's intentional — see how
// Tuesday/Wednesday share a case above.)

// ============================================================
// 7. Guard clauses — return early
// ============================================================
// A common style: check for bad cases FIRST and return/exit.

function withdraw(balance, amount) {
  if (amount <= 0) {
    return "Jumlah tak valid"
  }
  if (amount > balance) {
    return "Duit tak cukup!"
  }
  return `Berjaya! Baki: RM${balance - amount}`
}

console.log(withdraw(100, 50))    // "Berjaya! Baki: RM50"
console.log(withdraw(100, 0))     // "Jumlah tak valid"
console.log(withdraw(100, 200))   // "Duit tak cukup!"

// Guard clauses keep the "happy path" un-nested and readable.

// ============================================================
// 8. Nested ifs — be careful!
// ============================================================

const isLoggedIn = true
const isAdmin = false

if (isLoggedIn) {
  if (isAdmin) {
    console.log("Welcome, admin!")
  } else {
    console.log("Welcome, user!")
  }
} else {
  console.log("Please log in")
}

// Nested ifs work, but deep nesting gets hard to read.
// Prefer guard clauses (section 7) or combining conditions.

// ============================================================
// EXERCISE TIME!
// ============================================================
// Open exercises/06_control_flow_exercises.js and fill in the TODOs.
// ============================================================
