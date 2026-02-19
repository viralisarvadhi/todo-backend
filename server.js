const express = require('express');
const cors = require('cors');
const { writeLog } = require('./logger');

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
    writeLog('ADD', newTodo);
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
        const oldStatus = todo.status;
        todo.status = status;
        writeLog('UPDATE', { ...todo, oldStatus, newStatus: status });
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

    const deletedTodo = todos[index];
    todos.splice(index, 1);
    writeLog('DELETE', deletedTodo);
    res.status(204).send();
});

// GET /audit
app.get('/audit', (req, res) => {
    const fs = require('fs');
    const path = require('path');
    const logFile = path.join(__dirname, 'audit.log');

    if (!fs.existsSync(logFile)) {
        return res.json({ logs: [] });
    }

    const logContent = fs.readFileSync(logFile, 'utf-8');
    const logs = logContent.trim().split('\n').filter(line => line.length > 0);
    res.json({ logs });
});

app.listen(PORT, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
});
