import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Search />
        </Route>
        <Route exact path="/saved">
          <Saved />
        </Route>

      </Switch>
    </Router>
    
  );
}

export default App;


