const errorMessage = document.getElementById("error-message");

export const showError = (message) => {
  errorMessage.textContent = message;
};
