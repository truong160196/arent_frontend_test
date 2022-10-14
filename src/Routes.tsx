import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./Main";

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    );
  }
}
