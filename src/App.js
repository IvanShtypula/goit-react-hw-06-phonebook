import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import ContactForm from "./components/ContactForm/ContactForm.js";
import Filter from "./components/Filter/Filter.js";
import ContactList from "./components/ContactList/ContactList.js";
import { contactsFilter } from "./redux/actions/filterAction";
import styleApp from "./App.module.css";
import titleStyle from "./reverseTransition.module.css";

class App extends Component {
  state = {
    showTitle: false,
  };

  componentDidMount() {
    this.setState({
      showTitle: true,
    });
  }

  render() {
    const { showTitle } = this.state;  
    return (
      <div className={styleApp.container}>
        <CSSTransition classNames={titleStyle} in={showTitle} timeout={800}>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
