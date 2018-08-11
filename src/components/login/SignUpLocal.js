import React from "react";
import { Redirect } from "react-router-dom";

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
    // this.setState({id:Date.now()})
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
  renderRedirect = () => {

    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };
  render() {
    return (
      <div className="signuplocal">
        <div className="details">
          <h1>SignUpForm</h1>
          <input
            type="text"
            value={this.state.userName}
            placeholder="Enter your name"
            onChange={this.setName.bind(this)}
            required
          />
          <input
            type="text"
            value={this.state.emailId}
            name=""
            id=""
            placeholder="Enter your email"
            onChange={this.setEmail.bind(this)}
            required
          />
          <input
            type="password"
            value={this.state.password}
            placeholder="Create a password"
            onChange={this.setPassword.bind(this)}
            required
          />
          {this.renderRedirect()}
          <button
            className="signuplocal"
            onClick={this.handleSubmit.bind(this)}
          >
            Sign Up
          </button>
        </div>
      </div>
    );
  }
}

export default SignUpLocal;
