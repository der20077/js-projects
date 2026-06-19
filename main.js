const axiosInstance = axios.create();

let abortController;

const featchWeatherData = (lat, lon) => {
  axiosInstance({
    url: "https://api.openweathermap.org/data/2.5/weather",
    params: {
      lat: lat,
      lon: lon,
      lang: "ru",
      units: "metric",
      appid: "48ab60050d33526026c2976d68792303",
    },
    signal: abortController.signal,
  })
    .then((Response) => {
      document.getElementById("output").textContent = JSON.stringify(
        Response.data,
        null,
        2,
      );
    })
    .catch((error) => {
      if ((error.message && error.message, includes("canceled"))) {
        console.log("Запрос был отмемен");
        document.getElementById("output").textContent =
          `Ошибка ${error.message}`;
      }
    });
};

document.getElementById("featchButton").addEventListener("click", () => {
  abortController = new AbortController();
  featchWeatherData(40, 41);
});

document.getElementById("CancelButton").addEventListener("click", () => {
  if (abortController) {
    abortController.abort();
    console.log("Запрос отменен потльзователем");
    
  }
});
