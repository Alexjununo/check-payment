exports.getDigitsByPosition = (digits, start, end = null) => {
  const startFilter = digits.filter((digit) => digit.position >= start);

  if (end) {
    const endFilter = startFilter.filter((digit) => digit.position <= end);

    return endFilter;
  }

  return startFilter;
};

module.exports = exports;
