import React from "react";

class ContactUs extends React.Component {
  // state
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    firstNameErr: "",
    lastNameErr: "",
    emailErr: "",
    phoneEr: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    // setState is a method which is used update the state
    this.setState({ [name]: value });
  };
  validateTheForm = () => {
    let firstNameErr,
      lastNameErr,
      emailErr,
      phoneErr = "";
    if (this.state.firstName.length < 4) {
      firstNameErr = "First name should be more than 4 character";
    }
    if (this.state.lastName.length < 1) {
      lastNameErr = "last name is required";
    }
    if (!this.state.email.includes("@")) {
      emailErr = "Please enter a valid email";
    }
    if (this.state.phone.length < 10) {
      phoneErr = "Please enter a valid phone number";
    }
    // 0,false,null,undefined,''

    if (firstNameErr || lastNameErr || emailErr || phoneErr) {
      this.setState({ firstNameErr, lastNameErr, emailErr, phoneErr });
      return false;
    } else {
      this.setState({ firstNameErr, lastNameErr, emailErr, phoneErr });
      return true;
    }
    // firstName >4
    // lastName>0
    // email '@'
    // phone 10 characters
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = this.validateTheForm();
    if (isFormValid) {
      console.log(this.state);
    } else {
      console.log("Some Error occured");
    }
  };
  render() {
    return (
      <form className="text-center mt-3">
        <div>
          <input
            onChange={this.handleChange}
            placeholder="first name"
            type="text"
            name="firstName"
            value={this.state.firstName}
          />
          <p className="text-danger pt-1">{this.state.firstNameErr}</p>
        </div>
        <div className="mt-3">
          <input
            onChange={this.handleChange}
            placeholder="last name"
            type="text"
            name="lastName"
            value={this.state.lastName}
          />
          <p className="text-danger pt-1">{this.state.lastNameErr}</p>
        </div>

        <div className="mt-3">
          <input
            onChange={this.handleChange}
            placeholder="email"
            type="email"
            name="email"
            value={this.state.email}
          />
          <p className="text-danger pt-1">{this.state.emailErr}</p>
        </div>
        <div className="mt-3">
          <input
            onChange={this.handleChange}
            placeholder="phone number"
            type="tel"
            name="phone"
            value={this.state.phone}
          />
          <p className="text-danger pt-1">{this.state.phoneErr}</p>
        </div>

        <button
          type="submit"
          onClick={this.handleSubmit}
          className="btn btn-info mt-3"
        >
          Login
        </button>
      </form>
    );
  }
}

export default ContactUs;
