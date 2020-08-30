import React from "react";
import { connect } from "react-redux";
import contactActions from "../../redux/contact/contact-actions";

function FindContactInput({ value, onChange }) {
  return (
    <div className="find-input_frame ">
      <label>
        <input
          className="input"
          type="text"
          value={value}
          onChange={onChange}
        ></input>
      </label>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   const { items, filter } = state.contacts;

//   const filteredContacts = items.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );
//   return {
//     contacts: filteredContacts,
//   };
// };
const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});
// const mapDispatchToProps = (dispatch = {
//   onChangeFilter: (e) => dispatch(contactActions.changeFilter(e.target.value)),
//   // contactActions.changeFilter,
// });

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(contactActions.changeFilter(e.target.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(FindContactInput);
