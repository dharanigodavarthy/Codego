import React, { Component } from 'react';
// import Beautify from 'js-beautify';
import Headers from "./Header";
import { connect } from "react-redux";
// import CodeMirror from '../codemirror/lib/codemirror';
{/* <script src="../../public/codemirror/lib/codemirror.js"></script> */}
// import { connect } from "../../public/script";
class LintPage extends Component {
  componentDidMount(){
    console.log("in component");
    // <script src="../../public/script"/>
  //   CodeMirror.fromTextArea(document.getElementById("editor-js"),{
  //     mode: "javascript",
  //     lineNumbers: true,
  //     lint: true,
  //     gutters: ["CodeMirror-linenumbers","CodeMirror-foldgutter","CodeMirror-lint-markers"]
      
  // });
  }
 render() {
  console.log("in linter")
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
