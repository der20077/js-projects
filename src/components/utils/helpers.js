const overlay = document.getElementById("overlay");



export const showLoader = () => {
  overlay.style.display = "flex";
};

export const hideLoader = () => {
  overlay.style.display = "none";
};
