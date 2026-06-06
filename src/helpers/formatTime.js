export const formatTime = (unixTime, timezone) => {
  const localTime = unixTime + timezone;
  const date = new Date(localTime * 1000);
  const hourse = date.getUTCHours();
  const minites = date.getUTCMinutes();

  return `${hourse}:${minites < 10 ? "0" + minites : minites}`;
};
