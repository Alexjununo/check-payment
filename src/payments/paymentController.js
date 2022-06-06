const createHttpError = require('http-errors');

const paymentService = require('./paymentService');
const logger = require('../logger');

module.exports.getPaymentInfos = async (request, response) => {
  try {
    const result = await paymentService.getPaymentInfos(request.params.typeableLine, logger);

    return response.json(result);
  } catch (err) {
    logger.error(err);

    throw createHttpError(500, { message: err.message });
  }
};
