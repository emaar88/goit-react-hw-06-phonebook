import { configureStore } from "@reduxjs/toolkit";
// import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "../reducers/contactReducers";

const globalState = configureStore({
  reducer: {
    contacts: rootReducer,
  },
});

export default globalState;
