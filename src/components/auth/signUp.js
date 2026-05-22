import {
  auth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "../../fireBaseConfig.js";
import { showError, showSuccess, showWarning } from "../utils/notification.js";
import { showSigninForm, hideSignupForm } from "../utils/signupHelper.js";
import { sugninButton } from "../index.js";
import { signWithGoogle } from "../auth/googleAuth.js";
//импорт настроек бд

// поиск форм
export const signUpForm = document.getElementById("singup-form");
export const signinForm = document.getElementById("signin-info");

const googleButton = document.getElementById("google-signup-button");

sugninButton();

// обработчик событий на форме
signUpForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // сбрасываем свойства
  // получение значений почты и пароля
  const email = document.getElementById("singup-email").value;
  const password = document.getElementById("singup-password").value;

  try {
    //создание обьекта пользователя
    const userCreadential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    // получение пользователя
    const user = userCreadential.user;
    await sendEmailVerification(user);

    //модальное окно об успешной регистрации
    showSuccess(
      "Для входа необходимо верифицировать email. Пожалуйста, проверьте почту!",
    );
    signUpForm.reset();
    hideSignupForm(signUpForm);
    showSigninForm(signinForm);
  } catch (error) {
    switch (error.code) {
      case "auth/email-already-exists":
        showWarning(
          "Этот email уже зарегистрирован. Пожалуйста, ввойдите в систему",
        );
        break;
      case "auth/invalid-email":
        showWarning(
          "Не верный формат email. Пожалуйста, проверьте введенные данные",
        );
        break;
      case "auth/weak-password":
        showWarning(
          "Не верный формат пароля. Пожалуйста, проверьте введенные данные",
        );
        break;
      default:
        showWarning("Произошла ошибка:", error.message);
        break;
    }
  }
});

googleButton.addEventListener("click", signWithGoogle);
