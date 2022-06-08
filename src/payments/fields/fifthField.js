const moment = require('moment');
const getDigitsByPosition = require('../../utils');
const positions = require('./positions');

const BASE_DATE = '1997-10-07';
const BASE_FACTOR = 1001;

const concatDigits = (digits) => digits
  .map((digit) => digit.value)
  .reduce((prev, curr) => {
    const stringValue = prev.toString() + curr.toString();

    return parseInt(stringValue, 10);
  }, 0);

const getExpirationDate = (expirationFactor) => {
  if (expirationFactor[0].value === 0) { return null; }

  const dueDateFactor = concatDigits(expirationFactor);

  const factorDiference = dueDateFactor - BASE_FACTOR;

  return moment(BASE_DATE)
    .add(factorDiference, 'days')
    .format('YYYY/MM/DD');
};

const getAmount = (valueDigits) => {
  const amount = concatDigits(valueDigits);
  const amountFormatted = Number((amount / 100).toFixed(2));

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(amountFormatted);
};

module.exports = (digits) => {
  const { FifthFieldPositions } = positions;
  const expirationDateFactor = getDigitsByPosition(
    digits,
    FifthFieldPositions.dueDateFactorStart,
    FifthFieldPositions.dueDateFactorEnd,
  );
  const valueDigits = getDigitsByPosition(
    digits,
    FifthFieldPositions.barCodeValueDigitsStart,
  );

  return {
    expirationDateFactor,
    valueDigits,
    expirationDate: getExpirationDate(expirationDateFactor),
    amount: getAmount(valueDigits),
  };
};
