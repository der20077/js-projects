export const getCurrentYear = () => {
  const currentYear = new Date().getFullYear();
  const yearEllement = document.getElementById("currentYear");
  yearEllement.textContent = currentYear
};
