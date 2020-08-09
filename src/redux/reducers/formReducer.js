import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, removeContact } from "../actions/formAction";
import { contactsFilter } from "../actions/filterAction";
// import {
//   ADD_CONTACT,
//   REMOVE_CONTACT,
//   FILTER_CONTACT,
// } from "../constants/formConstants";

const addItem = (state, action) => {
  return [...state, action.payload];
};
const removeItem = (state, action) => {
  return state.filter((item) => item.id !== action.payload);
};

const items = createReducer([], {
  [addContact]: addItem,
  [removeContact]: removeItem,
});

const filter = createReducer("", {
  [contactsFilter]: (state, action) => action.payload,
});

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case addContact.type:
//       return [...state, payload];
//     case removeContact.type:
//       return state.filter((item) => item.id !== payload);
//     default:
//       return state;
//   }
// };

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case contactsFilter.type:
//       return payload;

//     default:
//       return state;
//   }
// };

export default combineReducers({
  items,
  filter,
});
