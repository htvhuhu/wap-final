const ejs = require('ejs');

const Order = require("../model/order.js");
const OrderItem = require("../model/orderItem.js");
const OrderDetail = require("../model/orderDetail.js");
const DateTimeHelper = require("../helper/dateTimeHelper");
const EmailHelper = require('../helper/emailHelper');

module.exports.showOrderPage = async (req, res, next) => {
    let orderItems = req.session.orderItems ?? [];
    console.log(orderItems);
    if (orderItems.length > 0) {
        let ds = await OrderItem.getDishes(orderItems.map(i => i.dishId));
        console.log(ds);
        let items = orderItems.map(o => {
            let dish = ds.filter(d => d.dishId == o.dishId)[0];
            let order = { ...o, ...dish };
            return order;
        });

        res.render('order', { orderItems: items });
    } else {
        res.render('order', { orderItems });
    }
}

module.exports.updateOrder = (req, res, next) => {
    // Save orderItems to session
    // req.session.orderItems = req.body.orderItems;
    req.session.orderItems = req.body.orderItems;
    req.session.save();
    res.json({ orderItems: req.body.orderItems });
}

module.exports.completeOrder = (req, res, next) => {
    completeOrder(req, res, next);
}

module.exports.showCompleteOrder = async (req, res, next) => {
    try {
        const orderId = req.params.id;
        var order = (await Order.getOrder(orderId))[0];
        let orderItems = await OrderItem.getOrderItems(orderId);
        let dishes = await OrderItem.getDishes(orderItems.map(i => i.dishId));

        let items = orderItems.map(item => {
            let orderItem = new OrderItem(
                order.ordId,
                item.dishId,
                item.price,
                item.quantity
            );
            orderItem.dishName = dishes.filter(d => d.dishId === item.dishId)[0].dishName;
            return orderItem;
        });

        const orderDetail = new OrderDetail(
            order.ordId,
            order.ordName,
            [],
            items,
            order.totalPrice,
            order.ordAddress,
            order.ordPhone,
            order.ordEmail,
            order.ordDate)
        // 3. Render the EJS template
        res.render('orderComplete', orderDetail);
    } catch (error) {
        next(error);
    }
}

let completeOrder = async (req, res, next) => {
    try {
        const order = new Order(req.body.name,
            DateTimeHelper.formatDate(new Date()),
            req.body.address,
            req.body.phone,
            req.body.email,
            req.body.totalPrice
        );
        var orderId = await Order.insertOrderTransaction(order, req.body.items);

        if (orderId) {
            const orderDetail = new OrderDetail(
                orderId,
                req.body.name,
                [],
                req.body.items,
                req.body.totalPrice,
                req.body.address,
                req.body.phone,
                req.body.email,
                order.ordDate)

            sendConfirmationEmail(req.body.email, orderDetail);
            req.session.orderItems = undefined;
            res.redirect('/order/complete/' + orderId);
        } else {
            throw new Error("Something wrong!!!")
        }
    } catch (error) {
        next(error);
    }
}

function sendConfirmationEmail(email, orderDetails) {
    ejs.renderFile(__dirname + "/.." + "/views/orderComplete-email-template.html", orderDetails, function (err, data) {
        if (err) {
            throw err;
        }

        EmailHelper.sendEmail(email, 'Order Confirmation', data);
    });
}
