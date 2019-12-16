import React from 'react';
import { Switch, Route } from "react-router-dom";
import Homepage from './components/Homepage'
import LoginContainer from './components/LoginContainer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={LoginContainer} />
        <Route component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
