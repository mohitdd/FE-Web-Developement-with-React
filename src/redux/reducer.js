import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import { DISHES } from "../shared/dishes";

export const initialState = {
  dishes: DISHES,
  promotions: PROMOTIONS,
  leaders: LEADERS,
  comments: COMMENTS
};

//During the very first time the store is empty(undefined) so we are supplying the initial state to initialize the store
export const Reducer = (state = initialState, action) => {
  return state;
};
