Enhanced Todo List Application
An advanced Todo List web app built with HTML, CSS, and JavaScript. It allows users to add tasks, mark them as completed, delete tasks, and search tasks in real time. All tasks are stored in localStorage as a JSON array, ensuring persistence across sessions.

✨ Features
Add Tasks → Enter text and add to the list.

Mark as Completed → Checkbox toggles completion status, visually indicated with line-through.

Delete Tasks → Remove tasks individually.

Real-Time Search → Search bar filters tasks dynamically as you type.

Persistent Storage → Tasks saved in localStorage with unique IDs and completion status.

📁 Project Structure
Code
├── index.html       # Main HTML file
├── style.css        # Styling for layout and components
├── script.js        # JavaScript logic for task management
└── README.md        # Documentation and usage guide
🚀 Getting Started
1. Clone the repository
bash
git clone https://github.com/hima08656/l0-todo-advanced.git
cd l0-todo-advanced
2. Run the application
Open index.html in any modern browser.

No server setup required (pure client-side app).

🛠️ Implementation Process
Step 1: HTML Setup
Input field for adding tasks.

Button to add tasks.

Search input for filtering.

Unordered list (<ul>) to display tasks.

Step 2: CSS Styling
Responsive layout.

Visual cues for completed tasks (line-through).

Button hover effects.

Step 3: JavaScript Logic
Task Structure:

json
{
  "id": "unique-id",
  "text": "Task description",
  "completed": false
}
Functions:

loadTasks() → Load tasks from localStorage.

saveTasks() → Save tasks to localStorage.

makeId() → Generate unique IDs.

renderTasks(query) → Render tasks, optionally filtered.

addTask() → Add a new task.

toggleComplete(id) → Toggle completion status.

deleteTask(id) → Remove a task.

Event Listeners:

DOMContentLoaded → Initialize app.

click → Handle add/delete actions.

input → Filter tasks on search.

keydown → Add task on Enter key.

🧪 Testing Checklist
✅ Add tasks and verify they appear.

✅ Mark tasks complete and refresh to confirm persistence.

✅ Delete tasks and confirm removal.

✅ Search tasks and verify filtering.

✅ Refresh page and confirm tasks persist.

✅ Validate that empty tasks are not saved.

📦 Data Format in localStorage
json
[
  { "id": "id_123456", "text": "Buy groceries", "completed": false },
  { "id": "id_789012", "text": "Call mom", "completed": true }
]
📸 Screenshots (Add after testing)
Initial view with empty list

Adding tasks

Completed tasks

Search in action

📤 Submission Instructions
Ensure all files are committed:

bash
git add .
git commit -m "Enhanced Todo List with localStorage"
Push to your Masai Git repository:

bash
git push -u origin main
Submit the repository link as per the guidelines.

🧠 Notes
Uses localStorage.setItem() and getItem() for persistence.

Tasks filtered using Array.prototype.filter().

Completion status toggled with checkboxes.

Unique IDs generated using crypto.randomUUID() or fallback.
