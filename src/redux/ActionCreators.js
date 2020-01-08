import * as ActionType from "./ActionTypes";
import { DISHES } from "../shared/dishes";

export const addComment = (dishId, rating, author, comment) => ({
  type: ActionType.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment
  }
});

export const fetchDishes = () => dispatch => {
  dispatch(dishesLoading(true));
  setTimeout(() => {
    dispatch(addDishes(DISHES));
  }, 2000);
};

export const dishesLoading = () => ({
  type: ActionType.DISHES_LOADING
});

export const dishesFailed = errMsg => ({
  type: ActionType.DISHES_FAILED,
  payload: errMsg
});

export const addDishes = dishes => ({
  type: ActionType.ADD_DISHES,
  payload: dishes
});
