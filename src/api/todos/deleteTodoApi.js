import { host } from "../host.js";
import { getUserInfo } from "../../components/utils/authHelper.js";

export const deleteTasks = async (id) => {
  try {
    const { uid, token } = await getUserInfo();
    const response = await fetch(
      `${host}/${uid}/${id}.json?auth=${token}`,

      {
        method: "DELETE",
      },
    );
    if (!response.ok) {
      throw new Error(`Не удалось удалить задачу. 
         Статус:${response.status}`);
    }

    return true;
  } catch (error) {
    throw error;
  }
};
