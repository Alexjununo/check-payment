const Joi = require('joi');

const paymentSchema = Joi.object({
  digitableLine: Joi.string(),
});

module.exports = paymentSchema;
