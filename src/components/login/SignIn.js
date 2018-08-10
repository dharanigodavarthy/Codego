import React from 'react';
// import google from '../images/google-plus.svg';
// import facebook from '../images/facebook.svg';
// import '../css/login.css';
import GoogleLogin from 'react-google-login';
import {Redirect} from 'react-router-dom';
// import FacebookLogin from 'react-facebook-login';

class SignIn extends React.Component{
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
	     if (type === 'facebook' && res.id) {
	     postData = {
	          name: res.name,
	          provider: type,
	          provider_id: res.id,
	          token: res.accessToken,
	          provider_pic: res.picture.data.url
	     };
	    }
	    if (type === 'google' && res.w3.U3) {
		    postData = {
		      name: res.w3.ig,
		      provider: type,
		      email: res.w3.U3,
		      provider_id: res.El,
		      token: res.Zi.access_token,
		      provider_pic: res.w3.Paa
		    }; 
		}
	    if(postData){
		    localStorage.setItem("userData", JSON.stringify(postData));
		    this.setState({redirect: true});
	    }
	}
    render(){
    	//  onlyState={this.state}
    	if (this.state.redirect || localStorage.getItem('userData')) {
		    return (<Redirect to={'/import'}/>)
		}
    	const responseGoogle = (response) => {
		    console.log("google console");
		    console.log(response);
		    this.signup(response, 'google');
		}
		const responseFacebook = (response) => {
		    console.log("facebook console");
		    console.log(response);
		    this.signup(response, 'facebook');
		}
        return( 
            <div className="SignIn">
				<GoogleLogin
			    clientId={"2675592028-g4q79j6no4lhbsde526atf51pg5hurtv.apps.googleusercontent.com"}
			    buttonText="Google"
			    onSuccess={responseGoogle}
			    onFailure={responseGoogle}/>
				<br/><br/>                
               
            </div>
        )
    }
}

export default SignIn;
