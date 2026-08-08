// ============================================================
// EXERCISE 15 — Events
// ============================================================
// Fill in the TODOs below. Then run:
//
//   node exercises/15_events_exercises.js
// ============================================================

const { EventEmitter } = require("node:events")

// TODO 1: Create an EventEmitter called emitter
// const emitter = ...
const emitter = new EventEmitter()

// TODO 2: Register a listener for "order" that calls
// onOrder(item, qty) — a function that returns
// `${qty}x ${item} ordered!`
// Example: onOrder("nasi lemak", 2) → "2x nasi lemak ordered!"
function onOrder(item, qty) {
  return `${qty}x ${item} ordered!`
}

// TODO 3: Register the listener on the emitter:
// emitter.on("order", onOrder)
emitter.on("order", onOrder)

// TODO 4: Write a function emitOrder(item, qty) that emits
// the "order" event with (item, qty) and returns the result
// of the listener
// Example: emitOrder("teh tarik", 3) → "3x teh tarik ordered!"
function emitOrder(item, qty) {
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

check("onOrder('nasi lemak', 2)", () => onOrder("nasi lemak", 2), "2x nasi lemak ordered!")
check("onOrder('teh tarik', 1)", () => onOrder("teh tarik", 1), "1x teh tarik ordered!")
check("emitter is EventEmitter", () => emitter instanceof EventEmitter, true)
check("emitter has order listener", () => emitter.listenerCount("order") >= 1, true)
check("emitOrder('teh tarik', 3)", () => emitOrder("teh tarik", 3), "3x teh tarik ordered!")
check("emitOrder('roti canai', 1)", () => emitOrder("roti canai", 1), "1x roti canai ordered!")

console.log(`\n${passed} passed, ${failed} failed`)
if (failed > 0) {
  console.log("Sila check balik jawapan awak! 💪")
  process.exitCode = 1
} else {
  console.log("Semua betul! Gempak! 🎉")
}
