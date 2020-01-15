import * as ActionType from "./ActionTypes";
import { baseURL } from "../shared/baseURL";

export const addComment = comment => ({
  type: ActionType.ADD_COMMENT,
  payload: comment
});

export const postFeedback = (
  firstname,
  lastname,
  telnum,
  email,
  agree,
  contactType,
  message
) => dispatch => {
  const newFeedback = {
    firstname: firstname,
    lastname: lastname,
    telnum: telnum,
    email: email,
    agree: agree,
    contactType: contactType,
    message: message
  };

  return fetch(baseURL + "feedback", {
    method: "POST",
    body: JSON.stringify(newFeedback),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  })
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          let error = new Error(
            "Error " + response.status + ":" + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        let errormsg = new Error(error.message);
        throw errormsg;
      }
    )
    .then(response => response.json())
    .then(feedback =>
      alert("Thankyou for your feedback!\n" + JSON.stringify(feedback))
    )
    .catch(error =>
      alert("Your Feedback could not be posted\n" + error.message)
    );
};

export const postComment = (dishId, rating, author, comment) => dispatch => {
  const newComment = {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment
  };

  newComment.date = new Date().toISOString();
  return fetch(baseURL + "comment", {
    method: "POST",
    body: JSON.stringify(newComment),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  })
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error :" + response.status + ":" + error.statusText
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => {
      alert("Your comment could not be posted\nError" + error.message);
    });
};

export const fetchDishes = () => dispatch => {
  dispatch(dishesLoading(true));

  return fetch(baseURL + "dishes")
    .then(
      response => {
        if (response.ok) return response;
        else {
          var error = new Error(
            "Error " + response.status + ":" + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
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
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + error.status + ":" + error.statusText
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
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

  return fetch(baseURL + "promotions")
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ":" + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        var errmess = error.message;
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));
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

export const fetchLeaders = () => dispatch => {
  dispatch(leadersLoading(true));

  return fetch(baseURL + "leaders")
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          let error = new Error(
            "Error " + response.status + ":" + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        var errmess = error.message;
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(leaders => dispatch(addLeaders(leaders)))
    .catch(error => dispatch(promosFailed(error.message)));
};

export const leadersLoading = () => ({
  type: ActionType.LEADERS_LOADING
});

export const leadersFailed = errMsg => ({
  type: ActionType.LEADERS_FAILED,
  payload: errMsg.message
});

export const addLeaders = leaders => ({
  type: ActionType.ADD_LEADERS,
  payload: leaders
});
