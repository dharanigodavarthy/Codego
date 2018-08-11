import React, { Component } from "react";
import Beautify from "js-beautify";
import Headers from "./Header";
import { render } from "react-dom";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import { UnControlled as CodeMirror } from "react-codemirror2";

import { connect } from "react-redux";

import "codemirror/lib/codemirror.css";
require("codemirror/theme/dracula.css");
require("codemirror/lib/codemirror.js");
require("codemirror/mode/javascript/javascript.js");
require("codemirror/mode/css/css.js");
require("codemirror/addon/edit/closetag.js");
require("codemirror/addon/edit/matchbrackets.js");
require("codemirror/addon/fold/foldgutter.js");
require("codemirror/mode/htmlmixed/htmlmixed.js");
//  beautify_html = Beautify.html_beautify,
//  beautify_css = Beautify.css_beautify;

const beautify_js = Beautify.js_beautify,
  beautify_html = Beautify.html_beautify,
  beautify_css = Beautify.css_beautify;
const opts = {};
opts.space_in_empty_paren = true;
opts.indent_size = "4";
opts.indent_char = " ";
opts.max_preserve_newlines = "5";
opts.preserve_newlines = true;
opts.brace_preserve_inline = true;
opts.keep_array_indentation = true;
opts.break_chained_methods = true;
opts.indent_scripts = "normal";
opts.brace_style = "collapse"; //;preserve-inline
opts.space_before_conditional = true;
opts.unescape_strings = true;
opts.jslint_happy = true;
opts.end_with_newline = true;
opts.wrap_line_length = "0";
opts.indent_inner_html = true;
opts.comma_first = true;
opts.e4x = true;
// const beautify_js = Beautify.js_beautify
// const opts = {};
// opts.indent_size = 2;
// opts.space_in_empty_paren = true;

class PrettifyPage extends Component {
  downloadFile = () => {
    const fileName = this.props.file.fileName;
    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," +
        encodeURIComponent(beautify_js(this.props.file.data, opts))
    );
    if (fileName.endsWith(".html"))
      element.setAttribute("download", "prettier.html");
    else if (fileName.endsWith(".css"))
      element.setAttribute("download", "prettier.css");
    else if (fileName.endsWith(".js"))
      element.setAttribute("download", "prettier.js");
    else element.setAttribute("download", "prettier.text");
    element.click();
  };
  copyToClipBoard = () => {
    var textField = document.createElement("textarea");
    textField.innerText = this.props.file.data;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
    NotificationManager.info("data copied to clip board");
    // alert("data copied to clip board")
  };
  render() {
    let options = {
      lineNumbers: true
    };
    return (
      <div className="Prettified-div">
        <Headers />
        <div>
          {" "}
          {this.props.file.fileName.endsWith(".html") ? (
            <CodeMirror
              className="codemirror-text"
              value={beautify_html(this.props.file.data, opts)}
              options={{
                mode: "text/html",
                theme: "dracula",
                lineNumbers: true,
                readOnly: true, //for read only
                lineWrapping: true
              }}
            />
          ) : (
            ""
          )}
          {this.props.file.fileName.endsWith(".css") ? (
            <CodeMirror
              className="codemirror-text"
              value={beautify_css(this.props.file.data, opts)}
              options={{
                mode: "css",
                theme: "dracula",
                lineNumbers: true,
                readOnly: true, //for read only
                lineWrapping: true
              }}
            />
          ) : (
            ""
          )}
          {this.props.file.fileName.endsWith(".js") ? (
            <CodeMirror
              className="codemirror-text"
              value={beautify_js(this.props.file.data, opts)}
              options={{
                mode: "javascript",
                theme: "dracula",
                lineNumbers: true,
                readOnly: true, //for read only
                lineWrapping: true
              }}
            />
          ) : (
            ""
          )}
        </div>
        <div className="prettified-button">
          <button onClick={this.downloadFile}>Download file</button>

          <button onClick={this.copyToClipBoard}>copy file</button>
        </div>
        <NotificationContainer />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    file: state.file
  };
}

export default connect(mapStateToProps)(PrettifyPage);
