import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsActions from "../actions/contactActions";

const addContact = (state, action) => [...state, action.payload.contact];
const deleteContactForList = (state, action) =>
  state.filter((contact) => contact.id !== action.payload);

const items = createReducer([], {
  [contactsActions.addContact]: addContact,
  [contactsActions.deleteContact]: deleteContactForList,
});
const filter = createReducer("", {
  [contactsActions.onRename]: (state, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
