import { updateTasksOrderServer } from "../../api/index.js";
import { showLoader, hideLoader } from "../utils/helpers.js";
import { showError } from "../utils/notification.js";

export const updateTasksOrder = async (container) => {
  const todos = Array.from(container.querySelectorAll(".todo"));
  const updatedOrder = todos.map((todo, index) => {
    return {
      id: todo.getAttribute("data-id"),
      order: index + 1,
    };
  });
  try {
    showLoader();
    for (const task of updatedOrder) {
      await updateTasksOrderServer(task.id, task.order);
    }
  } catch (error) {
    console.error(`Ошибка обновления данных ${error.message}`);
    showError("Не удалось обновить данные");
  } finally {
    hideLoader();
  }
};
