export const calcDayLength = (sunrise, sunset) => {
  const diffInSeconds = sunset - sunrise;
  const hourse = Math.floor(diffInSeconds / 3600);
  const min = Math.floor((diffInSeconds % 3600) / 60);
  return `${hourse} час ${min} мин`;
};
