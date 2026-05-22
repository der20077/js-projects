import { addTodo } from "../index.js";

export const iniotAddTodo = () => {
  const addButton = document.getElementById("add-button");
  const input = document.getElementById("task-input");
  addButton.addEventListener("click", () => {
    addTodo(input);
  });

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      addTodo(input);
    }
  });
};
