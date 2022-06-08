const getDigitsByPosition = require('../../utils');
const positions = require('./positions');

module.exports = (digits) => {
  const { FirstFieldPositions } = positions;
  const bankCode = getDigitsByPosition(
    digits,
    FirstFieldPositions.bankCodeStart,
    FirstFieldPositions.bankCodeEnd,
  );
  const currencyCode = getDigitsByPosition(
    digits,
    FirstFieldPositions.currencyCodeStart,
    FirstFieldPositions.currencyCodeEnd,
  );
  const barCode20to24Positions = getDigitsByPosition(
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
