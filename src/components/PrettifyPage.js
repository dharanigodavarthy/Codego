import React, { Component } from 'react';
import Beautify from 'js-beautify';
import Headers from "./Header";
import { connect } from "react-redux";
//  beautify_html = Beautify.html_beautify,
//  beautify_css = Beautify.css_beautify;
const beautify_js = Beautify.js_beautify
const opts = {};
opts.indent_size = 2;
opts.space_in_empty_paren = true;


class PrettifyPage extends Component {
 render() {
   return (
       
     <div className="App">
     <Headers/>
        <h1>Prettify code</h1>
       {this.props.file?
       <pre id="file-to-display">{beautify_js(this.props.file)}</pre>:""}
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
  )(PrettifyPage);
