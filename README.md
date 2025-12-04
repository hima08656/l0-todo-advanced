# Enhanced Todo List

A simple Todo application with add, complete, delete, and real-time search. Tasks persist in localStorage as a JSON array with `{ id, text, completed }`.

## Features
- Add tasks
- Mark tasks complete (checkbox)
- Delete tasks
- Real-time search by text
- Persistence via localStorage

## How to run
1. Clone or download the repository.
2. Open `index.html` in your browser.

## Data format in localStorage
```json
[
  { "id": "uuid-or-string", "text": "Buy milk", "completed": false }
]
