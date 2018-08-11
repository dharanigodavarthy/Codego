import React from "react";
import GoogleLogin from "react-google-login";
import { Redirect } from "react-router-dom";
// import FacebookLogin from 'react-facebook-login';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginError: false,
      redirect: false
    };
    this.signup = this.signup.bind(this);
  }
  signup(res, type) {
    let postData;
    
    if (type === "google" && res.w3.U3) {
      postData = {
        userName: res.w3.ig,
        provider: type,
        email: res.w3.U3,
        provider_id: res.El,
        token: res.Zi.access_token,
        provider_pic: res.w3.Paa
      };
    }
    if (postData) {
      localStorage.setItem("userData", JSON.stringify(postData));
      this.setState({ redirect: true });
    }
  }
  render() {
    if (this.state.redirect || localStorage.getItem("userData")) {
      return <Redirect to={"/import"} />;
    }
    const responseGoogle = response => {
      console.log(response)
      this.signup(response, "google");
    };
    const responseFacebook = response => {
      this.signup(response, "facebook");
    };
    return (
      <div className="signin-div">
        <GoogleLogin
          clientId={
            "2675592028-g4q79j6no4lhbsde526atf51pg5hurtv.apps.googleusercontent.com"
          }
          // Clientsecret= {"RNTcsK-nCke1sHF4KJSVxZty"}
          // callback={"http://ec2-18-191-243-136.us-east-2.compute.amazonaws.com:8080/auth/google/callback"}
          // callback={"http://localhost:8080/auth/google/callback"}
          buttonText="Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
        <br />
        <br />
      </div>
    );
  }
}

export default SignIn;
