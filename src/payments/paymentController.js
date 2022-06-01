const paymentService = require('./paymentService');
const logger = require('../logger');

module.exports.getPaymentInfos = async (request, response) => {
  try {
    const result = await paymentService.getPaymentInfos(request.params.digitableLine, logger);

    logger.info('Valid code');
    return response.json(result);
  } catch (err) {
    logger.error(err);

    throw new Error(err);
  }
};
