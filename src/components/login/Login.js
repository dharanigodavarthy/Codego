import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  state = {
    redirect: false
  };
  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/signup" />;
    }
  };
  render() {
    return (
      <div className="login-div">
        <h1>codigo</h1>
        <section className="login-section">
          <div className="SignUp">
            <SignUp />
          </div>
        </section>
        <div>
          <div>{this.renderRedirect()}</div>
          <SignIn />
        </div>
        <div>
          <button className="signup-button" onClick={this.setRedirect}>
            Sign Up
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
