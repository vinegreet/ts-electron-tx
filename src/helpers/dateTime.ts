const dateTime = (value: number | string, locale: string = 'heb-IL'): string => {
  const seconds = Number(value) * 1000;
  return new Date(seconds).toLocaleString(locale);
}

export default dateTime;
