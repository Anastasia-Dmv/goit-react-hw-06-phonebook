import contactsActions from "../contact/contact-actions";
import axios from "axios";

const addContact = (name, number) => (dispatch) => {
  dispatch(contactsActions.addContactRequest());
  //fetch("http://localhost:2000/contacts");
  axios
    .post("http://localhost:2000/contacts", { name, number })
    .then((response) => {
      console.log(response);
      dispatch(contactsActions.addContactSuccess(response.data));
    })
    .catch((error) => dispatch(contactsActions.addContactError(error)));
};

const fetchContacts = () => (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());
  axios
    .get("http://localhost:2000/contacts")
    .then(({ data }) => dispatch(contactsActions.fetchContactsSuccess(data)))
    .catch((error) => dispatch(contactsActions.fetchContactsError(error)));
};

const removeContact = (id) => (dispatch) => {
  dispatch(contactsActions.removeContactRequest());
  axios
    .delete(`http://localhost:2000/contacts/${id}`)
    .then(() => dispatch(contactsActions.removeContactSuccess(id)))
    .catch((error) => dispatch(contactsActions.removeContactError(error)));
};
export default {
  addContact,
  fetchContacts,
  removeContact,
};
