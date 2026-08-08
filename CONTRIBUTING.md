# 🤝 Contributing to Node Fundamentals

First of all — terima kasih (thank you) for wanting to help! This repo is built for absolute beginners, so every contribution should make learning *easier*, not more impressive.

## What we're looking for

- **Typo fixes** — in code comments, README, or lesson docs
- **Better examples** — a clearer analogy, a funnier Malaysian reference
- **New exercises** — especially ones that test a common beginner trap
- **Checker improvements** — catch more mistakes with friendlier messages
- **Bug reports** — if a lesson crashes on your machine, that's a bug

## Guidelines (keep it beginner-friendly!)

- **No clever one-liners.** If a simple `for` loop is clearer, use the loop.
- **Explain the *why*** in comments, not just the *what*.
- **Don't introduce concepts before their lesson.** Lesson 03 shouldn't use arrow functions — those come in Lesson 08.
- **Malaysian English is welcome** in comments and messages (it's the repo's soul!), but keep code identifiers in plain English.
- **Solutions must pass the exercise checker.** Run the exercise file after editing its solution to confirm zero ❌.
- **Update EXPECTED_OUTPUTS.md** if you change what a lesson prints.

## How to contribute

1. **Fork** this repo
2. **Create a branch:** `git checkout -b my-improvement`
3. **Make your changes**
4. **Test your changes:**
   ```bash
   npm test
   ```
   (This runs every lesson and every solution — all must pass.)
5. **Commit** with a clear message: `fix: clarify slice explanation in lesson 03`
6. **Push and open a pull request**

## Code style

- Use `const` by default, `let` only when needed (never `var`!)
- Use 2-space indentation
- Use single quotes for strings, template literals for interpolation
- Always use `===` and `!==` (never `==` / `!=`)
- Match the existing comment style (`// ===== SECTION =====` headers)

## Questions?

Open an [issue](https://github.com/subimpact/node-fundamentals/issues) — we're friendly, we promise. No question is too basic!

**Jom contribute! 🇲🇾🟢**
