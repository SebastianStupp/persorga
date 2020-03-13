import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import LoginFailed from "./components/LoginFailed";
import MemberList from "./components/MemberList";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login></Login>
          </Route>
          <Route path="/LoginFailed">
            <LoginFailed></LoginFailed>
          </Route>
          <Route path="/MemberList">
            <MemberList></MemberList>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
