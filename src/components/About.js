import React, { Component } from "react";
import Header from "./Header";

export default class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="about-div">
          <h1>About</h1>
          <h3>
            Integrated with your Workflow. Codigo is flexible and adapts to your
            code review process. Codigo pushes results as comments in your pull
            requests or as notifications in Slack or Hipchat channels. Codigo
            also plays nice with your Continuous Integration tools and serves as
            an ideal complement to your unit tests.
          </h3>
        </div>
      </div>
    );
  }
}
