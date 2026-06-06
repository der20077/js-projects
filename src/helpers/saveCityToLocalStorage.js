import { capitalazeCity } from "./capitalazedCity.js";

export const saveCityToLocalStorage = (city) => {
  const capitalazedCity = capitalazeCity(city);
  let cities = JSON.parse(localStorage.getItem("recentCities")) || [];
  if (!cities.includes(capitalazedCity)) {
    cities.unshift(capitalazedCity);
    if (cities.length > 5) {
      cities.pop();
    }
  }
  localStorage.setItem("recentCities", JSON.stringify(cities));
};
