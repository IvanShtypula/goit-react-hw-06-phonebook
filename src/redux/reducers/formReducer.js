import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, removeContact } from "../actions/formAction";
import { contactsFilter } from "../actions/filterAction";
import { itemsStorage } from "../actions/storageAction";
// import {
//   ADD_CONTACT,
//   REMOVE_CONTACT,
//   FILTER_CONTACT,
// } from "../constants/formConstants";

const addItem = (state, {payload}) => {
  return [...state, payload];
};
const removeItem = (state, {payload}) => {
  return state.filter((item) => item.id !== payload);
};

const items = createReducer([], {
  [addContact]: addItem,
  [removeContact]: removeItem,
  [itemsStorage]: (_, {payload}) => payload
});

const filter = createReducer("", {
  [contactsFilter]: (_, {payload}) => payload,
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
