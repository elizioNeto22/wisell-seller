import React from "react";
import { Switch, Route } from "react-router-dom";

import LoginPage from "../pages/LoginPage";

const AuthRoutes = () => (
  <Switch>
    <Route path="*" component={LoginPage} />
  </Switch>
);

export default AuthRoutes;
