import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactsActions from "../../redux/actions/contactActions";
import classes from "./Filter.module.css";

const Filter = ({ value, onRename }) => {
  return (
    <>
      <div className={classes.container}>
        <label>Find contacts by name</label>
        <input
          className={classes.formFilter}
          type="text"
          value={value}
          onChange={(e) => onRename(e.target.value)}
        />
      </div>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onRename: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = {
  onRename: contactsActions.onRename,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
