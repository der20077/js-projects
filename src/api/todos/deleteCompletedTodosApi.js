import { host } from "../host.js";
import { getUserInfo } from "../../components/utils/authHelper.js";

export const deleteCompletedTodos = async (container) => {
  try {
    const { uid, token } = await getUserInfo();
    const completedTodos = Array.from(
      container.querySelectorAll(".todo"),
    ).filter((todoElement) => {
      const checBox = todoElement.querySelector('input[type="checkbox"]');
      return checBox.checked;
    });

    for (const todoElement of completedTodos) {
      const taskId = todoElement.getAttribute("data-id");
      const deleteResponse = await fetch(
        `${host}/${uid}/${taskId}.json?auth=${token}`,
        {
          method: "DELETE",
        },
      );
      if (!deleteResponse.ok) {
        throw new Error(` Не удалось удалить список выполненых задачу. 
        Статус ${deleteResponse.status}`);
      }
      todoElement.remove();
    }
    return true;
  } catch (error) {
    throw error;
  }
};
