import { auth, onAuthStateChanged } from "../../fireBaseConfig.js";

/**
 * Получает информацию  о пользователе
 * @returns {Promise{uid: string, token:string }} обьект с uid  и токеном пользователя
 * @throws{Error} Если пользователь не авторизован
 */

export const getUserInfo = () => {
  // получаем промис
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          // если положителен то прокидываем обьект
          const token = await user.getIdToken();

          resolve({ uid: user.uid, token, emailVerified: user.emailVerified });
        } catch (error) {
          // если отрицательно то ошибка
          reject(new Error("Не удалось получить токен"));
        }
      } else {
        reject(new Error("Пользователь не авторизован"));
      }
    });
  });
};
