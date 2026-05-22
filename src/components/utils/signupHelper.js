import { signUpForm, signinForm } from "../index.js";

export const hideSignupForm = () => {
  signUpForm.style.display = "none";
};

export const showSigninForm = () => {
  signinForm.style.display = "block";
};