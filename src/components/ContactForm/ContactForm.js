import React, { Component } from "react";
import classes from "./ContactForm.module.css";
import { connect } from "react-redux";
import contactsActions from "../../redux/actions/contactActions";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };
  resetForm = () => {
    this.setState({ name: "", number: "" });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.name !== "" && this.state.number !== "") {
      this.props.onAddTask(this.state.name, this.state.number);
    } else alert("Введено пустое значение!");

    this.resetForm();
  };
  render() {
    const { name, number } = this.state;
    return (
      <div className={classes.container}>
        <form onSubmit={this.handleSubmit} className={classes.form}>
          <label>
            Name
            <br />
            <input
              type="text"
              name="name"
              id={name}
              className={classes.inputText}
              placeholder="Input name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Number
            <br />
            <input
              type="text"
              name="number"
              id={number}
              className={classes.inputText}
              placeholder="Input phone number"
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>
          <button className={classes.button} type="submit">
            Add Contact
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onAddTask: contactsActions.addContact,
};
export default connect(null, mapDispatchToProps)(ContactForm);
