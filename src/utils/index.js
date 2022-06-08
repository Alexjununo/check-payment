module.exports = (digits, start, end = null) => {
  const digitsFiltered = digits.filter((digit) => (end
    ? digit.position >= start && digit.position <= end
    : digit.position >= start));

  return digitsFiltered;
};
