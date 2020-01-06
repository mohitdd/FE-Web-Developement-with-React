import { LEADERS } from "../shared/leaders";

//Here the state means the previous state from the store
export const Leaders = (state = LEADERS, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
