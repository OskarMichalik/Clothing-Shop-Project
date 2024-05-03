const sql = require('better-sqlite3');
const db = sql('items.db');

const deleteBuyers = db.prepare('DROP TABLE buyers');
deleteBuyers.run();