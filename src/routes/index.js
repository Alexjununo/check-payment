const { Router } = require('express');
const middleware = require('../middleware');
const paymentController = require('../payments/paymentController');

const routes = Router();

routes.get('/boleto/:typeableLine', middleware('payment'), paymentController.getPaymentInfos);

module.exports = routes;
