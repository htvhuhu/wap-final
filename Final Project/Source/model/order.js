const db = require('../dbConnector');
const OrderItem =  require("../model/orderItem.js");

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


    static async insertOrderTransaction(order, items) {
        let orderId;
        try {
            // Start the transaction
            await db.connection.beginTransaction();

                // Insert the main order and get the inserted ID
            const orderResult = await db.query('INSERT INTO `order` SET ?', [order]);
            orderId = orderResult.insertId;

            // Map the items to include the orderId and prepare them for insertion
            const orderItems = items.map(item => ({
                ordId: orderId,
                dishId: item.dishId,
                price: item.price,
                quantity: item.quantity
            }));

            // Insert the order items
            const orderItemsResult = await OrderItem.insertOrderItems(orderItems);

            // If everything is successful, commit the transaction
            await db.connection.commit();
        } catch (err) {
            // If any error occurs, rollback the transaction
            console.error("Error in transaction:", err);
            await db.connection.rollback();
            orderId = undefined;
            throw err; // Re-throw the error for further handling

        } finally {
            // Ensure the database connection is closed
            //await db.connection.end();
            return orderId;
        }
    }

};