const express = require('express');
const controller = require('../controller/orderController');

const orderRouter = express.Router();

orderRouter.get('/',controller.showOrderPage);
orderRouter.post('/complete',controller.completeOrder);

orderRouter.get('/complete/:id',controller.showCompleteOrder);

orderRouter.use('/updateOrder',controller.updateOrder);

module.exports = orderRouter;