import { initDeleteCompleted, iniotAddTodo } from "./components/index.js";
import { renderData } from "./components/index.js";
import { auth, onAuthStateChanged } from "./fireBaseConfig.js";
import { loadData } from "./components/index.js";
import { showTaskBlock, hideSigninForm } from "./components/index.js";
import { hideSignupForm } from "./components/utils/signupHelper.js";
import { showWarning } from "./components/utils/notification.js";

export const initApp = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (!user.emailVerified) {
        showWarning(
          "Ваш email не верифицирован. Пожалуйста, проверьте вашу почту ",
        );
        return;
      }
      loadData();
      hideSigninForm();
      hideSignupForm();
      showTaskBlock();
    } else {
      document.getElementById("singup-form").style.display = "block";
    }
  });

  iniotAddTodo();
  initDeleteCompleted();
};
