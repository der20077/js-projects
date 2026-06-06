import { switchTheme } from "./src/components/switchThema.js";
import { getGeoData } from "./src/api/geoData.js";
import { getWeaherByForm } from "./src/components/inputForm.js";
import { renderCurrentTime } from "./src/helpers/curentTime.js";
import { geoLocation } from "./src/components/geoLocation.js";
import { scrollToTop } from "./src/components/scrollToTop.js";
import { getCurrentYear } from "./src/components/curentYear.js";

export const initApp = () => {
  switchTheme();
  getGeoData();
  getWeaherByForm();
  renderCurrentTime();
  geoLocation();
  scrollToTop();
  getCurrentYear();
};
