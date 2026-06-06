

const hourlyForecast = document.querySelector(".hourly-scroll");

export const renderHouryForecast = (data) => {
  hourlyForecast.innerHTML = "";
  const currentDate = new Date();


  currentDate.setHours(0, 0, 0, 0);

  const daysOfWeek = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

  data.list.forEach((item) => {
    const date = new Date(item.dt * 1000);
    const hour = date.getHours();
    const temp = Math.round(item.main?.temp || 0);
    const icon = item.weather[0]?.icon || "01d";

    const forecastDate = new Date(date);
    forecastDate.setHours(0, 0, 0, 0);

    const timeDiff = forecastDate.getTime() - currentDate.getTime();

    const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    let dayLabel;

    if (dayDiff === 0) {
      dayLabel = "Сегодня";
    } else if (dayDiff === 1) {
      dayLabel = "Завтра";
    } else {
      dayLabel = daysOfWeek[forecastDate.getDay()];
    }
    const hourlyItem = document.createElement("div");
    hourlyItem.classList.add("hourly-item");
    hourlyItem.innerHTML = `
     <p class="hour">${dayLabel}</p>
      <p class="hour">${hour}:00</p>
      <img src="https://openweathermap.org/img/wn/${icon}.png" alt="Погода" />
     <p class="temp">${temp} °C</p>
    `;
    hourlyForecast.append(hourlyItem);
  });
};
