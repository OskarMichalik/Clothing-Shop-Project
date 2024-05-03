const sql = require('better-sqlite3');
const db = sql('items.db');

const deleteStatement = db.prepare('DROP TABLE items');
deleteStatement.run();

const deleteBuyers = db.prepare('DROP TABLE buyers');
deleteBuyers.run();
