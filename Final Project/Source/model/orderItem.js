const db = require('../dbConnector');
module.exports = class OrderItem{
    constructor(ordId, dishId,price, quantity){
        this.ordId = ordId,
        this.dishId= dishId,
        this.price= price,
        this.quantity= quantity
    }
    static async insertOrderItems(orderItems) {
        return new Promise((resolve, reject) => {
            orderItems.forEach(element => {
                db.connection.query('INSERT INTO `restaurant`.`order_detail` SET ?', [element], (err,result) => {
                    if (err) {
                        console.error(err);
                        reject(err);
                        return;
                    }
                    resolve(result);
                });  
            });
        });
    }

    static async getDishes(dishIds) {
        return db.fetchDataFromTable("dish","dishId",dishIds);;
    }

    static async getOrderItems(ordId) {
        return db.fetchDataFromTable("order_detail","ordId", ordId);
    }
}