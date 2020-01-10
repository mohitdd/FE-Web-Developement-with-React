import {
  createStore,
  combineReducers,
  Middleware,
  applyMiddleware
} from "redux";
import { Dishes } from "./dishes";
import { Promotions } from "./promotions";
import { Leaders } from "./leaders";
import { Comments } from "./comments";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createForms } from "react-redux-form";
import { InitialFeedback } from "../redux/forms";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      promotions: Promotions,
      leaders: Leaders,
      comments: Comments,
      ...createForms({
        feedback: InitialFeedback
      })
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};
