const getDigitsByPosition = require('../../utils');
const positions = require('./positions');

module.exports = (digits) => {
  const { SecondFieldPositions } = positions;
  const barCode25to34Positions = getDigitsByPosition(
    digits,
    SecondFieldPositions.barCode25to34PositionsStart,
    SecondFieldPositions.barCode25to34PositionsEnd,
  );

  return {
    barCode25to34Positions,
  };
};
