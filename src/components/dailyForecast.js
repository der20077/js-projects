const dailyForecast = document.querySelector(".forecast-list");

const groupDataByDay = (list) => {
  const groupedData = [];

  list.forEach((item) => {
    const date = new Date(item.dt * 1000);
    const dayKey = date.toLocaleDateString("ru-Ru");

    if (!groupedData[dayKey]) {
      groupedData[dayKey] = [];
    }
    groupedData[dayKey].push(item);
  });
  return groupedData;
};

export const renderDalyForecast = (data) => {
  dailyForecast.innerHTML = "";
  const groupedData = groupDataByDay(data.list);
  Object.keys(groupedData)
    .slice(0, 5)
    .forEach((dayKey) => {
      const dayData = groupedData[dayKey];
      const maxTemp = Math.round(
        Math.max(...dayData.map((item) => item.main?.temp_max)),
      );
      const minTemp = Math.round(
        Math.min(...dayData.map((item) => item.main?.temp_min)),
      );

      const icon = dayData[0].weather[0].icon;

      const date = new Date(dayData[0].dt * 1000);

      const dayName = date.toLocaleDateString("ru-Ru", {
        weekday: "short",
      });

      const dayNumber = date.getDate();

      const mounthName = date.toLocaleDateString("ru-Ru", {
        month: "short",
      });

      const forecasItem = document.createElement("dib");
      forecasItem.classList.add("forecast-item");
      forecasItem.innerHTML = `<p class="day">${dayName},</p>
            <p class="day">${dayNumber} ${mounthName}</p>
            <img src="https://openweathermap.org/img/wn/${icon}.png" alt="Погода" />
            <div class="temp">
              <p class="temp-day">${maxTemp}°C</p>
              <p class="temp-night">${minTemp}°C</p>
            </div>`;
      dailyForecast.append(forecasItem);
    });
};
