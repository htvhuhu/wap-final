const ejs = require('ejs');

const db = require('../dbConnector');
const Order =  require("../model/order.js");
const OrderItem =  require("../model/orderItem.js");
const OrderDetail =  require("../model/orderDetail.js");
const DateTimeHelper =  require("../helper/dateTimeHelper");
const EmailHelper = require('../helper/emailHelper');

module.exports.showOrderPage = (req, res, next) => {
    let orderItems = req.session.orderItems ?? [];
    if(orderItems.length > 0) {  
        db.fetchDataFromTable("dish","dishId", orderItems.map(i=>i.dishId) ).then(ds => {
            console.log(ds);
            let items = orderItems.map(o=>{
                let dish = ds.filter(d=>d.dishId == o.dishId)[0];
                let order = {...o,...dish};
                return order;
            });
            console.log("showIndexPage orderItems",items);

            res.render('order',{orderItems:items});
        });
    }else{
        res.render('order',{orderItems:"Please select your order!"});
    }
}

module.exports.updateOrder = (req, res, next) => {
    // Save orderItems to session
    // req.session.orderItems = req.body.orderItems;
    req.session.orderItems = req.body.orderItems;
    req.session.save();
    res.json({orderItems:req.body.orderItems});
}

module.exports.completeOrder = (req, res, next) => {
    completeOrder(req, res, next);
}

module.exports.showCompleteOrder = (req, res, next) =>{
    const orderId = req.params.id;

    var order ={};
    var orderItems =[];
    var dishes =[];
    db.fetchDataFromTable("order","ordId", orderId).then(ord => {
        order = ord[0];
        db.fetchDataFromTable("order_detail","ordId", orderId).then(ordItems => {
            orderItems = ordItems;
            
            db.fetchDataFromTable("dish","dishId", orderItems.map(i=>i.dishId) ).then(ds => {
                dishes = ds;
                let items = orderItems.map(item => {
                    let orderItem = new OrderItem(
                        order.ordId, 
                        item.dishId,
                        item.price, 
                        item.quantity
                    );
                    orderItem.dishName = dishes.filter(d=>d.dishId === item.dishId)[0].dishName;
                    return orderItem;
                });

                const orderDetail = new OrderDetail(
                    order.ordId,
                    order.ordName,
                    items,
                    order.totalPrice,
                    order.ordAddress,
                    order.ordPhone,
                    order.ordEmail, 
                    order.ordDate)
                // 3. Render the EJS template
                console.log("orderComplete", orderDetail);
                res.render('orderComplete', orderDetail);
            }).catch(err => {
                next(err);
            });
        }).catch(err => {
            next(err);
        });
    }).catch(err => {
        next(err);
    });
}

let completeOrder = (req,res,next) => {
    const order = new Order(req.body.name,
        DateTimeHelper.formatDate(new Date()),
        req.body.address,
        req.body.phone,
        req.body.email,
        req.body.totalPrice
        );

    Order.insertOrder(order).then((insertOrderResult) => {
        var orderId = insertOrderResult.insertId;
        console.log("insertOrder result",orderId);
        const orderItems = req.body.items.map(item => 
            new OrderItem(
                orderId, 
                item.dishId, 
                item.price, 
                item.quantity
            ));

        OrderItem.insertOrderItems(orderItems).then((result) => {
            console.log("insertOrderItems result",result);
            const orderDetails = {
                orderId: orderId,
                ordName: req.body.name,
                orderItems: req.body.items,
                totalPrice: req.body.totalPrice,
                ordAddress: req.body.address,
                ordPhone: req.body.phone
            };
            
            sendConfirmationEmail(req.body.email, orderDetails);
            req.session.orderItems = undefined;
            res.redirect('/order/complete/'+orderId);
        });
    });
}

function sendConfirmationEmail(email, orderDetails) {
    ejs.renderFile(__dirname +"/.."+ "/views/orderComplete-email-template.html", orderDetails, function (err, data) {
        if (err) {
            throw err;
        }

        EmailHelper.sendEmail(email, 'Order Confirmation', data);
    });
}

