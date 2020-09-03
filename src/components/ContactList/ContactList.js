import React from "react";
import Contact from "../Contact/Contact";
import contactsActions from "../../redux/actions/contactActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classes from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => (
  <div className={classes.container}>
    <ul>
      {contacts.length > 0 ? (
        contacts.map(({ id, name, number }) => (
          <li className={classes.li}>
            <Contact
              name={name}
              number={number}
              onDeleteContact={() => onDeleteContact(id)}
            />
          </li>
        ))
      ) : (
        <li className={classes.alert}>No have contacts!</li>
      )}
    </ul>
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { items, filter } = state.contacts;
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = items.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase(normalizedFilter))
  );
  return {
    contacts: visibleContacts,
  };
};

const mapDispatchToProps = {
  onDeleteContact: contactsActions.deleteContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
