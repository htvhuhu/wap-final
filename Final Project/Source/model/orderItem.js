
const connection = require('../dbConnector');
module.exports = class OrderItem{
    constructor(ordId, dishId,price, quantity){
        this.ordId = ordId,
        this.dishId= dishId,
        this.price= price,
        this.quantity= quantity
    }
    static insertOrderItems(orderItems) {
        return new Promise((resolve, reject) => {
            console.log("insertOrderItems",orderItems);
            orderItems.forEach(element => {
                connection.query('INSERT INTO `restaurant`.`order_detail` SET ?', [element], (err,result) => {
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
};