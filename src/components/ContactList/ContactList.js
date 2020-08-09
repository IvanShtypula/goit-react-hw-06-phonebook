import React, { Component } from "react";
import { connect } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styleApp from "../../App.module.css";
import titleStyle from "../../reverseTransition.module.css";
import ListItem from "../ListItem/ListItem";

class ContactList extends Component {
  render() {
    return (
      <TransitionGroup component="ul" className={styleApp.contactsList}>
        {this.props.items.length > 0 &&
          this.props.items.map(({id}) => (
            <CSSTransition key={id} classNames={titleStyle} timeout={800}>
              <ListItem id={id}/>          
            </CSSTransition>
          ))}
      </TransitionGroup>
    );
  }
}

const mapStateToProps = (state) => {
  const { items, filter } = state.contacts;
  const lcFilter = filter.toLowerCase();
  return {
    items: items.filter((item) => item.name.toLowerCase().includes(lcFilter)),
  };
};

export default connect(mapStateToProps)(ContactList);
