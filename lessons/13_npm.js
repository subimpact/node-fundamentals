// ============================================================
// LESSON 13 — npm
// ============================================================
// npm = Node Package Manager. It's how JavaScript developers
// share and install code packages. The npm registry has
// over 2 MILLION packages — the largest code registry on Earth.
// ============================================================

// ============================================================
// 1. What npm does
// ============================================================
//   - Installs packages (libraries) from the registry
//   - Manages versions (package.json + package-lock.json)
//   - Runs scripts (test, start, build...)
//   - Publishes your own packages

// ============================================================
// 2. package.json — the heart of every Node project
// ============================================================
// Every Node project has a package.json. It's the project's
// ID card + instruction manual. Ours looks like:

//   {
//     "name": "node-fundamentals",
//     "version": "1.0.0",
//     "description": "Learn JavaScript + Node.js...",
//     "type": "commonjs",
//     "scripts": {
//       "test": "node scripts/verify.js"
//     },
//     "engines": { "node": ">=24.0.0" },
//     "license": "MIT"
//   }

// ============================================================
// 3. Creating a project — npm init
// ============================================================
// In a terminal, in an empty folder:
//
//   npm init -y
//
// This creates a package.json with sensible defaults.
// (The -y skips the questions. Try it without -y to see them!)

// ============================================================
// 4. Installing packages
// ============================================================
// In a terminal:
//
//   npm install express
//
// This:
//   1. Downloads express + its dependencies into node_modules/
//   2. Adds "express": "^5.x.x" to package.json dependencies
//   3. Creates/updates package-lock.json (exact versions)
//
// Then in your code:
//   const express = require("express")

// ============================================================
// 5. dependencies vs devDependencies
// ============================================================

//   npm install express          # production dependency
//   npm install --save-dev jest  # dev-only dependency
//
// dependencies: needed to RUN the app (express, lodash...)
// devDependencies: needed to DEVELOP it (test runners, linters...)

// ============================================================
// 6. Semver — version numbers explained
// ============================================================
// Versions look like:  MAJOR.MINOR.PATCH
//
//   5.4.2  →  major 5, minor 4, patch 2
//
//   MAJOR: breaking changes (5 → 6 might break your code)
//   MINOR: new features, backwards-compatible
//   PATCH: bug fixes, backwards-compatible
//
// The ^ in "^5.4.2" means: "allow minor and patch updates,
// but not major". So ^5.4.2 allows 5.5.0, 5.9.1 — but not 6.0.0.

// ============================================================
// 7. package-lock.json — the exact-version lock
// ============================================================
// package.json says "express ^5.4.2" (flexible).
// package-lock.json records the EXACT version installed.
// Commit it! It ensures everyone gets identical installs.

// ============================================================
// 8. node_modules — the big folder
// ============================================================
// node_modules/ is where installed packages live.
// It can be HUGE (hundreds of MB). That's why it's gitignored:
//
//   node_modules/     ← in .gitignore
//
// Anyone cloning your repo runs `npm install` to rebuild it.

// ============================================================
// 9. npm scripts — your project's commands
// ============================================================
// In package.json:
//
//   "scripts": {
//     "test": "node scripts/verify.js",
//     "start": "node server.js"
//   }
//
// Run them with:
//   npm test      # runs: node scripts/verify.js
//   npm start     # runs: node server.js
//
// npm scripts are just shortcuts for terminal commands.
// Common ones: start, test, build, lint, dev.

// ============================================================
// 10. Useful npm commands (terminal)
// ============================================================

//   npm install          # install everything in package.json
//   npm install <pkg>    # add a dependency
//   npm uninstall <pkg>  # remove a dependency
//   npm update           # update within semver rules
//   npm ls               # list installed packages
//   npm outdated         # show outdated packages
//   npm audit            # check for security vulnerabilities
//   npm run              # list available scripts

// ============================================================
// 11. npx — run packages without installing
// ============================================================

//   npx cowsay "Hello Malaysia!"
//
// npx downloads and runs a package temporarily.
// Great for one-off tools. (You'll use npx a LOT.)

// ============================================================
// EXERCISE TIME!
// ============================================================
// Open exercises/13_npm_exercises.js and fill in the TODOs.
// ============================================================
