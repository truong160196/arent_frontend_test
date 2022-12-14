// @ts-nocheck
import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import createApiAuthMiddle from "./_drivers/middleware";

import rootSaga from "./sagas";
import createRootReducer from "./reducers";

const history = createBrowserHistory({ basename: "#/" });

const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const middleware = [sagaMiddleware, routeMiddleware, createApiAuthMiddle];

const composeEnhancers =
  window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;

export function configureStore(initialState) {
  // add redux logger in dev mode
  if (process.env.NODE_ENV === "development") {
    const { logger } = require("redux-logger");
    middleware.push(logger);
  }

  const store = createStore(
    createRootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./reducers", () => {
      const nextRootReducer = require("./reducers");
      store.replaceReducer(nextRootReducer(history));
    });
  }
  return store;
}

const store = configureStore();
export { history };
export default store;
