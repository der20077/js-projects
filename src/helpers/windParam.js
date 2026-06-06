export const updateWindDirection = (windDeg) => {
  const windIcon = document.getElementById("wind-direction-icon");
  const windText = document.getElementById("wind-direction-text");

  const iconRotation = (windDeg + 180) % 360;
  windIcon.style.transform = `rotate(${iconRotation}deg)`;

  const direction = ["C", "СВ", "В", "ЮГ", "Ю", "ЮЗ", "З", "СЗ"];
  const normolizedDegrees = (windDeg + 360) % 360;
  const index = Math.round(normolizedDegrees / 45) % 8;
  windText.textContent = direction[index] || "Н/Д";
};
