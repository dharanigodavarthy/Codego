import React from "react";
import { Redirect } from "react-router-dom";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";

class SignUpLocal extends React.Component {
  state = {
    id: Date.now(),
    userName: "",
    emailId: "",
    password: "",
    redirect: false
  };
  setName(e) {
    this.setState({ userName: e.target.value });
  }

  setPassword(e) {
    this.setState({ password: e.target.value });
  }
  setEmail(e) {
    this.setState({ emailId: e.target.value });
  }
  handleSubmit(e) {
    if (
      this.state.userName === "" ||
      this.state.password === "" ||
      this.state.emailId === ""
    ) {
      NotificationManager.info("Please provide all the informations");
    } else {
      fetch("/signup", {
        method: "POST",
        body: JSON.stringify({ data: this.state }),
        headers: {
          "Content-Type": "application/json"
        }
      })
        // .then(response => response.json())
        .then(body => console.log(body))
        .then(
          this.setState({
            id: Date.now(),
            userName: "",
            emailId: "",
            password: "",
            redirect: true
          })
        );
    }
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };
  render() {
    return (
      <div className="signuplocal-div">
        <NotificationContainer />
        <div className="details-div">
          <h1>SignUp</h1>
          <div className="input-div">
            <div className="styled-input">
              <input
                type="text"
                value={this.state.userName}
                onChange={this.setName.bind(this)}
              />
              <label>Name</label>
              <span />
            </div>
            <div className="styled-input">
              <input
                type="text"
                value={this.state.emailId}
                name=""
                id=""
                onChange={this.setEmail.bind(this)}
                required
              />
              <label>Email Id</label>
              <span />
            </div>
            <div className="styled-input">
              <input
                type="password"
                value={this.state.password}
                onChange={this.setPassword.bind(this)}
                required
              />
              <label>Password</label>
              <span />
            </div>
            {this.renderRedirect()}
            <div>
              <span className="button-span">
                <button
                  className="signuplocal"
                  onClick={this.handleSubmit.bind(this)}
                >
                  Sign Up
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpLocal;
