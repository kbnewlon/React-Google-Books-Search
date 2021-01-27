import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Search from "./pages/Search";


//add router for 2 pages. search and save


function App() {
  return (
    // <div>
    // <Nav />
    <Router>
      <Switch>
        <Route exact path="/">
          <Search />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>

      </Switch>
    </Router>
    // </div>
  );
}

export default App;


//need to create mongoDB connection 
