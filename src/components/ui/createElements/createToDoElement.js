import { createCheckBox } from "./createCheckBox.js";
import { createText } from "./createText.js";
import { createTime } from "./createTime.js";
import { createDeleteButton } from "./createDeleteButton.js";
import { createUpdateBtn } from "./createUpdateBtn.js";
import { initDragAndDrop } from "../../index.js";
export const createToDoElemen = (todo, container) => {
  const todoElement = document.createElement("div");
  todoElement.classList.add("todo");
  todoElement.setAttribute("data-id", todo.id);

  const checkBox = createCheckBox(todo);
  const updateBtn = createUpdateBtn(todo);
  const textElement = createText(todo, updateBtn);
  const timeElement = createTime(todo);
  const deleteBtn = createDeleteButton(todo);

  todoElement.append(checkBox, textElement, timeElement, deleteBtn);
  initDragAndDrop(todoElement, todo, container);
  return todoElement;
};
