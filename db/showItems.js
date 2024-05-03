const sql = require('better-sqlite3');
const db = sql('items.db');

function showItems() {
    try {
        return db.prepare('SELECT * FROM items').all();
    } catch (error) {
        console.error("Error fetching items:", error);
        return [];
    }
}

console.log(showItems());