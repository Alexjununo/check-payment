const positions = require('./fields/positions');
const utils = require('../utils');
const decodeFirstField = require('./fields/firstField');
const decodeSecondField = require('./fields/secondField');
const decodeThirdField = require('./fields/thirdField');
const decodeFifthField = require('./fields/fifthField');

const {
  FirstFieldPositions,
  SecondFieldPositions,
  ThirdFieldPositions,
  FifthFieldPositions,
  FourFieldPositions,
} = positions;

const generateBarCode = (
  firstField,
  secondField,
  thirdField,
  fourField,
  fifthField,
) => {
  const digits = [
    ...firstField.bankCode,
    ...fourField,
    ...fifthField.expirationDateFactor,
    ...fifthField.valueDigits,
    ...firstField.barCode20to24Positions,
    ...secondField.barCode25to34Positions,
    ...thirdField.barCode35to44Positions,
  ];

  const barCodeDigitsStringValues = digits.map((digit) => digit.value.toString());

  const barCodeFormatted = barCodeDigitsStringValues.reduce((accumulator, digit) => accumulator + digit, '');

  return barCodeFormatted;
};

const createDigits = (typeableLine) => {
  const stringDigits = typeableLine.split('');

  return stringDigits.map((stringDigit, index) => {
    const value = parseInt(stringDigit, 10);
    const position = index + 1;

    return { value, position };
  });
};

const createFirstField = (digits) => {
  const fieldDigits = utils.getDigitsByPosition(
    digits,
    FirstFieldPositions.start,
    FirstFieldPositions.end,
  );

  return decodeFirstField(fieldDigits);
};

const createSecondField = (digits) => {
  const fieldDigits = utils.getDigitsByPosition(
    digits,
    SecondFieldPositions.start,
    SecondFieldPositions.end,
  );

  return decodeSecondField(fieldDigits);
};

const createThirdField = (digits) => {
  const fieldDigits = utils.getDigitsByPosition(
    digits,
    ThirdFieldPositions.start,
    ThirdFieldPositions.end,
  );

  return decodeThirdField(fieldDigits);
};

const createFourField = (digits) => {
  const fieldDigits = utils.getDigitsByPosition(
    digits,
    FourFieldPositions.start,
    FourFieldPositions.end,
  );

  return fieldDigits;
};

const createFifthField = (digits) => {
  const fieldDigits = utils.getDigitsByPosition(
    digits,
    FifthFieldPositions.start,
  );

  return decodeFifthField(fieldDigits);
};

exports.decodeTypeableLine = (typeableLine) => {
  const digits = createDigits(typeableLine);

  const firstField = createFirstField(digits);
  const secondField = createSecondField(digits);
  const thirdField = createThirdField(digits);
  const fourField = createFourField(digits);
  const fifthField = createFifthField(digits);

  const barCode = generateBarCode(
    firstField,
    secondField,
    thirdField,
    fourField,
    fifthField,
  );

  return {
    barCode,
    expirationDate: fifthField.expirationDate,
    amount: fifthField.amount,
  };
};

module.exports = exports;
