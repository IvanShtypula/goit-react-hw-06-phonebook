import { uuid } from "uuidv4";
import { createAction } from "@reduxjs/toolkit";
// import { ADD_CONTACT, REMOVE_CONTACT } from "../constants/formConstants";

export const addContact = createAction("@contacts/add", (name, number) => ({
  payload: {
    id: uuid(),
    name: name,
    number: number,
  },
}));

export const removeContact = createAction("@contacts/remove");

// export const addContact = (name, number) => ({
//   type: ADD_CONTACT,
//   payload: {
//     id: uuid(),
//     name: name,
//     number: number,
//   },
// });

// export const removeContact = (id) => ({
//   type: REMOVE_CONTACT,
//   payload: id,
// });
