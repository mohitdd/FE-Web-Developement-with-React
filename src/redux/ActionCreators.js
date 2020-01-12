import * as ActionType from "./ActionTypes";
import { baseURL } from "../shared/baseURL";

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

  return fetch(baseURL + "dishes")
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)));
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

export const fetchComments = () => dispatch => {
  console.log("Fetching comments");
  debugger;
  return fetch(baseURL + "comments")
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)));
};

export const commentsFailed = errMsg => ({
  type: ActionType.COMMENTS_FAILED,
  payload: errMsg
});

export const addComments = comments => ({
  type: ActionType.ADD_COMMENTS,
  payload: comments
});

export const fetchPromos = () => dispatch => {
  debugger;
  dispatch(promosLoading(true));
  console.log("promos called");
  return fetch(baseURL + "promotions")
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)));
};

export const promosLoading = () => ({
  type: ActionType.PROMOS_LOADING
});

export const promosFailed = errMsg => ({
  type: ActionType.PROMOS_FAILED,
  payload: errMsg
});

export const addPromos = promos => ({
  type: ActionType.ADD_PROMOS,
  payload: promos
});
