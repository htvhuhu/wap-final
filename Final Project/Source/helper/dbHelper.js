const connection = require('../dbConnector');

/**
 * Generic function to fetch data from a given table.
 * 
 * @param {string} tableName - Name of the table to fetch data from.
 * @param {string} [fieldName] - Name of the ID field.
 * @param {string|Array} [idValue] - Optional ID value (or array of values) for fetching specific records.
 * @param {Array} [fields] - Optional array of fields to select. Defaults to '*'.
 * @returns {Promise} - Resolves with the fetched data or rejects with an error.
 */
function fetchDataFromTable(tableName, fieldName = 'id', idValue = null, fields = ['*']) {
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

        connection.query(query, queryParams, (err, results) => {
            if (err) {
                reject(err);
                return;
            }

            if (results.length === 0) {
                reject(new Error(`${tableName} not found`));
                return;
            }

            resolve(results);
        });
    });
}

function queryDatabase(query) {
    return new Promise((resolve, reject) => {
        connection.query(query, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

module.exports= {fetchDataFromTable:fetchDataFromTable, queryDatabase:queryDatabase}

// Usage examples:

// // Fetch multiple dishes by dishId
// fetchDataFromTable('dish', 'dishId', [1, 2, 3])
//     .then(dishes => {
//         console.log(dishes);
//     })
//     .catch(error => {
//         console.error(error.message);
//     });

// // Fetch a single dish by dishId
// fetchDataFromTable('dish', 'dishId', 1)
//     .then(dish => {
//         console.log(dish[0]);
//     })
//     .catch(error => {
//         console.error(error.message);
//     });


