// ============================================================
// SOLUTION 05 — Objects & JSON
// ============================================================
// Compare with your own answers, then run:
//
//   node solutions/05_objects_solutions.js
// ============================================================

function getUserName(user) {
  return user.name
}

function addAge(user, years) {
  return { ...user, age: user.age + years }
}

function parseJSON(str) {
  return JSON.parse(str)
}

function toJSON(obj) {
  return JSON.stringify(obj)
}

function getOrderTotal(order) {
  return order.items.reduce((sum, item) => sum + item.price * item.qty, 0)
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

check("getUserName({ name: 'Aiman' })", () => getUserName({ name: "Aiman", age: 30 }), "Aiman")
check("getUserName({ name: 'Bala' })", () => getUserName({ name: "Bala" }), "Bala")
check("addAge({ name: 'Aiman', age: 30 }, 5)", () => addAge({ name: "Aiman", age: 30 }, 5), { name: "Aiman", age: 35 })
check("addAge({ name: 'Bala', age: 20 }, 10)", () => addAge({ name: "Bala", age: 20 }, 10), { name: "Bala", age: 30 })
check("parseJSON('{\"name\":\"Aiman\"}')", () => parseJSON('{"name":"Aiman"}'), { name: "Aiman" })
check("parseJSON('{\"age\":25}')", () => parseJSON('{"age":25}'), { age: 25 })
check("toJSON({ name: 'Aiman' })", () => toJSON({ name: "Aiman" }), '{"name":"Aiman"}')
check("toJSON({ a: 1, b: 2 })", () => toJSON({ a: 1, b: 2 }), '{"a":1,"b":2}')
check("getOrderTotal({ items: [{ price: 3.5, qty: 2 }, { price: 2, qty: 1 }] })",
  () => getOrderTotal({ items: [{ price: 3.5, qty: 2 }, { price: 2, qty: 1 }] }), 9)
check("getOrderTotal({ items: [{ price: 1, qty: 3 }] })",
  () => getOrderTotal({ items: [{ price: 1, qty: 3 }] }), 3)

console.log(`\n${passed} passed, ${failed} failed`)
if (failed > 0) {
  console.log("Sila check balik jawapan awak! 💪")
  process.exitCode = 1
} else {
  console.log("Semua betul! Gempak! 🎉")
}
