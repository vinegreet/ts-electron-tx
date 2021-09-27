const formatConfirmations = (value: number | string, enoughNumber: number = 15): string => {
  const convertedValue = Number(value);
  const isEnough = (convertedValue / enoughNumber) > 1;

  return isEnough ? `${enoughNumber}/${enoughNumber}` : `${convertedValue}/${enoughNumber}`;
}

export default formatConfirmations;
