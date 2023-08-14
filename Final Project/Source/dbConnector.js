const mysql = require('mysql');

class Database {
    constructor() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'restaurant',
            connectTimeout: 60000
        });
    }
    query(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, rows) => {
                if (err) {
                    return reject(err);
                }
                resolve(rows);
            });
        });
    }
    close() {
        return new Promise((resolve, reject) => {
            this.connection.end(err => {
                if (err)
                    return reject(err);
                resolve();
            });
        });
    }
    fetchDataFromTable(tableName, fieldName = 'id', idValue = null, fields = ['*']) {
        return new Promise((resolve, reject) => {
            let query = `SELECT ${fields.join(', ')} FROM \`${tableName}\``;
            let queryParams = [];
    
            if (idValue) {
                if (Array.isArray(idValue)) {
                    const placeholders = idValue.map(() => '?').join(', ');
                    query += ` WHERE ${fieldName} IN (${placeholders})`;
                    queryParams = [...idValue];
                } else {
                    query += ` WHERE ${fieldName} = ?`;
                    queryParams.push(idValue);
                }
            }
    
            this.connection.query(query, queryParams, (err, results) => {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
    
                if (results.length === 0) {
                    console.log(`No record found with ${fieldName} = ${idValue}`);
                    reject(new Error(`No record found with ${fieldName} = ${idValue}`));
                    return;
                }
    
                resolve(results);
            });
        });
    }
}
module.exports = new Database();