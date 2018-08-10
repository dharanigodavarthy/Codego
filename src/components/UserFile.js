import React, { Component } from 'react';
import { connect } from "react-redux";
import Headers from "./Header";
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
require('codemirror/theme/eclipse.css');
require('codemirror/lib/codemirror.js');
require('codemirror/mode/javascript/javascript.js');
require('codemirror/mode/css/css.js');
require('codemirror/addon/edit/closetag.js');
require('codemirror/addon/edit/matchbrackets.js');
require('codemirror/addon/fold/foldgutter.js');
require('codemirror/mode/htmlmixed/htmlmixed.js');
class UserFile extends Component {
 render() {
   return (
     <div className="App">
     <Headers/>
        <h1>User code</h1>
       {/* {this.props.file?<pre id="file-to-display">{this.props.file}</pre>:""} */}
       {this.props.file.length!==0?
         <CodeMirror
         className="codemirror-text"
         value={this.props.file}
         options={{
           mode: 'javascript',
           theme: 'eclipse',
           lineNumbers: true,
           readOnly: true, //for read only
         }}
       />:""}
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
