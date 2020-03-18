import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import LoginFailed from "./components/LoginFailed";
import MemberList from "./components/MemberList";
import { Global, css } from "@emotion/core";

function App() {
  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0;
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: rgb(64, 112, 131);
            position: relative;
          }
        `}
      />
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
