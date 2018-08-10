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
        {/* {this.props.file.length!==0?
         <CodeMirror
         className="codemirror-text"
         value={beautify_js(this.props.file,opts)}
         options={{
           mode: 'javascript',
           theme: 'dracula',
           lineNumbers: true,
           readOnly: true, //for read only
         }}
       />:""} */}
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
