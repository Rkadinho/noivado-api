const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('noivado.db');

db.run(`
  CREATE TABLE IF NOT EXISTS guests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    code TEXT UNIQUE
  )
`);

module.exports = db;