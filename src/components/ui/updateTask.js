import { showError } from "../utils/notification.js";
import { updateTasks } from "../../api/index.js";
import { loadData } from "./loadData.js";

export const updateTask = async (todo) => {
  const { value: newText } = await Swal.fire({
    title: "Редактирование задачи",
    input: "text",
    inputLabel: "Введите текст новой задачи",
    inputValue: todo.text,
    showCancelButton: true,
    confirmButtonText: "Сохранить",
    cancelButtonText: "Отмена",
    inputValidator: (value) => {
      if (!value) {
        return "Поле  не может быть пустым!";
      }
    },
  });

  if (newText) {
    try {
      await updateTasks(todo.id, newText);
      await loadData();
    } catch (error) {
      showError("Не удалось обновить задачу");
    }
  }
};
