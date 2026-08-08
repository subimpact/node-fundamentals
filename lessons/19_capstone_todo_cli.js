// ============================================================
// LESSON 19 — CAPSTONE: Todo CLI
// ============================================================
// Congratulations — you've reached the end of the course!
// This lesson ties EVERYTHING together:
//   - variables, functions, arrays, objects (Lessons 01-09)
//   - error handling (Lesson 10)
//   - async/await (Lesson 11)
//   - modules (Lesson 12)
//   - file system (Lesson 14)
//   - events (Lesson 15)
//   - CLI & process (Lesson 18)
//
// You're building a REAL, useful tool: a todo list manager
// that saves to a file. Run it, use it, be proud!
// ============================================================

const fs = require("node:fs/promises")
const path = require("node:path")

// ============================================================
// 1. Setup — where the todos live
// ============================================================

const DATA_FILE = path.join(__dirname, "todos.json")

// ============================================================
// 2. Reading todos (with error handling!)
// ============================================================

async function loadTodos() {
  try {
    const data = await fs.readFile(DATA_FILE, "utf8")
    return JSON.parse(data)
  } catch (err) {
    // File doesn't exist yet → start fresh
    if (err.code === "ENOENT") {
      return []
    }
    throw err   // real error — let it crash
  }
}

// ============================================================
// 3. Saving todos
// ============================================================

async function saveTodos(todos) {
  await fs.writeFile(DATA_FILE, JSON.stringify(todos, null, 2))
}

// ============================================================
// 4. The commands
// ============================================================

async function addTodo(text) {
  const todos = await loadTodos()
  todos.push({ id: Date.now(), text, done: false })
  await saveTodos(todos)
  console.log(`✅ Added: "${text}"`)
}

async function listTodos() {
  const todos = await loadTodos()

  if (todos.length === 0) {
    console.log("📭 No todos. Senang hati!")
    return
  }

  todos.forEach((todo, i) => {
    const status = todo.done ? "✅" : "⬜"
    console.log(`${i + 1}. ${status} ${todo.text}`)
  })
}

async function doneTodo(index) {
  const todos = await loadTodos()

  if (index < 1 || index > todos.length) {
    console.log(`❌ No todo #${index}. Sila check senarai!`)
    return
  }

  todos[index - 1].done = true
  await saveTodos(todos)
  console.log(`🎉 Done: "${todos[index - 1].text}"`)
}

async function removeTodo(index) {
  const todos = await loadTodos()

  if (index < 1 || index > todos.length) {
    console.log(`❌ No todo #${index}. Sila check senarai!`)
    return
  }

  const [removed] = todos.splice(index - 1, 1)
  await saveTodos(todos)
  console.log(`🗑️ Removed: "${removed.text}"`)
}

// ============================================================
// 5. The CLI dispatcher
// ============================================================

async function main() {
  const args = process.argv.slice(2)
  const command = args[0]

  switch (command) {
    case "add":
      if (!args[1]) {
        console.log("Usage: node lessons/19_capstone_todo_cli.js add <text>")
        process.exit(1)
      }
      await addTodo(args.slice(1).join(" "))
      break

    case "list":
      await listTodos()
      break

    case "done":
      await doneTodo(Number(args[1]))
      break

    case "remove":
      await removeTodo(Number(args[1]))
      break

    case "help":
    default:
      console.log(`
📋 TODO CLI — your first real Node app!

Usage:
  node lessons/19_capstone_todo_cli.js add "buy nasi lemak"   Add a todo
  node lessons/19_capstone_todo_cli.js list                   List todos
  node lessons/19_capstone_todo_cli.js done 2                 Mark #2 done
  node lessons/19_capstone_todo_cli.js remove 3                Remove #3
  node lessons/19_capstone_todo_cli.js help                   Show this help
`)
  }
}

// ============================================================
// 6. Run it!
// ============================================================
// Try these in your terminal:
//
//   node lessons/19_capstone_todo_cli.js add "belajar Node"
//   node lessons/19_capstone_todo_cli.js add "makan nasi lemak"
//   node lessons/19_capstone_todo_cli.js list
//   node lessons/19_capstone_todo_cli.js done 1
//   node lessons/19_capstone_todo_cli.js list
//   node lessons/19_capstone_todo_cli.js remove 2
//
// Your todos are saved in todos.json — restart and they're
// still there. That's persistence, and YOU built it!

main().catch(err => {
  console.error("Something went wrong:", err.message)
  process.exit(1)
})

// ============================================================
// 🎉 YOU DID IT! You've completed node-fundamentals!
//
// Next steps on your grand-master journey:
//   1. Build something small with what you learned
//   2. Move to Phase 2: node-backend (Express, databases...)
//   3. Keep coding every day — consistency beats intensity!
//
// Jom teruskan! 🇲🇾🚀
// ============================================================
