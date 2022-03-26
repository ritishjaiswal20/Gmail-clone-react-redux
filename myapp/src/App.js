import React from "react";
import Sidebar from "./Sidebar";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EmailList from "./EmailList";
import Mail from "./Mail";
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app_body">
          <Sidebar />

          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
