import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.min.css";
import reducer, { initialState } from "./Reducer";
import {StateProvider} from "./StateProvider";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
