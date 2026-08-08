// ============================================================
// SOLUTION 03 — Strings & Template Literals
// ============================================================
// Compare with your own answers, then run:
//
//   node solutions/03_strings_solutions.js
// ============================================================

function shout(text) {
  return text.toUpperCase()
}

function contains(text, word) {
  return text.includes(word)
}

function firstThree(text) {
  return text.slice(0, 3)
}

function splitWords(sentence) {
  return sentence.split(" ")
}

function introduce(name, age) {
  return `Hi, I'm ${name} and I'm ${age} years old`
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
