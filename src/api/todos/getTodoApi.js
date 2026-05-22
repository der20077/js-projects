import { host } from "../host.js";

export const getTodos = async (uid, token) => {
  try {
    const response = await fetch(`${host}/${uid}.json?auth=${token}`, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(`Данные не получены. 
        Статус: ${response.status}`);
    }

    const data = await response.json();
    if (!data) {
      return [];
    }

    if (data.length === 0) {
      throw new Error("Задач нет");
    }

    const todosArray = Object.keys(data).map((key) => {
      return {
        id: key,
        ...data[key],
      };
    });

    todosArray.sort((a, b) => a.order - b.order);
    return todosArray;
  } catch (error) {
    throw error;
  }
};
