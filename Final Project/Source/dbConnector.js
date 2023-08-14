
const mysql = require('mysql');
// Connect to MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root3',
    database: 'restaurant',
    connectTimeout: 60000
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database.');
});

module.exports = db;