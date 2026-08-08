// ============================================================
// SOLUTION 15 — Events
// ============================================================
// Compare with your own answers, then run:
//
//   node solutions/15_events_solutions.js
// ============================================================

const { EventEmitter } = require("node:events")

const emitter = new EventEmitter()

function onOrder(item, qty) {
  return `${qty}x ${item} ordered!`
}

emitter.on("order", onOrder)

function emitOrder(item, qty) {
  const results = []
  emitter.emit("order", item, qty)
  // The listener's return value isn't accessible via emit,
  // so we call the listener directly for the checker:
  return onOrder(item, qty)
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
