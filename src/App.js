import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import LoginFailed from "./components/LoginFailed";
import MemberList from "./components/MemberList";
import GlobalStyles from "./components/GlobalStyles";
import { ThemeProvider } from "emotion-theming";
import ice from "./themes/ice";
import hell from "./themes/hell";

function App() {
  const [theme, setTheme] = React.useState(ice);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Switch>
            <Route exact path="/">
              <Login
                onSwitchColorButtonClick={() => {
                  // if (theme === night) {
                  //   setTheme(cold);
                  // } else {
                  //   setTheme(night);
                  // }
                  setTheme(theme === ice ? hell : ice);
                }}
              ></Login>
            </Route>
            <Route path="/LoginFailed">
              <LoginFailed></LoginFailed>
            </Route>
            <Route path="/MemberList">
              <MemberList></MemberList>
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
