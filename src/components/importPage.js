import React, { Component } from "react";
import  Prettifier from "./prettifyPage";
// import React.FileReader from "react-file-reader";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as fileActions from "../actions/fileActions";
// import Headers from "./Header";
import { Link} from "react-router-dom";
class ImportPage extends Component {
  static fileReader = "";
  constructor(props) {
    super(props);
    this.state = {
      uploadedFile: ""
    };

  }

  handleFileRead = e => {
    const content = ImportPage.fileReader.result;
    this.props.actions.storeJSFile(content);
    this.setState({uploadedFile : content});
  };

  handleFileChoosen = file => {
    ImportPage.fileReader = new FileReader();
    ImportPage.fileReader.onloadend = this.handleFileRead;
    ImportPage.fileReader.readAsText(file);
  };
  render() {
    return (
      <div className="container">
        {/* <Headers /> */}
        <h1> Codego </h1>
        <h2> Upload a file in Codego( Linting app )</h2>
        <input
          type="file"
          id="file"
          className="input-file"
          accept=".js"
          onChange={e => this.handleFileChoosen(e.target.files[0])}
        />
        <p id="p_wrap"/>
        {/* <Link to="/prettify">Prettify Code</Link>:""} */}
        {this.state.uploadedFile?"":<div id="banner"><h2>Codego, a app to prettify/Beautify code</h2><h3>see linting error from anywhere</h3></div>}
        {this.state.uploadedFile?<Link to="/prettify">Prettify Code</Link>:""}
        {/* {this.state.uploadedFile?"UpLoaded file Data is":""} */}
        {/* {this.state.uploadedFile?<pre id="file-to-display">{this.state.uploadedFile}</pre>:""} */}
      </div>
    );
  }
}
  ImportPage.protoTypes = {
    // blog: PropTypes.array.isRequired,
    storeJSFile: PropTypes.func.isRequired
  };
  function mapStateToProps(state, ownProps) {
    return {
      file: state.file
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(fileActions, dispatch)
    };
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ImportPage);
