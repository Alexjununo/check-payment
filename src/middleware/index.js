/* eslint-disable consistent-return */
const createHttpError = require('http-errors');
const Validators = require('../validators');

module.exports = (validator) => {
  // eslint-disable-next-line no-prototype-builtins
  if (!Validators.hasOwnProperty(validator)) { throw new Error(`'${validator}' validator is not exist`); }

  return async (req, res, next) => {
    try {
      const validated = await Validators[validator].validateAsync(req.params);

      req.params = validated;
      next();
    } catch (err) {
      if (err.isJoi) {
        return next(createHttpError(422, { message: err.message }));
      }
      next(createHttpError(500, { message: err.message }));
    }
  };
};
