export const switchTheme = () => {
  const themeSwitch = document.getElementById("themeSwitch");
  let userHasChosenTheme = false;

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    let newTheme;
    if (currentTheme === "dark") {
      newTheme = "light";
    } else {
      newTheme = "dark";
    }

    userHasChosenTheme = true;

    setTheme(newTheme);
  };

  const setTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    if (userHasChosenTheme) {
      localStorage.setItem("theme", theme);
    }
  };

  const getThemeByTime = () => {
    const now = new Date();
    const hours = now.getHours();
    return hours >= 7 && hours < 22 ? "light" : "dark";
  };

  const getThemeBybrowserSettings = () => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    } else {
      return "light";
    }
  };

  const saveTheme = localStorage.getItem("theme");

  if (saveTheme) {
    setTheme(saveTheme);
  } else {
    const themeByBrowser = getThemeBybrowserSettings();
    if (themeByBrowser === "dark") {
      setTheme("dark");
    } else {
      const themeByTime = getThemeByTime();
      setTheme(themeByTime);
    }
  }

  themeSwitch.addEventListener("change", toggleTheme);
};
