import { host } from "../host.js";
import { getUserInfo } from "../../components/utils/authHelper.js";

export const updateTasks = async (id, newText) => {
  try {
    const { uid, token } = await getUserInfo();
    const response = await fetch(`${host}/${uid}/${id}.json?auth=${token}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: newText }),
    });
    if (!response.ok) {
      throw new Error(`Не удалось обновить задачу. 
        Статус:${response.status}`);
    }
    return true;
  } catch (error) {
    throw error;
  }
};
