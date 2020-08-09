// import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../redux/reducers/formReducer";

// const rootReducer = combineReducers({
//   contacts: formReducer,
// });

const store = configureStore({
  reducer: {
    contacts: formReducer,
  },
});

export default store;
