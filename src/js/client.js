import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Popular from "./pages/Popular";
import Newest from "./pages/Newest";
import Layout from "./pages/Layout";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Newest}></IndexRoute>
      <Route path="popular" name="popular" component={Popular}></Route>
      <Route path="newest" name="newest" component={Newest}></Route>
    </Route>
  </Router>,
app);
