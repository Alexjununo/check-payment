const camposConvenio = {
  productCode: '',
  segmentCode: '',
  valueCode: '',
  value: '',
  companyCode: '',
  cnpj: '',
  freeField: '',
};

const camposTitulo = {
  bankCode: '',
  currencyCode: '',
  verifyingDigit: '',
  expirate: '',
  value: '',
  freeField: '',
};

const decode = (barCode) => {
  let layout = camposConvenio;

  if (barCode.slice(0, 1) === '8') {
    layout.productCode = barCode.slice(0, 3);
    layout.segmentCode = barCode.slice(3, 4);
    layout.valueCode = barCode.slice(4, 5);
    layout.value = barCode.slice(5, 9);
    layout.companyCode = barCode.slice(9, 19);
    layout.cnpj = barCode.slice(19, 0);
    layout.freeField = barCode.slice(19, 43);
  } else {
    layout = camposTitulo;

    layout.bankCode = barCode.slice(0, 3);
    layout.currencyCode = barCode.slice(3, 4);
    layout.verifyingDigit = barCode.slice(4, 5);
    layout.expirate = barCode.slice(5, 9);
    layout.value = barCode.slice(9, 19);
    layout.freeField = barCode.slice(19, 43);
  }

  return layout;
};

exports.getPaymentInfos = async (digitableLine, logger) => {
  try {
    const paymentObj = decode(digitableLine);

    const digitableLineString = digitableLine.toString();

    console.log('🚀 ~ file: PaymentModel.js ~ line 2 ~ exports.getPaymentInfos= ~ digitableLine', digitableLineString);

    logger.info('PaymentModel: generated payment');

    return {
      barCode: '21299758700000020000001121100012100447561740',
      amount: '20.00',
      expirationDate: '2018-07-16',
      ...paymentObj,
    };
  } catch (err) {
    logger.error(err);

    throw new Error(err);
  }
};

module.exports = exports;
