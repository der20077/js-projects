import { auth, signOut } from "../../fireBaseConfig.js";
import { showSigninForm, hideSignupForm } from "../utils/signupHelper.js";
document.getElementById("logout-button").addEventListener("click", async () => {
  try {
    await signOut(auth);
    hideSignupForm();
    showSigninForm();
    document.getElementById("task-container").style.display = "none";
  } catch (error) {
    console.error(`Ошибка при выходе из системы ${error.message}`);
  }
});
