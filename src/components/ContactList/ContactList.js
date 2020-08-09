import React from "react";
import { connect } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styleApp from "../../App.module.css";
import titleStyle from "../../reverseTransition.module.css";
import ListItem from "../ListItem/ListItem";

const ContactList = ({items}) => { 
    return (
      <TransitionGroup component="ul" className={styleApp.contactsList}>
        {items.length > 0 &&
          items.map(({id}) => (
            <CSSTransition key={id} classNames={titleStyle} timeout={250}>
              <ListItem id={id}/>          
            </CSSTransition>
          ))}
      </TransitionGroup>
    );
}

const mapStateToProps = (state) => {
  const { items, filter } = state.contacts;
  const lcFilter = filter.toLowerCase();
  return {
    items: items.filter((item) => item.name.toLowerCase().includes(lcFilter)),
  };
};

export default connect(mapStateToProps)(ContactList);
