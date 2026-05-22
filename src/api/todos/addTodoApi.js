import { host } from "../host.js";
import { getUserInfo } from "../../components/utils/authHelper.js";
export const addTasks = async (newTask) => {
  try {
    const { uid, token } = await getUserInfo();
    const response = await fetch(`${host}/${uid}.json?auth=${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
    if (!response.ok) {
      throw new Error(`Не удалось добавить задачу задачу. 
        Статус:${response.status}`);
    }
    return await response.json();
  } catch (error) {  
    throw error;
  }
};
