import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./views/Home";
import Hello from "./views/Hello";
import ShelfDetails from "./views/ShelfDetails";
import BookDetails from "./views/BookDetails";
import Page404 from "./views/Page404";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/hello/:name/:location" component={Hello} />
    <Route exact path="/shelf/:id/read" component={ShelfDetails} />
    <Route exact path="/book/:id/read" component={BookDetails} />
    <Route component={Page404} />
  </Switch>
);

export default Routes;
