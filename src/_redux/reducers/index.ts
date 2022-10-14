import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

const createAppReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
  });

const createRootReducer = (history) => (state, action) => {
  return createAppReducer(history)(state, action);
};

export default createRootReducer;
