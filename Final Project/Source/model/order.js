const db = require('../dbConnector');

module.exports = class Order{
    constructor(ordName,ordDate,ordAddress,ordPhone,ordEmail,totalPrice){
        this.ordName = ordName,
        this.ordDate= ordDate,
        this.ordAddress= ordAddress,
        this.ordPhone= ordPhone,
        this.ordEmail= ordEmail,
        this.totalPrice= totalPrice
    }

    static async insertOrder(order) {
        console.log('Insert Order',order);
        return new Promise((resolve, reject) => {
            db.connection.query('INSERT INTO `order` SET ?', [order], (err, result) => {
                if (err) {
                    console.error(err);
                    reject(err);
                    return;
                }
                resolve(result);
            });
        });
    }
    static async getOrder(ordId) {
        return db.fetchDataFromTable("order","ordId", ordId);
    }
};