const sql = require('better-sqlite3');
const db = sql('items.db');

function showBuyers() {
    try {
        return db.prepare('SELECT * FROM buyers').all();
    } catch (error) {
        console.error("Error fetching buyers:", error);
        return [];
    }
}

console.log(showBuyers());