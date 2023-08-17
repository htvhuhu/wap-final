const mysql = require('mysql');
const config = require('./config');

class Database {
    constructor() {
        this.connection = mysql.createConnection(config.dbConfig);
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

    static async transaction(queries, queryValues) {
        if (queries.length !== queryValues.length) {
            return Promise.reject(
                'Number of provided queries did not match the number of provided query values arrays'
            )
        }
        try {
            await this.connection.beginTransaction()
            const queryPromises = []
    
            queries.forEach((query, index) => {
                queryPromises.push(this.connection.query(query, queryValues[index]))
            })
            const results = await Promise.all(queryPromises)
            await this.connection.commit()
            await this.connection.end()
            return results
        } catch (err) {
            await this.connection.rollback()
            await this.connection.end()
            return Promise.reject(err)
        }
    }

    static async transactionPromises(queryPromises) {
        try {
            await this.connection.beginTransaction()
            
            const results = await Promise.all(queryPromises)
            await this.connection.commit()
            await this.connection.end()
            return results
        } catch (err) {
            await this.connection.rollback()
            await this.connection.end()
            return Promise.reject(err)
        }
    }
}
module.exports = new Database();