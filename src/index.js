import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { createStore } from "redux";

//import "./styles.css";
//import App from "./components/App";
import App from "./components/App";

const initialState = ["Василий"];

export default function reditm(state = initialState, action) {
  if (action.type === "CLIK_ITEM") {
    return [...state, action.payload];
  } else if (action.type === "FIND_ITEM") {
    return state;
  }

  return state;
}
const store = createStore(reditm);
render(
  <Provider store={store}>
    <App data="clients.json" />
  </Provider>,
  document.getElementById("root")
);
