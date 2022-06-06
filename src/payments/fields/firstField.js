const utils = require('../../utils');
const positions = require('./positions');

module.exports = (digits) => {
  const { FirstFieldPositions } = positions;
  const bankCode = utils.getDigitsByPosition(
    digits,
    FirstFieldPositions.bankCodeStart,
    FirstFieldPositions.bankCodeEnd,
  );
  const currencyCode = utils.getDigitsByPosition(
    digits,
    FirstFieldPositions.currencyCodeStart,
    FirstFieldPositions.currencyCodeEnd,
  );
  const barCode20to24Positions = utils.getDigitsByPosition(
    digits,
    FirstFieldPositions.barCode20to24PositionsStart,
    FirstFieldPositions.barCode20to24PositionsEnd,
  );

  return {
    bankCode,
    currencyCode,
    barCode20to24Positions,
  };
};
