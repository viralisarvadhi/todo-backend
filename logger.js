const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, 'audit.log');

function writeLog(action, todo) {
    const timestamp = new Date().toISOString()
        .replace('T', ' ')
        .substring(0, 19);

    let message = '';

    if (action === 'ADD') {
        message = `[${timestamp}] ADD    | id:${todo.id} | title:"${todo.title}" | status:${todo.status}`;
    } else if (action === 'UPDATE') {
        message = `[${timestamp}] UPDATE | id:${todo.id} | title:"${todo.title}" | ${todo.oldStatus} → ${todo.newStatus}`;
    } else if (action === 'DELETE') {
        message = `[${timestamp}] DELETE | id:${todo.id} | title:"${todo.title}"`;
    }

    fs.appendFileSync(logFile, message + '\n');
    console.log(message);
}

module.exports = { writeLog };
