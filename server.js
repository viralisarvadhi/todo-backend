const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// In-memory storage
let todos = [];
let nextId = 1;

// GET /todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// POST /todos
app.post('/todos', (req, res) => {
    const { title, detail } = req.body;

    if (!title) {
        return res.status(400).json({ error: 'Title is required' });
    }

    const newTodo = {
        id: nextId++,
        title,
        detail: detail || '',
        status: 'pending',
        createdAt: new Date().toISOString()
    };

    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// PUT /todos/:id
app.put('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { status } = req.body;

    const todo = todos.find(t => t.id === id);

    if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
    }

    if (status && (status === 'pending' || status === 'done')) {
        todo.status = status;
    }

    res.json(todo);
});

// DELETE /todos/:id
app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = todos.findIndex(t => t.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'Todo not found' });
    }

    todos.splice(index, 1);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
});
