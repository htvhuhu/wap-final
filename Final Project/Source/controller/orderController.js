let model = require('../model/order');
const ejs = require('ejs');
const nodemailer = require('nodemailer');
const connection = require('../dbConnector');
const dbHelper = require('../helper/dbHelper');

let listOrder = []; 

module.exports.showIndexPage = (req, res, next) => {
    let orderItems = [
        {
            dishId: 1,
            quantity: 5
        },
        {
            dishId: 2,
            quantity: 7
        }
    ]

    orderItems = req.session.orderItems ?? orderItems;

    dbHelper.fetchDataFromTable("dish","dishId", orderItems.map(i=>i.dishId) ).then(ds => {
        orderItems = orderItems.map(o=>{
            let dish = ds.filter(d=>d.dishId === o.dishId)[0];
            return {...o,...dish};
        });
        console.log(orderItems);
        res.render('order',{orderItems:orderItems});
    });
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
    saveOrder(req, res, next);
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
                const orderDetails = {
                    ordId: order.ordId,
                    ordName: order.ordName,
                    orderItems: orderItems.map(item => {
                        return {
                            dishName: dishes.filter(d=>d.dishId === item.dishId)[0].dishName,
                            price: item.price,
                            quantity: item.quantity
                        }
                    }),
                    totalPrice: order.totalPrice,
                    ordAddress: order.ordAddress,
                    ordPhone: order.ordPhone,
                    ordEmail: order.ordEmail,
                    ordDate: order.ordDate,
                };
            
                // 3. Render the EJS template
                console.log("orderComplete", orderDetails);
                res.render('orderComplete', orderDetails);
            });
        });
    });
}

let saveOrder = (req, res, next) => {
    return new Promise((resolve, reject) => {
        const orderData = {
            ordName: req.body.name,
            ordDate: new Date().toISOString().slice(0, 19).replace('T', ' '),
            ordAddress: req.body.address,
            ordPhone: req.body.phone,
            ordEmail: req.body.email,
            totalPrice: req.body.totalPrice
        };

        // Insert the order into the database
        // INSERT INTO `restaurant`.`order` (`ordId`, `ordDate`, `ordName`, `ordAddress`, `ordPhone`, `ordEmail`, `totalPrice`) 
        //VALUES (<{ordId: }>, <{ordDate: }>, <{ordName: }>, <{ordAddress: }>, <{ordPhone: }>, <{ordEmail: }>, <{totalPrice: }>);
        connection.query('INSERT INTO `order` SET ?', [orderData], (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).send("Internal Server Error");
                return;
            }

            
            var orderId = result.insertId;
            const orderItems = req.body.items.map(item => [orderId.toString(), item.dishId, item.price, item.quantity]);
            // Insert the associated order items into the database
            // INSERT INTO `restaurant`.`orderdetail` (`odId`, `ordId`, `dishId`, `price`, `quantity`) 
            // VALUES (<{odId: }>, <{ordId: }>, <{dishId: }>, <{price: }>, <{quantity: }>);
            connection.query('INSERT INTO `restaurant`.`order_detail` (`ordId`, `dishId`, `price`, `quantity`) VALUES ?', 
                                    [orderItems], (err) => {
                if (err) {
                    console.error(err);
                    res.status(500).send("Internal Server Error");
                    return;
                }
            });      
            resolve(orderId);
        });
});
}

let completeOrder = (req,res,next) => {
    saveOrder(req, res, next).then(id => {
        console.log("orderId",id);
        var orderId = id
        
        console.log("orderId",orderId);
        
        const orderDetails = {
            orderId: orderId,
            ordName: req.body.name,
            orderItems: req.body.items,
            totalPrice: req.body.totalPrice,
            ordAddress: req.body.address,
            ordPhone: req.body.phone
        };
        
        sendConfirmationEmail(req.body.email, orderDetails);

        res.redirect('/order/complete/'+orderId);
    });
}



function sendConfirmationEmail(email, orderDetails) {
    ejs.renderFile(__dirname +"/.."+ "/views/orderComplete.html", orderDetails, function (err, data) {
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

