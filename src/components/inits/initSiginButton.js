import { hideSignupForm, showSigninForm } from "../utils/signupHelper.js";

export const sugninButton = () => {
  const sugninButton = document.getElementById("signin-btn");

  sugninButton.addEventListener("click", (event) => {
    event.preventDefault();
    hideSignupForm();
    showSigninForm();
  });
};
