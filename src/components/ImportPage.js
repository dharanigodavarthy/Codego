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
  static userFileName = "";
  constructor(props) {
    super(props);
    this.state = {
      uploadedFile: "",
      sideBarOpen: false,
      errorStatus: "",
      fileName: ""
    };
  }
  componentDidMount() {
    localStorage.clear();
  }
  handleFileRead = e => {
    const content = ImportPage.fileReader.result;
    this.props.actions.storeJSFile(content, ImportPage.userFileName);
    this.setState({
      uploadedFile: content,
      errorStatus: ""
    });
  };

  handleFileChoosen = file => {
    let typeOfFile = file.name.toLowerCase();
    ImportPage.userFileName = typeOfFile;
    if (typeOfFile.endsWith(".js")) typeOfFile = "js";
    else if (typeOfFile.endsWith(".html")) typeOfFile = "html";
    else if (typeOfFile.endsWith(".css")) typeOfFile = "css";
    if (typeOfFile !== file.name.toLowerCase()) {
      ImportPage.fileReader = new FileReader();
      ImportPage.fileReader.onloadend = this.handleFileRead;
      ImportPage.fileReader.readAsText(file, file.name.toLowerCase());
    } else {
      this.setState({
        errorStatus:
          "Oop's, codigo wont support files ends with " +
          typeOfFile.substr(typeOfFile.lastIndexOf("."))
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
      <div className="home-div">
        <ToolBar sideBarClickHandler={this.toggleSideBar} />
        <SideBar show={this.state.sideBarOpen} />
        {backdrop}
        <h1>use codigo to prettify your code</h1>
        <div className="home-body-div">
          <div className="card-div">
            <p id="p_wrap" />{" "}
            {this.state.uploadedFile ? (
              ""
            ) : (
              <div id="banner">
                <h3>choose a file to prettify</h3>
              </div>
            )}
            <div className="import-btn-wrapper">
              <input
                type="file"
                id="file"
                className="input-file"
                accept=".js"
                onChange={e => this.handleFileChoosen(e.target.files[0])}
              />{" "}
              <button className="btn">Import File</button>
            </div>
            <div className="prettify-div">
              {this.state.uploadedFile ? (
                <Link to="/prettify" className="prettify-link">
                  Prettify Code{" "}
                </Link>
              ) : (
                ""
              )}
            </div>
            <div className="error-div">
              {this.state.errorStatus ? this.state.errorStatus : ""}
            </div>
          </div>
        </div>
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
