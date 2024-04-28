/*
need to bring class components from Your Password file to this file 

need to create add password functionality for form
*/

import { Component } from "react";

import PasswordInputbox from "../PasswordInputbox";
import YourPassword from "../YourPassword";

import "./index.css";

class PasswordManager extends Component {
  state = {
    Website: "",
    userName: "",
    password: "",
    passwordList: [
      { id: 0, username: "user", password: "pwd", website: "google.com" },
    ],
    originalPasswordList: [],
  };

  componentDidMount() {
    // Store the original list when the component mounts
    this.setState({
      ...this.state,
      originalPasswordList: this.state.passwordList,
    });
  }

  submitForm = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="main-container">
        <form onSubmit={this.submitForm} className="">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png "
            alt="app logo"
            className="password-manager-image"
          />
          <PasswordInputbox />
          <YourPassword passwordList={this.passwordList} />
        </form>
      </div>
    );
  }
}

export default PasswordManager;
