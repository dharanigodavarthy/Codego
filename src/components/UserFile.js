import React, { Component } from 'react';
import { connect } from "react-redux";
import Headers from "./Header";
class UserFile extends Component {
 render() {
   return (
     <div className="App">
     <Headers/>
        <h1>User code</h1>
       {this.props.file?<pre id="file-to-display">{this.props.file}</pre>:""}
     </div>
   );
 }
}

function mapStateToProps(state, ownProps) {
    return {
      file: state.file
    };
  }


  export default connect(
    mapStateToProps
  )(UserFile);
