import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EmailList from "./EmailList";
import Mail from "./Mail";
import SendMail from "./SendMail";
import {useDispatch, useSelector} from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { login, selectUser } from "./features/userSlice";
import Login from "./features/Login";
import { auth } from "./firebase";

function App() {
   const sendMessageisOpen=useSelector(selectSendMessageIsOpen);
   const user=useSelector(selectUser)
   const dispatch=useDispatch();

useEffect(()=>{
  auth.onAuthStateChanged((user)=>{
    if(user){
      dispatch(
        login({
          displayName: user.displayName,
          email: user.email,
          photoUrl:user.photoURL, 
        })
      ) 
    }
  })
},[])    

  return (
    <Router>
      {!user?(
        <Login/>
      ):(
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
      )}
     
    </Router>
  );
}

export default App;
