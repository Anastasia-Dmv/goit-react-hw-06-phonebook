import React, { Component } from "react";
//import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
//import contactsActions from "../../redux/contact/contact-actions";

import MainTitle from "../mainTitle/MainTitle";
import ContactForm from "../contactForm/ContactForm";
import FindContactInput from "../findContactInput/FindContactInput";
import ContactsList from "../contactsList/ContactsList";
import { CSSTransition } from "react-transition-group";
import contactActions from "../../redux/contact/contact-actions";
//import { items } from "../../redux/contact/contact-reducer";

class App extends Component {
  state = {
    // contacts: [
    //   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    //   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    //   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    //   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    // ],
    // filter: "",
    showContacts: false,
  };

  componentDidMount() {
    const persistedContacts = localStorage.getItem("contacts");
    if (persistedContacts) {
      this.setState({ contacts: JSON.parse(persistedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }
  // addContact = (name, number) => {
  //   const contact = {
  //     name: name,
  //     number: number,
  //     id: uuidv4(),
  //   };

  //   this.setState((prevState) => {
  //     return {
  //       contacts: [...prevState.contacts, contact],
  //       showContacts: true,
  //     };
  //   });
  // };
  // changeFilter = (filter) => {
  //   this.setState({ filter });
  // };

  // getFilteredContacts = () => {
  //   const { contacts, filter } = this.state;

  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };
  // handleDelete = (id) => {
  //   this.setState((prevState) => ({
  //     contacts: prevState.contacts.filter((contact) => contact.id !== id),
  //   }));
  // };

  render() {
    //const { filter, contacts } = this.state;

    //const filteredContacts = this.getFilteredContacts();
    return (
      <div>
        <CSSTransition
          in={true}
          appear={true}
          classNames="mainTitle-slideIn"
          timeout={5000}
          unmountOnExit
        >
          <MainTitle />
        </CSSTransition>

        <ContactForm
        // addContact={this.addContact}
        // contacts={this.state.contacts}
        />
        {/* {this.props.contacts && (
          <CSSTransition
            in={this.props.contacts.length > 1}
            timeout={250}
            classNames="findContact"
            unmountOnExit
          >
            {this.props.contacts.length > 1 && (*/}
        <FindContactInput
          value={this.props.filter}
          onChangeFilter={this.changeFilter}
        />
        {/* 
            )}
          </CSSTransition>
        )} */}
        {/* <CSSTransition in={showContacts} inmountOnExit> */}
        {/* {this.state.contacts && ( */}
        <ContactsList
        // deleteContact={this.handleDelete} contacts={contacts}
        />
        {/* )} */}
        {/* </CSSTransition> */}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { items, filter } = state.contacts;

  const getfilteredContacts = items.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return {
    filteredContacts: getfilteredContacts,
    filter: state.contacts.filter,
  };
};
const mapDispatchToProps = {
  onChangeFilter: contactActions.changeFilter,
};
//const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default App;
