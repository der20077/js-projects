import { host } from "../host.js";
import { getUserInfo } from "../../components/utils/authHelper.js";

export const updateTasksOrderServer = async (taskId, order) => {
  try {
    const { uid, token } = await getUserInfo();
    const response = await fetch(
      `${host}/${uid}/${taskId}.json?auth=${token}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ order }),
      },
    );

    if (!response.ok) {
      throw new Error(`Не удалось обновить порядок задач
        Статус: ${response.status} `);
    }

    return true;
  } catch (error) {
    throw error;
  }
};
