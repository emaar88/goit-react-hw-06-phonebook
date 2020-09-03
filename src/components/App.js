import classes from "./App.module.css";

import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

export default function App() {
  return (
    <>
      <h1 className={classes.titleName}>Phonebook</h1>
      <ContactForm />
      <h2 className={classes.minTitleName}>Contacts</h2>
      <Filter />
      <h2 className={classes.minTitleName}>Contacts List</h2>
      <ContactList />
    </>
  );
}
