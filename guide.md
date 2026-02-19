# 📝 Todo App — Full Stack Project

## 🗂️ Project Structure
This project is split into 3 repositories:

| Repo | Description | Link |
|------|-------------|------|
| todo-workspace | Kiro AI agent config (agents, skills, commands) | [todo-workspace](https://github.com/viralisarvadhi/todo-workspace) |
| todo-backend | Node.js Express REST API | [todo-backend](https://github.com/viralisarvadhi/todo-backend) |
| todo-frontend | React Vite UI | [todo-frontend](https://github.com/viralisarvadhi/todo-frontend) |

---

## 🤖 How This Project Was Built
This project was built using **Kiro IDE** with custom AI agents.
Instead of writing code manually, two AI agents worked concurrently:
- `backend-specialist` → built the entire backend API
- `frontend-specialist` → built the entire React frontend

The agents were guided by a shared contract so backend and frontend
stay in sync automatically.

---

## ⚙️ Tech Stack

### Backend
- Node.js + Express
- In-memory storage (no database)
- Port: 3000

### Frontend
- React + Vite
- Plain CSS
- Port: 5173

---

## 🚀 How to Run the Full Project

### Step 1: Clone all 3 repos
```bash
git clone git@github.com:viralisarvadhi/todo-workspace.git
git clone git@github.com:viralisarvadhi/todo-backend.git
git clone git@github.com:viralisarvadhi/todo-frontend.git
```

### Step 2: Run Backend
```bash
cd todo-backend
npm install
node server.js
# runs at http://localhost:3000
```

### Step 3: Run Frontend
```bash
cd todo-frontend
npm install
npm run dev
# runs at http://localhost:5173
```

### Step 4: Open Browser
```
http://localhost:5173
```

---

## 📡 API Endpoints

| Method | Endpoint | Body | Description |
|--------|----------|------|-------------|
| GET | /todos | - | Get all todos |
| POST | /todos | { title, detail } | Add new todo |
| PUT | /todos/:id | { status } | Toggle done/pending |
| DELETE | /todos/:id | - | Delete todo |

### Todo Object Shape
```json
{
  "id": 1,
  "title": "Buy milk",
  "detail": "From the store",
  "status": "pending",
  "createdAt": "2026-02-19T10:00:00.000Z"
}
```

---

## 🎯 Features
- Add todo with title and detail
- View all todos in a table
- Toggle status between pending and done
- Delete todo
- Loading and empty states

---

## 🛠️ Kiro Workspace Setup (for developers)
If you want to use the AI agents to modify this project:

1. Open `todo-workspace` folder in Kiro
2. File → Add Folder to Workspace
   - Add your local `todo-backend` folder
   - Add your local `todo-frontend` folder
3. Update paths in `.kiro/agents/backend.md` and `frontend.md`
   to match your local machine paths
4. Use agents in Kiro chat:
   - `backend-specialist` for backend changes
   - `frontend-specialist` for frontend changes
5. Type `/check` in Kiro chat to test all API endpoints

---

## 👤 Author
- GitHub: [@viralisarvadhi](https://github.com/viralisarvadhi)
