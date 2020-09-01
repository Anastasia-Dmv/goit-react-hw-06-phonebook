//import actionTypes from "./contact-types";
import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contact/AddContact", (name, number) => ({
  payload: {
    contact: {
      name: name,
      number: number,
      id: uuidv4(),
    },
  },
}));
const deleteContact = createAction("contact/Delete");
const changeFilter = createAction("contact/changeFilter");
const saveInStorage = createAction("contact/saveInStorage");
export default { addContact, deleteContact, changeFilter, saveInStorage };
//=============without toolkit====
// const addContact = (name, number) => ({
//   type: actionTypes.ADDCONTACT,
//   payload: {
//     contact: {
//       name: name,
//       number: number,
//       id: uuidv4(),
//     },
//   },
// });
// const deleteContact = (id) => ({
//   type: actionTypes.DELETE_CONTACT,
//   payload: {
//     id,
//   },
// });

// const changeFilter = (filter) => ({
//   type: actionTypes.CHANGE_FILTER,
//   payload: {
//     filter,
//   },
// });
