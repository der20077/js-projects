import { getTodos } from "../../api/index.js";
import { renderData } from "../index.js";
import { getUserInfo } from "../utils/authHelper.js";
import { showLoader, hideLoader } from "../utils/helpers.js";
import { showInfo, showError } from "../utils/notification.js";

export const loadData = async () => {
  try {
    showLoader();
    const { uid, token } = await getUserInfo();
    const todos = await getTodos(uid, token);

    if (todos.length === 0) {
      showInfo("У вас пока нет задач");
    }
    renderData(todos);
  } catch (error) {
    console.error(`Ошибка полученния данных ${error.message}`);
      showError("Не удалось  получить данные");
  } finally {
    hideLoader();
  }
};
