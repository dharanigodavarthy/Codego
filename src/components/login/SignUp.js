import React from 'react';
// import '../css/login.css';
import {Redirect} from 'react-router-dom';

class SignUp extends React.Component{
    state={
        userName:'',
        password:'',
        redirect:false
    }
    setName(e){
        console.log(e.target.value);
        this.setState({userName:e.target.value});
    }

    setPassword(e){
        console.log(e.target.value);
        this.setState({password:e.target.value})
    }

    userValidation(e){
        console.log(this.state);
        console.log("login button is clicked!!");   
        fetch("/auth/users", {
            method: "POST",
            body: JSON.stringify({ data: this.state }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(body => {
            console.log(body[0].userName);
            console.log(this.state.userName);
            if (body[0].userName) {
                this.setState({redirect:true});
                console.log(this.state);
                localStorage.setItem("userData", JSON.stringify({name:body[0].userName}));      
            }
        })
        .then(
            this.setState({
                userName:'',
                password:''
            })
        )
    }

    render(){
        if (this.state.redirect) {
            console.log("inside redirect");
            
            return (<Redirect onlyState={this.state} to={'/levels'}/>)
        }
        return( 
            <div>
                <p>Login</p>
                <input type="text" placeholder="Email" value={this.state.userName} onChange={this.setName.bind(this)}/>
                <br/>
                <input type="password" placeholder="Password" value={this.state.password} onChange={this.setPassword.bind(this)}/>
                <p>Forgot Password?<span><button onClick={this.userValidation.bind(this)}>Login</button></span></p>
            </div>
        )
    }
}

export default SignUp;
