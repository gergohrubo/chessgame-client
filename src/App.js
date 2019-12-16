import React from 'react';
import { Switch, Route } from "react-router-dom";
import Homepage from './components/Homepage'
import LoginContainer from './components/LoginContainer'
import SignupContainer from './components/SignupContainer'
import NavbarContainer from './components/NavbarContainer'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavbarContainer />
      <Switch>
        <Route path="/login" component={LoginContainer} />
        <Route path="/signup" component={SignupContainer} />
        <Route component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
