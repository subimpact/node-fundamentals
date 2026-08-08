// ============================================================
// LESSON 07 — Loops
// ============================================================
// Loops repeat code. JavaScript has several kinds — each fits
// a different situation.
// ============================================================

// ============================================================
// 1. for loop — when you know how many times
// ============================================================

for (let i = 0; i < 5; i++) {
  console.log(`Iteration ${i}`)
}
// Prints: Iteration 0, 1, 2, 3, 4
// (i++ means "add 1 to i" — same as i += 1)

// Anatomy: for (start; condition; step) { body }
//   1. start:      let i = 0        — runs once
//   2. condition:  i < 5            — checked before each round
//   3. body:       console.log(...) — runs if condition is true
//   4. step:       i++              — runs after each round
//   5. back to step 2!

// ============================================================
// 2. while loop — when you don't know how many times
// ============================================================

let energy = 100
while (energy > 0) {
  console.log(`Energy: ${energy}% — still running!`)
  energy -= 30
}
// Prints: 100%, 70%, 40%, 10% — then stops (energy would be -20)

// ⚠️ DANGER: if the condition never becomes false, the loop
// runs forever! (Infinite loop = your terminal hangs.)
// Always make sure something changes inside the loop.

// ============================================================
// 3. do...while — runs at least once
// ============================================================

let attempts = 0
do {
  console.log(`Attempt ${attempts + 1}`)
  attempts++
} while (attempts < 3)
// Prints: Attempt 1, 2, 3

// Difference: while checks FIRST, do...while checks AFTER.
// do...while always runs the body at least once.

// ============================================================
// 4. for...of — loop over arrays (THE modern way)
// ============================================================

const foods = ["nasi lemak", "roti canai", "teh tarik"]

for (const food of foods) {
  console.log(`Makan: ${food}`)
}

// Clean! No index needed. Use this for arrays 90% of the time.

// ============================================================
// 5. for...in — loop over object keys
// ============================================================

const user = { name: "Aiman", age: 30, city: "KL" }

for (const key in user) {
  console.log(`${key}: ${user[key]}`)
}
// Prints: name: Aiman, age: 30, city: KL

// ⚠️ for...in is for OBJECTS. For arrays, use for...of.
// (for...in on arrays gives you indexes as strings — confusing!)

// ============================================================
// 6. break — stop the loop early
// ============================================================

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Found 5! Stop.")
    break
  }
  console.log(i)
}
// Prints: 1, 2, 3, 4, then "Found 5! Stop."

// ============================================================
// 7. continue — skip this round, keep going
// ============================================================

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue    // skip the rest of THIS round
  }
  console.log(i)
}
// Prints: 1, 2, 4, 5 — 3 was skipped!

// ============================================================
// 8. Looping with indexes — when you need the position
// ============================================================

const scores = [70, 85, 90]

for (let i = 0; i < scores.length; i++) {
  console.log(`Score ${i + 1}: ${scores[i]}`)
}

// ============================================================
// 9. Nested loops — loops inside loops
// ============================================================

for (let row = 1; row <= 3; row++) {
  let line = ""
  for (let col = 1; col <= 3; col++) {
    line += `${row}${col} `
  }
  console.log(line)
}
// Prints:
//   11 12 13
//   21 22 23
//   31 32 33

// ============================================================
// 10. Array methods that loop (recap from Lesson 04)
// ============================================================

const numbers = [1, 2, 3, 4, 5]

numbers.forEach(n => console.log(`forEach: ${n}`))   // visit each

const doubled = numbers.map(n => n * 2)               // transform
console.log(doubled)                                  // [ 2, 4, 6, 8, 10 ]

const evens = numbers.filter(n => n % 2 === 0)        // keep some
console.log(evens)                                    // [ 2, 4 ]

const sum = numbers.reduce((acc, n) => acc + n, 0)    // boil down
console.log(sum)                                      // 15

// ============================================================
// EXERCISE TIME!
// ============================================================
// Open exercises/07_loops_exercises.js and fill in the TODOs.
// ============================================================
