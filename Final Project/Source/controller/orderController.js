let model = require('../model/order');
const ejs = require('ejs');
const nodemailer = require('nodemailer');

let listOrder = []; 

module.exports.showIndexPage = (req, res, next) => {
    res.render('order',model);
}

module.exports.completeOrder = (req, res, next) => {
    completeOrder(req, res, next);
}
module.exports.updateOrder = (req, res, next) => {
    console.log(req.body);
    saveOrder(req, res, next);
}

module.exports.showCompleteOrder = (req, res, next) =>{
    let detail = listOrder.filter(order => order.orderId === req.params.id)[0];
    console.log(detail);
    res.render('orderComplete', detail);
}

let saveOrder = (req, res, next) => {
    // const orderData = {
    //     user_name: req.body.name,
    //     address: req.body.address,
    //     phone: req.body.phone,
    //     email: req.body.email,
    //     status: 'saved'
    // };

    // Insert the order into the database
    // connection.query('INSERT INTO orders SET ?', orderData, (err, result) => {
    //     if (err) {
    //         res.status(500).send("Internal Server Error");
    //         return;
    //     }

    //     const orderId = result.insertId;
    //     const orderItems = req.body.orderItems.map(item => [orderId, item.dish_name, item.quantity, item.price]);

    //     // Insert the associated order items into the database
    //     connection.query('INSERT INTO order_items (order_id, dish_name, quantity, price) VALUES ?', [orderItems], (err) => {
    //         if (err) {
    //             res.status(500).send("Internal Server Error");
    //             return;
    //         }
    //     });
    // });
}

let completeOrder = (req,res,next) => {
    saveOrder(req, res, next);
    // Update the order's status to 'complete' in the database
    // connection.query('UPDATE orders SET status = ? WHERE id = ?', ['complete', orderId], (err) => {
    //     if (err) {
    //         res.status(500).send("Internal Server Error");
    //         return;
    //     }

    //     // Optionally, send a confirmation email
    //     const orderDetails = {
    //         userName: req.body.name,
    //         orderItems: req.body.orderItems,
    //         totalPrice: total_price,
    //         address: req.body.address,
    //         phone: req.body.phone
    //     };
    //     sendConfirmationEmail(req.body.email, orderDetails);
    // });
    
    // Optionally, send a confirmation email
    const orderDetails = {
        orderId: req.body.orderId,
        userName: req.body.name,
        orderItems: req.body.items,
        totalPrice: req.body.totalPrice,
        address: req.body.address,
        phone: req.body.phone
    };
    let existOrders = listOrder.filter(n=>n.orderId === req.body.orderId);
    if(existOrders.length == 0) {
        listOrder.push(orderDetails);
    }else{
        let index = listOrder.indexOf(existOrders[0]);
        while (index > -1 && listOrder.filter(n=>n.orderId === req.body.orderId).length > 0) { // only splice array when item is found
            listOrder.splice(index, 1); // 2nd parameter means remove one item only
            index = listOrder.indexOf(listOrder.filter(n=>n.orderId === req.body.orderId)[0])
        }
        listOrder.push(orderDetails);
    }
    sendConfirmationEmail(req.body.email, orderDetails);

    res.redirect('/order/complete/'+req.body.orderId);
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

