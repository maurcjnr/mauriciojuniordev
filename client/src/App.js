import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Page from "./components/Page";

export default (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Page}></Route>
    </Switch>
  );
};
