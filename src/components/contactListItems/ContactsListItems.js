import React from "react";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import contactActions from "../../redux/contact/contact-actions";
const ContactsListItems = ({ id, name, number, deleteContact }) => {
  // render() {
  //   const {
  //     contact: { name, id, number },
  //     deleteContact,
  //   } = this.props;
  return (
    <li className="contact">
      <span>{name}</span>
      <span>{number}</span>
      <button
        className="deleteBtn"
        type="button"
        // id={id}
        onClick={() => deleteContact(id)}
      >
        x
      </button>
    </li>
  );
};
// }
const mapStateToProps = (state, ownProps) => {
  const item = state.contacts.items.find((item) => item.id === ownProps.id);
  console.log("item", item);
  console.log("item", item);
  return { ...item };
};
const mapDispatchToPRops = (dispatch, ownProps) => ({
  deleteContact: () => dispatch(contactActions.deleteContact(ownProps.id)),
});
export default connect(mapStateToProps, mapDispatchToPRops)(ContactsListItems);
