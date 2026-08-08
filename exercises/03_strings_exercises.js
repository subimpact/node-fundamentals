// ============================================================
// EXERCISE 03 — Strings & Template Literals
// ============================================================
// Fill in the TODOs below. Then run:
//
//   node exercises/03_strings_exercises.js
// ============================================================

// TODO 1: Write a function shout(text) that returns text.toUpperCase()
// Example: shout("hello") → "HELLO"
function shout(text) {
  // your code here
}

// TODO 2: Write a function contains(text, word) that returns
// text.includes(word)
// Example: contains("nasi lemak", "lemak") → true
function contains(text, word) {
  // your code here
}

// TODO 3: Write a function firstThree(text) that returns the first
// 3 characters using slice
// Example: firstThree("javascript") → "jav"
function firstThree(text) {
  // your code here
}

// TODO 4: Write a function splitWords(sentence) that returns
// sentence.split(" ")
// Example: splitWords("roti canai sedap") → ["roti", "canai", "sedap"]
function splitWords(sentence) {
  // your code here
}

// TODO 5: Write a function introduce(name, age) that returns
// `Hi, I'm ${name} and I'm ${age} years old`
// Example: introduce("Aina", 25) → "Hi, I'm Aina and I'm 25 years old"
function introduce(name, age) {
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

check("shout('hello')", () => shout("hello"), "HELLO")
check("shout('nasi lemak')", () => shout("nasi lemak"), "NASI LEMAK")
check("contains('nasi lemak', 'lemak')", () => contains("nasi lemak", "lemak"), true)
check("contains('nasi lemak', 'roti')", () => contains("nasi lemak", "roti"), false)
check("firstThree('javascript')", () => firstThree("javascript"), "jav")
check("firstThree('node')", () => firstThree("node"), "nod")
check("splitWords('roti canai sedap')", () => splitWords("roti canai sedap"), ["roti", "canai", "sedap"])
check("splitWords('teh tarik')", () => splitWords("teh tarik"), ["teh", "tarik"])
check("introduce('Aina', 25)", () => introduce("Aina", 25), "Hi, I'm Aina and I'm 25 years old")
check("introduce('Bala', 30)", () => introduce("Bala", 30), "Hi, I'm Bala and I'm 30 years old")

console.log(`\n${passed} passed, ${failed} failed`)
if (failed > 0) {
  console.log("Sila check balik jawapan awak! 💪")
  process.exitCode = 1
} else {
  console.log("Semua betul! Gempak! 🎉")
}
