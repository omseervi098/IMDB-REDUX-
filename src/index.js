import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware } from "redux";
//curried form logger fn =(obj,next,action)
//called as logger(obj)(next)(action)
const logger = function ({ dispatch, getState }) {
  return function (next) {
    return function (action) {
      //middleware
      console.log("ACTION_TYPE= ", action.type);
      next(action);
    };
  };
};
const store = createStore(rootReducer, applyMiddleware(logger));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
