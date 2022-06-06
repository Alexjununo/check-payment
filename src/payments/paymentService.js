const createHttpError = require('http-errors');
const paymentFactory = require('./paymentFactory');

const validationPayment = (typeableLine, logger) => {
  const CONVENIO = 48;

  if (typeableLine.length >= CONVENIO) {
    const message = 'Invalid Payment';

    logger.error(message);
    throw createHttpError(400, { message });
  }

  return paymentFactory.decodeTypeableLine(typeableLine);
};

exports.getPaymentInfos = async (typeableLine, logger) => {
  try {
    const paymentObj = validationPayment(typeableLine, logger);

    return paymentObj;
  } catch (err) {
    logger.error(err);

    throw createHttpError(500, { message: err.message });
  }
};

module.exports = exports;
