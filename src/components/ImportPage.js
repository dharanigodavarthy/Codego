import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as fileActions from "../actions/fileActions";
import { Redirect } from "react-router-dom";

import { Link } from "react-router-dom";
import ToolBar from "./ToolBar/ToolBar";
import SideBar from "./SideBar/SideBar";
import BackDrop from "./backdrop/BackDrop";
class ImportPage extends Component {
  static fileReader = "";
  constructor(props) {
    super(props);
    this.state = {
      uploadedFile: "",
      sideBarOpen: false
    };
  }
  handleFileRead = e => {
    const content = ImportPage.fileReader.result;
    this.props.actions.storeJSFile(content);
    this.setState({ uploadedFile: content });
  };

  handleFileChoosen = file => {
    let typeOfFile=file.name.toLowerCase();
    console.log(typeOfFile,typeOfFile.endsWith(".js")||typeOfFile.endsWith(".html")||typeOfFile.endsWith(".css"));
    ImportPage.fileReader = new FileReader();
    ImportPage.fileReader.onloadend = this.handleFileRead;
    ImportPage.fileReader.readAsText(file);
  };
  toggleSideBar = () => {
    this.setState(prevState => {
      return { sideBarOpen: !prevState.sideBarOpen };
    });
  };
  backDropClickHandler = () => {
    this.setState({ sideBarOpen: false });
  };
  render() {
    let backdrop;
    if (this.state.sideBarOpen) {
      backdrop = <BackDrop click={this.backDropClickHandler} />;
    }
    if (!localStorage.getItem("userData")) return <Redirect to={"/"} />;
    return (
      <div className="container">
        {/* <div style={{height:"100%"}}/> */}
        <ToolBar sideBarClickHandler={this.toggleSideBar} />
        <SideBar show={this.state.sideBarOpen} />
        {backdrop}
        <h1> Codigo </h1>
        <h2> Upload a file in Codego( Linting app )</h2>
        <input
          type="file"
          id="file"
          className="input-file"
          accept=".js"
          onChange={e => this.handleFileChoosen(e.target.files[0])}
        />
        <p id="p_wrap" />
        {this.state.uploadedFile ? (
          ""
        ) : (
          <div id="banner">
            <h2>Codigo, a app to prettify/Beautify code</h2>
            <h3>see linting error from anywhere</h3>
          </div>
        )}
        {this.state.uploadedFile ? (
          <Link to="/prettify" className="prettify-link">
            Prettify Code
          </Link>
        ) : (
          ""
        )}
        {/* {this.state.uploadedFile?<pre id="file-to-display">{this.state.uploadedFile}</pre>:""} */}
      </div>
    );
  }
}
ImportPage.protoTypes = {
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
