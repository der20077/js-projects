import { initDelete } from "../../index.js";

export const createDeleteButton = (todo) => {
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("button-function");
  initDelete(todo, deleteBtn);

  const deleteIcon = document.createElement("img");
  deleteIcon.src = "./assets/icons/icon-delete.png";
  deleteIcon.alt = "Удалить";
  deleteIcon.title = "Удалить";
  deleteIcon.width = 24;
  deleteBtn.append(deleteIcon);

  return deleteBtn;
};
