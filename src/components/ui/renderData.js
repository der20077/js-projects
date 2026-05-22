import { hideLoader } from "../utils/helpers.js";
import { createToDoElemen } from "./createElements/createToDoElement.js";

export const deleteCompletedButton = document.getElementById(
  "deleteCompletedButton",
);

export const container = document.getElementById("posts-container");

export const renderData = (todos) => {
  container.innerHTML = "";

  const hasCompletedTodose = todos.some((todo) => todo.completed);

  hasCompletedTodose
    ? (deleteCompletedButton.style.display = "block")
    : (deleteCompletedButton.style.display = "none");

  todos.forEach((todo) => {
    const todoElement = createToDoElemen(todo, container);
    container.append(todoElement);
  });
  hideLoader();
};
