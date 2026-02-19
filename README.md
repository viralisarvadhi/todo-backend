# Todo Backend API

## Overview
Express.js REST API for managing todos with in-memory storage.

## Tech Stack
- Node.js
- Express.js
- CORS enabled

## Setup
```bash
npm install
```

## Run
```bash
npm start
```

Server runs at: **http://localhost:3000**

## API Endpoints

### GET /todos
Get all todos.

**Response:**
```json
[
  {
    "id": 1,
    "title": "Sample Todo",
    "detail": "Description here",
    "status": "pending",
    "createdAt": "2024-02-19T10:00:00.000Z"
  }
]
```

### POST /todos
Create a new todo.

**Request Body:**
```json
{
  "title": "Todo title",
  "detail": "Optional detail"
}
```

**Response:** (201 Created)
```json
{
  "id": 1,
  "title": "Todo title",
  "detail": "Optional detail",
  "status": "pending",
  "createdAt": "2024-02-19T10:00:00.000Z"
}
```

### PUT /todos/:id
Update todo status.

**Request Body:**
```json
{
  "status": "done"
}
```

**Response:**
```json
{
  "id": 1,
  "title": "Todo title",
  "detail": "Optional detail",
  "status": "done",
  "createdAt": "2024-02-19T10:00:00.000Z"
}
```

### DELETE /todos/:id
Delete a todo.

**Response:** 204 No Content

## Data Model

### Todo Object
```typescript
{
  id: number,
  title: string,
  detail: string,
  status: "pending" | "done",
  createdAt: string (ISO 8601)
}
```

## Features
- In-memory storage (data resets on server restart)
- CORS enabled for frontend integration
- RESTful API design
- Input validation
- Error handling
