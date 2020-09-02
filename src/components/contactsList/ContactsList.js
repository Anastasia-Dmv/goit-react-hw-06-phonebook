import React from "react";
import ContactsListItems from "../contactListItems/ContactsListItems";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
//import contactActions from "../../redux/contact/contact-actions";

const ContactsList = ({
  items,
  // deleteContact
}) => {
  // render() {
  //   const { contacts, deleteContact } = this.props;
  return (
    <TransitionGroup component="ul" className="contacts-list">
      {items.map(({ id }) => (
        <CSSTransition
          key={id}
          classNames="taskList-fade"
          timeout={250}
          unmountOnExit
        >
          <ContactsListItems
            // contact={contact}
            // key={id}
            id={id}
            //deleteContact={() => deleteContact(id)}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
  //  }
};

const mapStateToProps = (state) => {
  const { items, filter } = state.contacts;
  const normalizedFilter = filter.toLowerCase();

  const getFilteredContact = items.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  console.log("getFilteredContact", getFilteredContact);
  return {
    items: getFilteredContact,
  };
};
// const getFilteredContacts = (state) => {
//   const { items, filter } = state.contacts;

//   const getfilteredContacts = items.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );
//   return {
//     contacts: getfilteredContacts,
//   };
// };
// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   contacts: getFilteredContacts(items, filter),
// });
// const mapDispatchToProps = {
//   deleteContact: contactActions.deleteContact,
// };
// export default connect(
//   mapStateToProps
//   //  mapDispatchToProps
// )(ContactsList);
// //export default ContactsList;
export default connect(mapStateToProps)(ContactsList);
