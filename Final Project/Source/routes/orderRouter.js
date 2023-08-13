const express = require('express');
const controller = require('../controller/orderController');

const orderRouter = express.Router();

orderRouter.get('/',controller.showIndexPage);
orderRouter.post('/complete',controller.completeOrder);

orderRouter.get('/complete/:id',controller.showCompleteOrder);

orderRouter.post('/updateOrder',controller.updateOrder);

orderRouter.get('/addOrder',controller.addOrder);

module.exports = orderRouter;