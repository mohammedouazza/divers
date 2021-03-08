import React from "react";
import { Route, Switch } from "react-router-dom";

import Play from "./pages/Play";
import Learn from "./pages/Learn";
import Practice from "./pages/Practice";
import Home from "./pages/Home";
import { Container } from "@material-ui/core";
import Game from "../Game";
import GameStart from "../GameStart";
import ScrollTop from "../ScrollTop";

const Content = (props) => {
  return (
    <Container
      style={{ marginTop: 64, flexGrow: 1, minHeight: "100vh", padding: 10 }}
    >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/play" component={Play} />
        <Route exact path={`/play/:id`} component={Game} />
        <Route exact path={`/play/:id/start`} component={GameStart} />
        <Route exact path="/learn" component={Learn} />
        <Route exact path="/practice" component={Practice} />
      </Switch>
      <ScrollTop {...props} />
    </Container>
  );
};

export default Content;
