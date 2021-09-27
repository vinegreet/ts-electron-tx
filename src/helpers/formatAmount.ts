const formatAmount = (value: number | string, fractionDigits: number = 8): string => {
  const amount = Number(value) / 1e18;
  const multi = 10 ** fractionDigits;
  const roundedValue = Math.round(amount * multi) / multi;

  return roundedValue.toLocaleString('en', {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  });
}

export default formatAmount;
