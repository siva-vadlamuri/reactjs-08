import React from "react";

class ContactUs extends React.Component {
  // state
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };

  handleChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    // setState is a method which is used update the state
    this.setState({ [name]: value });
    console.log(this.state);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    alert("Data submitted");
  };
  render() {
    return (
      <form>
        <input
          onChange={this.handleChange}
          placeholder="first name"
          type="text"
          name="firstName"
        />
        <input
          onChange={this.handleChange}
          placeholder="last name"
          type="text"
          name="lastName"
        />
        <input
          onChange={this.handleChange}
          placeholder="email"
          type="email"
          name="email"
        />
        <input
          onChange={this.handleChange}
          placeholder="phone number"
          type="tel"
          name="phone"
        />
        <button
          type="submit"
          onClick={this.handleSubmit}
          className="btn btn-info"
        >
          Login
        </button>
      </form>
    );
  }
}

export default ContactUs;
