import React from "react";
import Sidebar from "./Sidebar";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EmailList from "./EmailList";
import Mail from "./Mail";
import SendMail from "./SendMail";
import {useSelector} from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";

function App() {
 const sendMessageisOpen=useSelector(selectSendMessageIsOpen);

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
      {sendMessageisOpen && <SendMail/>}  
      </div>
    </Router>
  );
}

export default App;
