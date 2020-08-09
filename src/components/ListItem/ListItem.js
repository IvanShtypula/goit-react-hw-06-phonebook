import React from "react";
import { connect } from "react-redux";
import { removeContact } from "../../redux/actions/formAction";
import styleList from "./ListItem.module.css";

const ListItem = ({ onRemoveContact, name, number }) => {
  return (
    <li className={styleList["list_item"]}>
      <p className={styleList["list_item-name"]}>{name}: </p>
      <p className={styleList["list_item-number"]}> {number}</p>
      <button
        onClick={onRemoveContact}
        className={styleList["list_item-button"]}
      >
        &times;
      </button>
    </li>
  );
};

const mapStateToProps = (state, ownId) => {
  const item = state.contacts.items.find((item) => item.id === ownId.id);
  return { ...item };
};

const mapDispatchToProps = (dispatch, ownId) => ({
  onRemoveContact: () => dispatch(removeContact(ownId.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
