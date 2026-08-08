// ============================================================
// LESSON 04 — Arrays
// ============================================================
// Arrays are ordered lists. The workhorse of JavaScript!
// ============================================================

// ============================================================
// 1. Creating arrays
// ============================================================

const fruits = ["durian", "rambutan", "mangga"]
const numbers = [1, 2, 3, 4, 5]
const mixed = [1, "two", true, null]     // arrays can hold ANY types
const empty = []                          // empty array

console.log(fruits)       // [ 'durian', 'rambutan', 'mangga' ]
console.log(fruits.length) // 3

// ============================================================
// 2. Accessing and changing elements
// ============================================================

console.log(fruits[0])    // "durian" — first element (index 0!)
console.log(fruits[2])    // "mangga"
console.log(fruits[3])    // undefined — out of range!

fruits[1] = "ciku"        // change an element
console.log(fruits)       // [ 'durian', 'ciku', 'mangga' ]

// ⚠️ const arrays CAN be modified! const only prevents
// reassigning the variable itself, not changing the array inside.

// ============================================================
// 3. Adding and removing elements
// ============================================================

const queue = ["Aiman", "Bala"]
queue.push("Chong")       // add to the END
console.log(queue)        // [ 'Aiman', 'Bala', 'Chong' ]

queue.pop()               // remove from the END
console.log(queue)        // [ 'Aiman', 'Bala' ]

queue.unshift("Zero")     // add to the FRONT
console.log(queue)        // [ 'Zero', 'Aiman', 'Bala' ]

queue.shift()             // remove from the FRONT
console.log(queue)        // [ 'Aiman', 'Bala' ]

// ============================================================
// 4. Finding things
// ============================================================

const scores = [70, 85, 90, 55, 88]

console.log(scores.indexOf(90))       // 2 — position of 90
console.log(scores.indexOf(100))      // -1 — not found!
console.log(scores.includes(55))       // true
console.log(scores.includes(99))       // false

// ============================================================
// 5. Looping over arrays — the modern way
// ============================================================
// for...of is the cleanest way to visit every element:

for (const score of scores) {
  console.log(`Score: ${score}`)
}

// ============================================================
// 6. map() — transform every element
// ============================================================
// map creates a NEW array by applying a function to each element.

const doubled = scores.map(score => score * 2)
console.log(doubled)      // [ 140, 170, 180, 110, 176 ]

const names = ["aiman", "bala", "chong"]
const capitalized = names.map(n => n[0].toUpperCase() + n.slice(1))
console.log(capitalized)  // [ 'Aiman', 'Bala', 'Chong' ]

// ============================================================
// 7. filter() — keep only matching elements
// ============================================================

const passed = scores.filter(score => score >= 60)
console.log(passed)       // [ 70, 85, 90, 88 ] — 55 filtered out!

// ============================================================
// 8. reduce() — boil the array down to one value
// ============================================================

const total = scores.reduce((sum, score) => sum + score, 0)
console.log(total)        // 388

// reduce takes a function (accumulator, current) and a starting value.
// Walk through it:
//   start: sum = 0
//   +70 → 70, +85 → 155, +90 → 245, +55 → 300, +88 → 388

// ============================================================
// 9. Spread operator — copy and combine
// ============================================================

const original = [1, 2, 3]
const copy = [...original]        // copy! (not the same array)
console.log(copy)                 // [ 1, 2, 3 ]

const combined = [...original, 4, 5]
console.log(combined)             // [ 1, 2, 3, 4, 5 ]

// ⚠️ copy !== original — spread creates a NEW array:
console.log(copy === original)    // false

// ============================================================
// 10. Destructuring — pull values out
// ============================================================

const [first, second] = ["roti", "teh", "nasi"]
console.log(first)    // "roti"
console.log(second)   // "teh"

// ============================================================
// 11. Sorting
// ============================================================

const letters = ["c", "a", "b"]
console.log(letters.sort())       // [ 'a', 'b', 'c' ]

// ⚠️ NUMBER SORTING TRAP: sort() sorts as STRINGS by default!
const nums = [10, 2, 1, 22]
console.log(nums.sort())          // [ 1, 10, 2, 22 ] — "10" < "2" as strings!

// Fix: pass a compare function:
console.log(nums.sort((a, b) => a - b))   // [ 1, 2, 10, 22 ] ascending
console.log(nums.sort((a, b) => b - a))   // [ 22, 10, 2, 1 ] descending

// ============================================================
// 12. slice vs splice — copy vs cut
// ============================================================

const arr = [0, 1, 2, 3, 4, 5]

console.log(arr.slice(1, 3))      // [ 1, 2 ] — copy, original unchanged
console.log(arr)                  // [ 0, 1, 2, 3, 4, 5 ] — still intact!

// splice MUTATES (changes) the original:
const removed = arr.splice(1, 3)  // remove 3 elements starting at index 1
console.log(removed)              // [ 1, 2, 3 ]
console.log(arr)                  // [ 0, 4, 5 ] — original changed!

// ============================================================
// EXERCISE TIME!
// ============================================================
// Open exercises/04_arrays_exercises.js and fill in the TODOs.
// ============================================================
