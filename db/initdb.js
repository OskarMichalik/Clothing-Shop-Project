const sql = require('better-sqlite3');
const db = sql('items.db');

db.prepare(`
    CREATE TABLE IF NOT EXISTS items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        category TEXT NOT NULL,
        image TEXT NOT NULL,
        price VARCHAR (12) NOT NULL
    )
`).run();

db.prepare(`
    CREATE TABLE IF NOT EXISTS buyers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        itemId INTEGER NOT NULL,
        email TEXT NOT NULL,
        address TEXT NOT NULL,
        postalCode TEXT NOT NULL,
        time DATETIME NOT NULL
    )
`).run();