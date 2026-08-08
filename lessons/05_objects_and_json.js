// ============================================================
// LESSON 05 — Objects & JSON
// ============================================================
// Objects store data as key-value pairs. They're how JavaScript
// models real-world things: a user, a product, an order...
// ============================================================

// ============================================================
// 1. Creating objects
// ============================================================

const user = {
  name: "Aiman",
  age: 30,
  city: "Kuala Lumpur",
  isStudent: false
}

console.log(user)   // { name: 'Aiman', age: 30, city: 'Kuala Lumpur', isStudent: false }

// ============================================================
// 2. Accessing values — dot notation vs bracket notation
// ============================================================

console.log(user.name)        // "Aiman" — dot notation (preferred)
console.log(user["name"])     // "Aiman" — bracket notation

// Bracket notation is needed when the key is dynamic:
const key = "age"
console.log(user[key])        // 30 — key is a variable!

// Or when the key isn't a valid identifier:
const weird = { "first name": "Aiman" }
console.log(weird["first name"])  // "Aiman" — space in key needs brackets

// ============================================================
// 3. Adding and changing values
// ============================================================

user.age = 31                 // change existing
user.job = "Engineer"         // add new key
console.log(user.age)         // 31
console.log(user.job)         // "Engineer"

// ============================================================
// 4. Nested objects — objects inside objects
// ============================================================

const order = {
  id: 1001,
  customer: {
    name: "Bala",
    phone: "012-3456789"
  },
  items: [
    { name: "Nasi Lemak", price: 3.50, qty: 2 },
    { name: "Teh Tarik", price: 2.00, qty: 1 }
  ]
}

console.log(order.customer.name)          // "Bala"
console.log(order.items[0].name)          // "Nasi Lemak"
console.log(order.items[0].price * order.items[0].qty)  // 7

// ============================================================
// 5. Object methods — functions inside objects
// ============================================================

const calculator = {
  brand: "Casio",
  add(a, b) {
    return a + b
  },
  multiply(a, b) {
    return a * b
  }
}

console.log(calculator.add(2, 3))        // 5
console.log(calculator.multiply(2, 3))   // 6

// ============================================================
// 6. this — the object itself
// ============================================================

const person = {
  name: "Chong",
  greet() {
    return `Hello, I'm ${this.name}`   // this = the person object
  }
}

console.log(person.greet())   // "Hello, I'm Chong"

// ⚠️ this is a famous JavaScript gotcha. For now, just know:
// inside a method, this refers to the object the method is on.
// (Arrow functions handle this differently — Lesson 08!)

// ============================================================
// 7. Destructuring — pull values out of objects
// ============================================================

const { name, age } = user
console.log(name)     // "Aiman"
console.log(age)      // 31

// Rename while destructuring:
const { name: userName, city: userCity } = user
console.log(userName)   // "Aiman"
console.log(userCity)   // "Kuala Lumpur"

// ============================================================
// 8. Object.keys / values / entries
// ============================================================

console.log(Object.keys(user))      // [ 'name', 'age', 'city', 'isStudent', 'job' ]
console.log(Object.values(user))    // [ 'Aiman', 31, 'Kuala Lumpur', false, 'Engineer' ]
console.log(Object.entries(user))   // [ [ 'name', 'Aiman' ], [ 'age', 31 ], ... ]

// ============================================================
// 9. JSON — the language of APIs
// ============================================================
// JSON (JavaScript Object Notation) is how data travels
// between servers and apps. It looks like a JS object,
// but it's a STRING with strict rules.

const jsonString = '{"name": "Aiman", "age": 30}'

// JSON.parse — string → object
const parsed = JSON.parse(jsonString)
console.log(parsed.name)      // "Aiman"

// JSON.stringify — object → string
const obj = { name: "Aiman", age: 30 }
const str = JSON.stringify(obj)
console.log(str)              // '{"name":"Aiman","age":30}'

// ⚠️ JSON RULES (stricter than JS objects):
//   - Keys MUST be in double quotes
//   - No trailing commas
//   - No functions, no undefined, no comments

// ============================================================
// 10. Spread operator for objects
// ============================================================

const base = { name: "Aiman", age: 30 }
const withCity = { ...base, city: "KL" }
console.log(withCity)   // { name: 'Aiman', age: 30, city: 'KL' }

// Override values:
const updated = { ...base, age: 31 }
console.log(updated)    // { name: 'Aiman', age: 31 }

// ============================================================
// 11. Optional chaining — ?. (modern safety)
// ============================================================

const maybeUser = null
// console.log(maybeUser.name)   // ❌ TypeError! Cannot read properties of null
console.log(maybeUser?.name)     // undefined — safe! no crash

// ============================================================
// EXERCISE TIME!
// ============================================================
// Open exercises/05_objects_exercises.js and fill in the TODOs.
// ============================================================
