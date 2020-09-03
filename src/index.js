import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import globalState from "./redux/store/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={globalState}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
