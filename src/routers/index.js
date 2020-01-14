import React from "react";
import { Switch, Redirect } from "react-router-dom";
import Route from "./route";
import { HomeContainer, LoginContainer, PageNotFound } from "../containers";
const Router = props => {
  return (
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/login" component={LoginContainer} />
      <Route exact path="/404" component={PageNotFound} />
      <Route exact path="/*" component={() => <Redirect to="/404" />} />
    </Switch>
  );
};

export default Router;
