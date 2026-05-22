import {
  auth,
  GoogleAuthProvider,
  signInWithPopup,
} from "../../firebaseConfig.js";

export const signWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    if (result._tokenResponse.isNewUser) {
      console.log("Регистрация через гугл  прошла успешно");
    } else {
      console.log("Вход через гугл выполнен успешно");
    }
  } catch (error) {
    console.error = `Ошибка входа через Google ${error.message}`;
  }
};
