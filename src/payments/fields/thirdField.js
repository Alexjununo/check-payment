const utils = require('../../utils');
const positions = require('./positions');

module.exports = (digits) => {
  const { ThirdFieldPositions } = positions;
  const barCode35to44Positions = utils.getDigitsByPosition(
    digits,
    ThirdFieldPositions.barCode35to44PositionsStart,
    ThirdFieldPositions.barCode35to44PositionsEnd,
  );

  return {
    barCode35to44Positions,
  };
};
