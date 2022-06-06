const Joi = require('joi');

const paymentSchema = Joi.object({
  typeableLine: Joi.string().regex(/^[0-9]+$/).required(),
});

module.exports = paymentSchema;
