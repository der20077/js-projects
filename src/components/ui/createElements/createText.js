export const createText = (todo, updateBtn) => {
  const textElement = document.createElement("div");
  textElement.classList.add("text-element");
  const textParagraph = document.createElement("p");
  textParagraph.textContent = todo.text;
  textElement.style.textDecoration = todo.completed ? "line-through" : "none";
  textElement.append(textParagraph, updateBtn);
  return textElement;
};
