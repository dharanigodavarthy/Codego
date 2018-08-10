
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
  static userFileName=""
  constructor(props) {
    super(props);
    this.state = {
      uploadedFile: "",
      sideBarOpen: false,
      errorStatus: "",
      fileName:""
    };
  }
  componentDidMount(){
    localStorage.clear()
  }
  handleFileRead = e => {
    const content = ImportPage.fileReader.result;
    this.props.actions.storeJSFile(content,ImportPage.userFileName);
    this.setState({
      uploadedFile: content,
      errorStatus: ""
    });
  };

  handleFileChoosen = file => {
    let typeOfFile = file.name.toLowerCase();
    ImportPage.userFileName=typeOfFile;
    if (typeOfFile.endsWith(".js")) typeOfFile = "js";
    else if (typeOfFile.endsWith(".html")) typeOfFile = "html";
    else if (typeOfFile.endsWith(".css")) typeOfFile = "css";
    if (typeOfFile !== file.name.toLowerCase()) {
      ImportPage.fileReader = new FileReader();
      ImportPage.fileReader.onloadend = this.handleFileRead;
      ImportPage.fileReader.readAsText(file,file.name.toLowerCase());
    } else {
      this.setState({
        errorStatus: "Oop's, codigo wont support files ends with "+typeOfFile.substr(typeOfFile.lastIndexOf("."))
      });
    }
  };
  toggleSideBar = () => {
    this.setState(prevState => {
      return {
        sideBarOpen: !prevState.sideBarOpen
      };
    });
  };
  backDropClickHandler = () => {
    this.setState({
      sideBarOpen: false
    });
  };
  render() {
    let backdrop;
    if (this.state.sideBarOpen) {
      backdrop = <BackDrop click={this.backDropClickHandler} />;
    }
    // if (!localStorage.getItem("userData")) return <Redirect to={"/"} />;
    return (
      <div className="container">
        {/* <div style={{height:"100%"}}/> */}
        <ToolBar sideBarClickHandler={this.toggleSideBar} />
        <SideBar show={this.state.sideBarOpen} />
        {backdrop}
        <h1>use codigo to prettify your code</h1>
        <h2>upload file here</h2>

        <input
          type="file"
          id="file"
          className="input-file"
          accept=".js"
          onChange={e => this.handleFileChoosen(e.target.files[0])}
        />{" "}
        <p id="p_wrap" />{" "}
        {this.state.uploadedFile ? (
          ""
        ) : (
          <div id="banner">
            <h2> Codigo, a app to prettify / Beautify code </h2>{" "}
            <h3> see linting error from anywhere </h3>{" "}
          </div>
        )}{" "}
        {this.state.uploadedFile ? (
          <Link to="/prettify" className="prettify-link">
            Prettify Code{" "}
          </Link>
        ) : (
          ""
        )}
        {this.state.errorStatus?this.state.errorStatus:""}
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



