import React from 'react';
import { Switch, Route } from "react-router-dom";
import Homepage from './components/Homepage'
import LoginContainer from './components/LoginContainer'
import SignupContainer from './components/SignupContainer'
import NavbarContainer from './components/NavbarContainer'
import GameDetailPageContainer from './components/GameDetailPageContainer'
import Footer from './components/Footer'
import Gamepage from './components/Gamepage'
import './App.css';
import { connect } from 'react-redux'

class App extends React.Component {
  url = 'https://glacial-stream-52474.herokuapp.com'
  //url = 'http://localhost:4000'
  stream = new EventSource(`${this.url}/stream`)
  componentDidMount() {
    this.stream.onmessage = event => {
      const { data } = event
      const action = JSON.parse(data)
      console.log('data from the stream', action)
      this.props.dispatch(action)
    }
  }
  render() {
    return (
      <div className="App">
        <NavbarContainer />
        <Switch>
          <Route path="/login" component={LoginContainer} />
          <Route path="/signup" component={SignupContainer} />
          {/*<Route path="/game" component={Gamepage} />*/}
          <Route path="/game/:id" component={GameDetailPageContainer} />
          <Route component={Homepage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default connect()(App);