// import { ADD_CONTACT, DELETE_CONTACT } from "../types";
import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("ADD_CONTACT", (name, number) => ({
  payload: {
    contact: {
      id: uuidv4(),
      name,
      number,
    },
  },
}));

const deleteContact = createAction("DELETE_CONTACT");
const onRename = createAction("RENAME_CONTACT");

export default {
  addContact,
  deleteContact,
  onRename,
};
