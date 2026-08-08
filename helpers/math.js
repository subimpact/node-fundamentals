// helpers/math.js — used by Lesson 12 (Modules)
// This file demonstrates module.exports.

function add(a, b) {
  return a + b
}

function multiply(a, b) {
  return a * b
}

function subtract(a, b) {
  return a - b
}

module.exports = { add, multiply, subtract }
