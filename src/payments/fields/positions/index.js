exports.FirstVerifierDigitMultiplier = {
  firstField: 2,
  secondField: 1,
  thirdField: 1,
};

exports.FirstFieldPositions = {
  start: 1,
  end: 10,
  bankCodeStart: 1,
  bankCodeEnd: 3,
  currencyCodeStart: 4,
  currencyCodeEnd: 4,
  barCode20to24PositionsStart: 5,
  barCode20to24PositionsEnd: 9,
};

exports.SecondFieldPositions = {
  start: 11,
  end: 21,
  barCode25to34PositionsStart: 11,
  barCode25to34PositionsEnd: 20,
};

exports.ThirdFieldPositions = {
  start: 22,
  end: 32,
  barCode35to44PositionsStart: 22,
  barCode35to44PositionsEnd: 31,
};

exports.FourFieldPositions = {
  start: 33,
  end: 33,
};

exports.FifthFieldPositions = {
  start: 34,
  dueDateFactorStart: 34,
  dueDateFactorEnd: 37,
  barCodeValueDigitsStart: 38,
};

module.exports = exports;
