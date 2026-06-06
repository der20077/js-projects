import { apiKey, baseUrl } from "../api/apiKeyAndHost.js";
import { showError } from "./error.js";
import { getWeather, getForecast } from "../api/getWeatherAndForecast.js";
import { renderCurrentWeather } from "./currentWeather.js";
import { renderDalyForecast } from "./dailyForecast.js";
import { renderHouryForecast } from "./hourlyForecast.js";

const getBrouserGeolocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Геолокация не поддерживаеться вашим браузером"));
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        (error) => {
          reject(error);
        },
      );
    }
  });
};

const featchWeatherByCoords = async (latitude, longitude, locationName) => {
  try {
    const weatherData = await getWeather(latitude, longitude);
    const forecastData = await getForecast(latitude, longitude);

    renderCurrentWeather(weatherData, locationName);
    renderHouryForecast(forecastData);
    renderDalyForecast(forecastData);
  } catch (error) {
    console.error(error.message);
    showError("Не удалось получить данные о погоде");
  }
};

const geoLocationName = async (latitude, longitude) => {
  const reverseGeocogingUrl = new URL(`${baseUrl}/geo/1.0/reverse`);

  const qweryParams = new URLSearchParams({
    lat: latitude,
    lon: longitude,
    limit: 1,
    appid: apiKey,
  });

  const url = `${reverseGeocogingUrl}?${qweryParams.toString()}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data && data.length > 0) {
      const { local_names } = data[0];
      const russianName = local_names?.ru || data[0].name;
      return `${russianName}`;
    } else {
      throw new Error("Название метса не найдено");
    }
  } catch (error) {
    console.error("Ошибка при получении названия места:", error.message);
    showError("Ошибка при получении названия места");
  }
};

export const geoLocation = () => {
  document.addEventListener("DOMContentLoaded", async () => {
    try {
      const { latitude, longitude } = await getBrouserGeolocation();
      const locationName = await geoLocationName(latitude, longitude);
      await featchWeatherByCoords(latitude, longitude, locationName);
    } catch (error) {
      console.error("Ошибка при получении геолокации:", error.message);
      showError("Не удалось опредилить ваше местоположение. Пожалуйста, введите город вручную")
    }
  });
};
