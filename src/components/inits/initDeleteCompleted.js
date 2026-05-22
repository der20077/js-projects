import { deleteCompletedTodos } from "../../api/index.js";
import { deleteCompletedButton, loadData } from "../index.js";
import { container } from "../index.js";
import { showConfirmation, showError } from "../utils/notification.js";

export const initDeleteCompleted = () => {
  deleteCompletedButton.addEventListener("click", async () => {
    const isConfirmed = await showConfirmation(
      "Все выполненные задачи будут удалены! Вы уверены?",
    );

    if (!isConfirmed) {
      return;
    }
    try {
      await deleteCompletedTodos(container);
      await loadData();
    } catch (error) {
      console.error(error.message);
      showError("Не удалось  удалить список задач");
    }
  });
};
