import { getGeoData } from "../api/geoData.js";
import { showRecentCities } from "./showRecentCities.js";
const searchForm = document.querySelector(".search-form");
export const cityInput = document.querySelector(".city-input");

export const getWeaherByForm = () => {
  searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    getGeoData();
  });
  cityInput.addEventListener("focus", () => {
    showRecentCities();
  });
};
