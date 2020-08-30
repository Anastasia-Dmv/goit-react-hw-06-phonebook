import { combineReducers } from "redux";
import actionTypes from "./contact-types";

// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }
export const items = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADDCONTACT:
      return [...state, payload.contact];
    case actionTypes.DELETE_CONTACT:
      return state.filter((contact) => contact.id !== payload.id);
    default:
      return state;
  }
};
export const filter = (state = "", { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_FILTER:
      return payload.filter;
    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
