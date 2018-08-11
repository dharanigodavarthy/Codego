import React from "react";
import { Redirect } from "react-router-dom";

class LogOut extends React.Component {
    constructor(props){
		super(props);
		this.state = {
			name: '',
			redirect: false
		};
	}
  handleLogOut = () => {
    localStorage.clear();
    this.setState({redirect:true});
  };

  render() {
      if(this.state.redirect)
      return <Redirect to ={"/"}/>
    return (
      <div>
        <button className="nav_bar-logout" onClick={this.handleLogOut}>
          LogOut
        </button>
      </div>
    );
  }
}

export default LogOut;