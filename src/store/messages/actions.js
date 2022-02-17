import { REMOVE_MESSAGE, SET_MESSAGE } from "../types";

export const addMessage = (message) => {
  return { type: SET_MESSAGE, payload: message };
};

export const removeMessage = (messageId) => {
  return { type: REMOVE_MESSAGE, payload: messageId };
};
