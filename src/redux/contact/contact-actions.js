import actionTypes from "./contact-types";
import { v4 as uuidv4 } from "uuid";

const addContact = (name, number) => ({
  type: actionTypes.ADDCONTACT,
  payload: {
    contact: {
      name: name,
      number: number,
      id: uuidv4(),
    },
  },
});
const deleteContact = (id) => ({
  type: actionTypes.DELETE_CONTACT,
  payload: {
    id,
  },
});

const changeFilter = (filter) => ({
  type: actionTypes.CHANGE_FILTER,
  payload: {
    filter,
  },
});
export default { addContact, deleteContact, changeFilter };
