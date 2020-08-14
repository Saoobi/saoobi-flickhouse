import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../screens/Home";
import Game from "../screens/Game";
import Gameover from "../screens/Gameover";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/gameover" component={Gameover} />
        <Route path="/game" component={Game} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
