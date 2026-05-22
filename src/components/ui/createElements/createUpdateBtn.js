import { updateTask } from "../../index.js";

export const createUpdateBtn = (todo) => {
  const updateBtn = document.createElement("button");
  updateBtn.classList.add("button-function");

  const updateIcon = document.createElement("img");
  updateIcon.src = "./assets/icons/icon-update.png";
  updateIcon.alt = "Изменить";
  updateIcon.title = "Изменить";
  updateIcon.width = 24;
  updateBtn.append(updateIcon);
  updateBtn.addEventListener("click", () => {
    updateTask(todo);
  });
  return updateBtn;
};
