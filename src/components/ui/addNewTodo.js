import { showError } from "../utils/notification.js";
import { addTasks } from "../../api/index.js";
import { loadData } from "./loadData.js";

export const addTodo = async (input) => {
  const taskText = input.value.trim();
  if (!taskText) {
    Swal.fire({
      title: "Текст задачи пуст",
      text: "Введите текст задачи",
      icon: "warning",
    });
    return;
  }
  const newTask = {
    text: taskText,
    createdAt: Date.now(),
    completed: false,
  };
  try {
    await addTasks(newTask);
    input.value = "";
    await loadData();
  } catch (error) {
    console.error("Ошибка добавления:", error.message);
    showError("Не удалось  добавить задачу");
  }
};
