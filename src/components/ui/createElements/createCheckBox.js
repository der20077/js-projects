import { initChangeStatus } from "../../index.js";

export const createCheckBox = (todo) => {
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.checked = todo.completed;
  initChangeStatus(todo, checkBox);

  return checkBox;
};
