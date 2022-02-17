import { REMOVE_MESSAGE, SET_MESSAGE } from "../types";

const reducerMessages = (state = [], action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return [...state, action.payload];

    case REMOVE_MESSAGE:
      return state.filter((message) => message.unique_id !== action.payload);

    default:
      return state;
  }
};

export default reducerMessages;
