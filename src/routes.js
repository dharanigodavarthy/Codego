import React from "react";
// import BrowserHistory from 'react-router-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import  ImportPage from "./components/importPage";
import  Prettifier from "./components/prettifyPage";
import UserFile from './components/UserFile'
import Lint from './components/lintPage'
// import HomePage from "./components/HomePage";
// import blogs from "./components/blogs";
// import blogPage from "./components/blogPage";
// import ErrorPage from "./components/error";
export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/import" exact component={ImportPage} />
      <Route path="/prettify" exact component={Prettifier} />
      <Route path="/userScript" exact component={UserFile} />
      <Route path="/lint" exact component={Lint} />
      {/* <Route path="/home" exact component={HomePage} />
      <Route path="/blogs" exact component={blogs} />
      <Route path="/create/:id" exact component={blogInput} />
      <Route path="/blog/:id" exact component={blogPage} />
      <Route component={ErrorPage} /> */}
    </Switch>
  </BrowserRouter>
);
