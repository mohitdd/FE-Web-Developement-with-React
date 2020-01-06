import { DISHES } from "../shared/dishes";

//Here the state means the previous state from the store
export const Dishes = (state = DISHES, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
