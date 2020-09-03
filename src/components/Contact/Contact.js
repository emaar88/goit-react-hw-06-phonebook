import React from "react";
import PropTypes from "prop-types";
import classes from "./Contact.module.css";
import Button from "react-bootstrap/Button";

const Contact = ({ name, number, onDeleteContact }) => {
  return (
    <>
      <p>{name}</p> <p>{number}</p>
      <Button onClick={onDeleteContact} variant="danger">
        X
      </Button>
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default Contact;
