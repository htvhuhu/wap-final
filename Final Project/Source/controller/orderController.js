const ejs = require('ejs');
const nodemailer = require('nodemailer');
const dbHelper = require('../helper/dbHelper');


const Order =  require("../model/order.js");
const OrderItem =  require("../model/orderItem.js");
const OrderDetail =  require("../model/orderDetail.js");


module.exports.showIndexPage = (req, res, next) => {
    let orderItems = []

    orderItems = req.session.orderItems ?? orderItems;

    if(orderItems.length > 0) {  
        dbHelper.fetchDataFromTable("dish","dishId", orderItems.map(i=>i.dishId) ).then(ds => {
            orderItems = orderItems.map(o=>{
                let dish = ds.filter(d=>d.dishId === o.dishId)[0];
                return {...o,...dish};
            });
            console.log("showIndexPage orderItems",orderItems);

            res.render('order',{orderItems:orderItems});
        });
    }else{
        res.render('order',{orderItems:"Please select your order!"});
    }
}

module.exports.addOrder = (req, res) => {
    let orderItems = [
        {
            dishId: 1,
            quantity: 99
        },
        {
            dishId: 2,
            quantity: 100
        }
    ];

    // Save orderItems to session
    req.session.orderItems = orderItems;
    res.redirect("/order");
}

module.exports.updateOrder = (req, res, next) => {
    console.log(req.body);
    insertOrder(req, res, next);
}

module.exports.completeOrder = (req, res, next) => {
    completeOrder(req, res, next);
}

module.exports.showCompleteOrder = (req, res, next) =>{
    const orderId = req.params.id;

    var order ={};
    var orderItems =[];
    var dishes =[];
    dbHelper.fetchDataFromTable("order","ordId", orderId).then(ord => {
        order = ord[0];
        dbHelper.fetchDataFromTable("order_detail","ordId", orderId).then(ordItems => {
            orderItems = ordItems;
            
            dbHelper.fetchDataFromTable("dish","dishId", orderItems.map(i=>i.dishId) ).then(ds => {
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
                res.sendStatus(404);
            });
        }).catch(err => {
            res.sendStatus(404);
        });
    }).catch(err => {
        res.sendStatus(404);
    });
}

let completeOrder = (req,res,next) => {
    const order = new Order(req.body.name,
        new Date().toISOString().slice(0, 19).replace('T', ' '),
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
            console.log(err);
            return;
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: '111d00111@mail.cjcu.edu.tw',
                pass: 'HuanHuan'
            }
        });

        const mailOptions = {
            from: '111d00111@mail.cjcu.edu.tw',
            to: email,
            subject: 'Order Confirmation',
            html: data
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    });
}

