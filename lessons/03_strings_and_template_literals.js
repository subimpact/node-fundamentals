// ============================================================
// LESSON 03 — Strings & Template Literals
// ============================================================
// Strings are text. JavaScript strings have LOTS of built-in
// methods. This lesson covers the ones you'll use every day.
// ============================================================

// ============================================================
// 1. Creating strings — three ways
// ============================================================

const single = 'Single quotes'
const double = "Double quotes"
const backtick = `Backticks`

// Single vs double: no difference. Pick one and be consistent.
// Backticks: special powers (template literals — section 5!)

// ============================================================
// 2. Common string methods
// ============================================================

const msg = "  Hello, Kuala Lumpur!  "

console.log(msg.length)            // 24 — includes the spaces!
console.log(msg.trim())            // "Hello, Kuala Lumpur!" — removes outer spaces
console.log(msg.toUpperCase())     // "  HELLO, KUALA LUMPUR!  "
console.log(msg.toLowerCase())     // "  hello, kuala lumpur!  "

const food = "nasi lemak"
console.log(food.includes("lemak"))    // true — does it contain this?
console.log(food.includes("roti"))     // false
console.log(food.startsWith("nasi"))   // true
console.log(food.endsWith("mak"))      // true

// ============================================================
// 3. Slicing — cutting strings apart
// ============================================================

const word = "javascript"
console.log(word.slice(0, 4))     // "java"  — indexes 0 to 3 (end is exclusive!)
console.log(word.slice(4))        // "script" — from index 4 to the end
console.log(word.slice(-3))       // "ipt"   — negative counts from the end!
console.log(word[0])              // "j"     — bracket access (Lesson 01)
console.log(word[word.length - 1]) // "t"   — last character

// ⚠️ REMEMBER: indexes start at 0, and slice's end is EXCLUSIVE.
// slice(0, 4) gives characters 0, 1, 2, 3 — NOT 4!

// ============================================================
// 4. Splitting and joining
// ============================================================

const sentence = "roti canai, teh tarik, nasi lemak"
const items = sentence.split(", ")
console.log(items)                // [ 'roti canai', 'teh tarik', 'nasi lemak' ]

console.log(items.join(" | "))    // "roti canai | teh tarik | nasi lemak"

// split() turns a string into an array (Lesson 04!)
// join() turns an array back into a string

// ============================================================
// 5. Template literals — the modern way
// ============================================================
// Backticks + ${} = embed any expression directly in a string.

const name = "Aina"
const age = 25
const city = "Penang"

// Old way (concatenation):
console.log("Hi, I'm " + name + ", " + age + " years old, from " + city + ".")

// New way (template literal):
console.log(`Hi, I'm ${name}, ${age} years old, from ${city}.`)

// ${} can contain ANY expression, not just variables:
console.log(`2 + 2 = ${2 + 2}`)              // 2 + 2 = 4
console.log(`Uppercase: ${"hello".toUpperCase()}`)  // Uppercase: HELLO

// ============================================================
// 6. Multi-line strings — template literals win again
// ============================================================

// Old way — \n escape character:
console.log("Line 1\nLine 2")

// New way — just press Enter inside backticks:
console.log(`Line 1
Line 2`)

// Same output, but the backtick version is readable.

// ============================================================
// 7. Escape characters
// ============================================================
// What if you need a quote INSIDE a string?

console.log("She said \"hello\"")     // backslash escapes the quote
console.log('She said "hello"')       // OR use the other quote type!
console.log(`She said "hello"`)       // OR backticks

// Other useful escapes:
console.log("Tab\there")              // \t = tab
console.log("New\nline")              // \n = new line
console.log("Backslash: \\")          // \\ = literal backslash

// ============================================================
// 8. Numbers → strings, strings → numbers
// ============================================================

// String to number:
console.log(Number("42"))             // 42
console.log(Number("3.14"))           // 3.14
console.log(Number("abc"))            // NaN — can't convert!
console.log(parseInt("42px"))         // 42 — parses until it hits non-number
console.log(parseFloat("3.14cm"))     // 3.14

// Number to string:
console.log(String(42))               // "42"
console.log((42).toString())          // "42"
console.log(`${42}`)                  // "42" — template literal trick!

// ============================================================
// 9. String comparison
// ============================================================

console.log("apple" === "apple")      // true — same content
console.log("apple" === "Apple")      // false — case matters!
console.log("apple" < "banana")       // true — alphabetical order

// ============================================================
// EXERCISE TIME!
// ============================================================
// Open exercises/03_strings_exercises.js and fill in the TODOs.
// ============================================================
