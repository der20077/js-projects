import { deleteTasks } from "../../api/index.js";
import { loadData } from "../index.js";
import { showConfirmation, showError } from "../utils/notification.js";

export const initDelete = (todo, deleteBtn) => {
  deleteBtn.addEventListener("click", async () => {
    const isConfirmed = await showConfirmation(
      "Вы уверены, что хотите удалить эту задача навсегда?",
    );
    if (!isConfirmed) {
      return;
    }
    try {
      await deleteTasks(todo.id);

      deleteBtn.closest(".todo").remove();
    } catch (error) {
      console.error(error.message);
      showError("Не удалось удалить задачу");
    }
  });
};
