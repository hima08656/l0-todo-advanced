// Storage key for tasks
const STORAGE_KEY = "todo_tasks";

// DOM references
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const searchInput = document.getElementById("searchInput");
const taskList = document.getElementById("taskList");

// In-memory tasks array (synced with localStorage)
let tasks = [];

/**
 * Load tasks from localStorage
 * @returns {Array<{id:string,text:string,completed:boolean}>}
 */
function loadTasks() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch {
        // If parsing fails, reset storage
        localStorage.removeItem(STORAGE_KEY);
        return [];
    }
}

/**
 * Save tasks to localStorage
 * @param {Array} data
 */
function saveTasks(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

/**
 * Generate a unique ID for each task
 */
function makeId() {
    // Prefer crypto.randomUUID if available; fallback to timestamp+random
    return typeof crypto !== "undefined" && crypto.randomUUID ?
        crypto.randomUUID() :
        `id_${Date.now()}_${Math.floor(Math.random() * 1e6)}`;
}

/**
 * Render tasks to the DOM, optionally filtered by a search query
 * @param {string} query
 */
function renderTasks(query = "") {
    // Clear list
    taskList.innerHTML = "";

    // Normalize query
    const q = query.trim().toLowerCase();

    // Filter tasks by query
    const visible = q ?
        tasks.filter(t => t.text.toLowerCase().includes(q)) :
        tasks;

    // Render each task
    visible.forEach(task => {
        const li = document.createElement("li");
        li.className = `task-item${task.completed ? " completed" : ""}`;
        li.dataset.id = task.id;

        // Completion toggle (checkbox)
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.title = "Mark complete";
        checkbox.addEventListener("change", () => toggleComplete(task.id));

        // Task text
        const span = document.createElement("span");
        span.className = "task-text";
        span.textContent = task.text;

        // Delete button
        const delBtn = document.createElement("button");
        delBtn.className = "btn";
        delBtn.textContent = "Delete";
        delBtn.addEventListener("click", () => deleteTask(task.id));

        // Append to list item
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(delBtn);

        // Add to UL
        taskList.appendChild(li);
    });
}

/**
 * Add a new task (with validation: non-empty text)
 */
function addTask() {
    const text = taskInput.value.trim();
    if (text.length === 0) {
        // Do not add empty tasks
        taskInput.focus();
        return;
    }
    const newTask = {
        id: makeId(),
        text,
        completed: false,
    };
    tasks.push(newTask);
    saveTasks(tasks);
    taskInput.value = "";
    renderTasks(searchInput.value);
}

/**
 * Toggle completion status by ID
 * @param {string} id
 */
function toggleComplete(id) {
    const idx = tasks.findIndex(t => t.id === id);
    if (idx !== -1) {
        tasks[idx].completed = !tasks[idx].completed;
        saveTasks(tasks);
        renderTasks(searchInput.value);
    }
}

/**
 * Delete a task by ID
 * @param {string} id
 */
function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    saveTasks(tasks);
    renderTasks(searchInput.value);
}

// Wire up events
addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTask();
});
searchInput.addEventListener("input", () => {
    renderTasks(searchInput.value);
});

// Initialize app on page load
document.addEventListener("DOMContentLoaded", () => {
    tasks = loadTasks();
    renderTasks();
});