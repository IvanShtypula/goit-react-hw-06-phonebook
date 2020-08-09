import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import ContactForm from "./components/ContactForm/ContactForm.js";
import Filter from "./components/Filter/Filter.js";
import ContactList from "./components/ContactList/ContactList.js";
import { contactsFilter } from "./redux/actions/filterAction";
import { itemsStorage } from "./redux/actions/storageAction";
import styleApp from "./App.module.css";
import titleStyle from "./reverseTransition.module.css";

class App extends Component {
  state = {
    showTitle: false,
  };

  componentDidMount() {
    const lastContacts = localStorage.getItem("items");
    console.log(lastContacts);
    if (lastContacts) {
      this.props.itemsStorage(JSON.parse(lastContacts));
    }
    this.setState({
      showTitle: true,
    });
  }

  componentDidUpdate(prevState) {
    // console.log(prevState)
    if (prevState.items !== this.props.items) {
      localStorage.setItem("items", JSON.stringify(this.props.items));
    }
  }

  render() {
    const { showTitle } = this.state;
    return (
      <div className={styleApp.container}>
        <CSSTransition classNames={titleStyle} in={showTitle} timeout={250}>
          <h1 className={styleApp.title}>Phonebook</h1>
        </CSSTransition>
        <ContactForm contacts={this.props.items} />

        {this.props.items.length > 1 && <Filter />}

        <h2>Contacts</h2>

        <ContactList />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.contacts.items,
  };
};

const mapDispatchToProps = {
  contactsFilter,
  itemsStorage,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
