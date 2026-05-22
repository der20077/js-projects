import {
  auth,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "../../fireBaseConfig.js";
import { loadData } from "../index.js";
import {
  showConfirmation,
  showError,
  showSuccess,
  showWarning,
} from "../utils/notification.js";
import { signWithGoogle } from "../auth/googleAuth.js";
//импорт настроек бд

// поиск формы
const signinForm = document.getElementById("signin-info");
const taskContainer = document.getElementById("task-container");
const googleButton = document.getElementById("google-signin-button");
const forgotPasswordForm = document.getElementById("forgot-password-form");
const forgotPasswordButton = document.getElementById("forgot-password-button");

export const showTaskBlock = () => {
  taskContainer.style.display = "flex";
};

export const hideSigninForm = () => {
  signinForm.style.display = "none";
};

const showForgotPasswordForm = () => {
  forgotPasswordForm.style.display = "flex";
  hideSigninForm();
};
// обработчик событий на форме
signinForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // сбрасываем свойства
  // получение значений почты и пароля
  const email = document.getElementById("signin-email").value;
  const password = document.getElementById("signin-password").value;

  try {
    //создание обьекта пользователя
    const userCreadential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    // получение пользователя
    const user = userCreadential.user;
    if (!user.emailVerified) {
      showWarning("Ваш email не верифицирован. Пожалуйста, проверьте почту");
      const resent = await showConfirmation(
        "Отправить письмо для верификации повторно",
      );

      if (resent) {
        await sendEmailVerification(user);
        showSuccess(
          "Письмо для верификации отправлено повторно. Проверьте вашу почту",
        );
      }
      return;
    }
    showTaskBlock();
    hideSigninForm();
    loadData();
  } catch (error) {
    switch (error.code) {
      case "auth/too-many-requests":
        showWarning(
          "Слишком много попыток входа. Пожалуйста, попробуйте позже",
        );
        break;
      case "auth/invalid-credential":
        showWarning("Неверныйе учётные данные. Проверьте email и пароль");
        break;
      default:
        showWarning("Произошла ошибка авторизации:", error.message);
        break;
    }
  }
});

googleButton.addEventListener("click", signWithGoogle);

forgotPasswordButton.addEventListener("click", showForgotPasswordForm);
