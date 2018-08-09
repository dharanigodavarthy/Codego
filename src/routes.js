import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import  ImportPage from "./components/ImportPage";
import  Prettifier from "./components/PrettifyPage";
import UserFile from './components/UserFile'
import Lint from './components/LintPage'
import Login from './components/login/Login'
import PageNotFound from "./components/PageNotFound";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/import" exact component={ImportPage} />
      <Route path="/prettify" exact component={Prettifier} />
      <Route path="/userScript" exact component={UserFile} />
      <Route path="/lint" exact component={Lint} />
      <Route path="/" exact component={Login} />
      <Route component={PageNotFound} /> 
    </Switch>
  </BrowserRouter>
);
