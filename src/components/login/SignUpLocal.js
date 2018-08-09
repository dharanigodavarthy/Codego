import React  from 'react';
// import background  from '../images/gru2.jpg';
import {Redirect} from 'react-router-dom';


class SignUpLocal extends React.Component{
    state={
        id:Date.now(),
        name:'',
        emailId:'',
        password:'',
        userName:'',
        progress:'1',
        redirect:false
    }
    setName(e){
        console.log(e.target.value);
        this.setState({name:e.target.value});
    }

    setPassword(e){
        console.log(e.target.value);
        this.setState({password:e.target.value})
    }
    setUserName(e){
        console.log(e.target.value);
        this.setState({userName:e.target.value})
    }
    setEmail(e){
        console.log(e.target.value);
        this.setState({emailId:e.target.value})
    }
    handleSubmit(e){
        // this.setState({id:Date.now()})
        console.log(this.state);
        console.log("login button is clicked!!");   
        fetch("/api/users", {
            method: "POST",
            body: JSON.stringify({ data: this.state }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        // .then(response => response.json())
        .then(body => console.log(body))
        .then(this.setState({
                            id:Date.now(),
                            name:'',
                            emailId:'',
                            password:'',
                            userName:'',
                            progress:'1',
                            redirect:true
        }))
    }
      renderRedirect = () => {
          console.log("render");
          
        if (this.state.redirect) {
            console.log("in");
            
          return <Redirect to='/' />
        }
      }
    render(){
        return(
        <div className="signuplocal">
        <div className="details">
        <h1>SignUpForm</h1>
        <input type="text" value={this.state.name} placeholder="Enter your name" onChange={this.setName.bind(this)} required/>
        <input type="text" value={this.state.emailId} name="" id="" placeholder="Enter your email" onChange={this.setEmail.bind(this)} required/>
        <input type="text" value={this.state.userName} placeholder="Create a username" onChange={this.setUserName.bind(this)} required/>
        <input type="password" value={this.state.password} placeholder="Create a password" onChange={this.setPassword.bind(this)} required/>
        {this.renderRedirect()}
        <button className="signuplocal" onClick={this.handleSubmit.bind(this)}>Sign Up</button>
        </div>
        </div>
        )
    }
}

export default SignUpLocal;

