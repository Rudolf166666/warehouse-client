import { NotificationManager } from "react-notifications";

export const useNotification = () => {
  const types = {
    SUCCESS: "success",
    ERROR: "error",
  };
  const createNotification = (message, type) => {
    switch (type) {
      case "success":
        NotificationManager.success(message, "Success");
        break;
      case "error":
        NotificationManager.error(message, "Error");
        break;
    }
  };
  return { createNotification, messageTypes: types };
};
