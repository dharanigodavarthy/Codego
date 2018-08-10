import React, { Component } from 'react';
// import Beautify from 'js-beautify';
import Headers from "./Header";
import { connect } from "react-redux";
// import CodeMirror from '../codemirror/lib/codemirror';
// import { connect } from "../../public/script";
class LintPage extends Component {
 
 render() {
   return (  
     <div className="App">
     <Headers/>
        <textarea id="editor-js">var id=88</textarea>
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
  )(LintPage);
