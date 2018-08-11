import React from "react";
import { Redirect } from "react-router-dom";

class SignUp extends React.Component {
  
  
  state = {
    userName: "",
    password: "",
    redirect: false
  };
  setName(e) {
    console.log(e.target.value);
    this.setState({ userName: e.target.value });
  }

  setPassword(e) {
    console.log(e.target.value);
    this.setState({ password: e.target.value });
  }

  userValidation(e) {
    console.log(this.state);
    console.log("login button is clicked!!");
    fetch("/login", {
      method: "POST",
      body: JSON.stringify({ data: this.state }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(body => {
        console.log(body[0].userName);
        if (body[0].userName) {
            console.log("inside login");
            localStorage.setItem(
            "userData",
            JSON.stringify({ name: body[0].userName })
          );
          this.setState({ redirect: true });
        }
      })
      .then(
        this.setState({
          userName: "",
          password: ""
        })
      );
  }

  render() {
    if (this.state.redirect) {
      console.log("inside redirect");
      return (<Redirect to={"/import"} />);
    }
    return (
      <div className="user-login-div">
        <h2>Login</h2>
        <div className="input-div">
          <div className="styled-input">
            <input
              type="text"
              value={this.state.userName}
              size="20"
              onChange={this.setName.bind(this)}
              required
            />
            <label>Email</label>
            <span />
          </div>
          <div className="styled-input">
            <input
              type="password"
              value={this.state.password}
              size="20"
              onChange={this.setPassword.bind(this)}
              required
            />
            <label>Password</label>
            <span />
          </div>

          <div>
            <span className="login-button-span">
              <button onClick={this.userValidation.bind(this)}>Login</button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
