const cityAbbreviations = {
  мск: "Москва",
  спб: "Санкт-Петербург",
  нск: "Новосибирск",
};

export const replaceAbbreviation = (city) => {
  const lowerCaseCity = city.toLowerCase();

  if (cityAbbreviations[lowerCaseCity]) {
    return cityAbbreviations[lowerCaseCity];
  }
  return city;
};
