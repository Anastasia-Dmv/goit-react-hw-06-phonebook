import { combineReducers } from "redux";
//import actionTypes from "./contact-types";
import actionTypes from "./contact-actions";

import { createReducer } from "@reduxjs/toolkit";

const items = createReducer([], {
  [actionTypes.addContact]: (state, action) => [
    ...state,
    action.payload.contact,
  ],
  [actionTypes.deleteContact]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

const filter = createReducer("", {
  [actionTypes.changeFilter]: (state, action) => action.payload,
});

// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }
// export const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case actionTypes.addContact.type:
//       return [...state, payload.contact];
//     case actionTypes.deleteContact.type:
//       return state.filter((contact) => contact.id !== payload);
//     default:
//       return state;
//   }
// };
// export const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case actionTypes.changeFilter.type:
//       return payload;
//     default:
//       return state;
//   }
// };

export default combineReducers({
  items,
  filter,
});
