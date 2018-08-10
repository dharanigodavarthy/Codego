import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
// import SignUpLocal from "./SignUpLocal";
// import '../css/login.css';
// import background  from '../images/background.png';
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
        <section className="login-section">
          <div className="SignIn">
            <div>{this.renderRedirect()}</div>
            <SignIn />
          </div>
          <div className="SignUp">
            <SignUp />
          </div>
        </section>
        <button className="signupbutton" onClick={this.setRedirect}>
          Sign Up
        </button>
      </div>
    );
  }
}

export default Login;
