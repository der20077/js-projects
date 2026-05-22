import { togleTaskStatus } from "../../api/index.js";
import { loadData } from "../index.js";
import { showError } from "../utils/notification.js";

export const initChangeStatus = (todo, checkBox) => {
  checkBox.addEventListener("change", async () => {
    try {
      await togleTaskStatus(todo.id, checkBox.checked);
      await loadData();
    } catch (error) {
      console.error(error.message);
      showError("Не удалось отрисовать данные");
    }
  });
};
