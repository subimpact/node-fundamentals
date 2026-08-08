// ============================================================
// LESSON 15 — Events
// ============================================================
// Node is event-driven. Things happen (events), and your code
// reacts (listeners). The EventEmitter class is the engine
// behind this — and behind most of Node's built-in modules.
// ============================================================

const { EventEmitter } = require("node:events")

// ============================================================
// 1. Creating an emitter
// ============================================================

const emitter = new EventEmitter()

// ============================================================
// 2. Listening — .on()
// ============================================================

emitter.on("order", (item, qty) => {
  console.log(`Order received: ${qty}x ${item}`)
})

// .on(eventName, callback) registers a listener.
// The callback runs every time the event fires.

// ============================================================
// 3. Emitting — .emit()
// ============================================================

emitter.emit("order", "nasi lemak", 2)
emitter.emit("order", "teh tarik", 3)

// Output:
//   Order received: 2x nasi lemak
//   Order received: 3x teh tarik

// emit(eventName, ...args) fires the event.
// All arguments after the name are passed to listeners.

// ============================================================
// 4. Multiple listeners — all of them run
// ============================================================

emitter.on("order", (item, qty) => {
  console.log(`[kitchen] Start cooking ${item}!`)
})

emitter.emit("order", "roti canai", 1)

// Both listeners run, in registration order:
//   Order received: 1x roti canai
//   [kitchen] Start cooking roti canai!

// ============================================================
// 5. once — listen exactly one time
// ============================================================

emitter.once("welcome", name => {
  console.log(`Welcome, ${name}! (only once)`)
})

emitter.emit("welcome", "Aiman")   // runs
emitter.emit("welcome", "Bala")    // does NOT run — listener already used

// ============================================================
// 6. Removing listeners
// ============================================================

function tempListener() {
  console.log("Temporary listener")
}

emitter.on("temp", tempListener)
emitter.emit("temp")              // runs

emitter.off("temp", tempListener) // remove it
emitter.emit("temp")              // nothing — listener gone

// ============================================================
// 7. Real-world example — a coffee shop
// ============================================================
// This is how you'd model a real system with events:

class CoffeeShop extends EventEmitter {
  takeOrder(drink) {
    console.log(`☕ Order taken: ${drink}`)
    this.emit("order-taken", drink)

    setTimeout(() => {
      this.emit("drink-ready", drink)   // fire later, when "done"
    }, 1000)
  }
}

const shop = new CoffeeShop()

shop.on("order-taken", drink => {
  console.log(`📝 Logging order: ${drink}`)
})

shop.on("drink-ready", drink => {
  console.log(`🔔 ${drink} is ready! Sila ambil!`)
})

shop.takeOrder("kopi o")

// Output:
//   ☕ Order taken: kopi o
//   📝 Logging order: kopi o
//   (1 second later)
//   🔔 kopi o is ready! Sila ambil!

// ============================================================
// 8. The "error" event — special rules
// ============================================================
// If you emit "error" and NO ONE is listening, Node throws!

const risky = new EventEmitter()

risky.on("error", err => {
  console.log("Handled error:", err.message)
})

risky.emit("error", new Error("Something broke"))

// ⚠️ Always attach an "error" listener to emitters you create.
// An unhandled "error" event CRASHES the process.

// ============================================================
// 9. Where events appear in real Node
// ============================================================
// Tons of built-ins extend EventEmitter:
//   - HTTP servers: request, connection
//   - Streams: data, end, error (Lesson 16!)
//   - Child processes: exit, stdout
//   - process itself: process.on("exit", ...)

process.on("exit", code => {
  console.log(`Process exiting with code ${code}`)
})

// ============================================================
// 10. Events vs callbacks — when to use what
// ============================================================
//   CALLBACK: one thing happens once → use a callback
//     fs.readFile(path, cb)  — one result, one callback
//
//   EVENTS: many things happen over time → use events
//     server.on("request", ...)  — fires for EVERY request
//
// Rule of thumb: one-shot → callback/promise. Repeated → events.

// ============================================================
// EXERCISE TIME!
// ============================================================
// Open exercises/15_events_exercises.js and fill in the TODOs.
// ============================================================
