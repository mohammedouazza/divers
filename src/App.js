import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppNavigation from "./components/AppNavigation";
import GameStart from "./components/GameStart";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/play/:id/start" component={GameStart} />
        <Route path="*" component={AppNavigation} />
      </Switch>
    </Router>
  );
}

export default App;
