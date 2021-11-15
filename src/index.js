import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";

store.subscribe(() => console.log(store.getState())); // checking the state of redux

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> {/* here, we have provided the data to <App /> using <Provider> */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


