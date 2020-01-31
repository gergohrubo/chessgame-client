import React from 'react';
import { Switch, Route } from "react-router-dom";
import Homepage from './components/Homepage'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import GameDetailPage from './components/GameDetailPage'
import Footer from './components/Footer'
import { connect } from 'react-redux'
import { appStyle } from './globalStyles'

class App extends React.Component {
  url = 'https://chess-app-gh.herokuapp.com'
  //url = 'http://localhost:4000'
  stream = new EventSource(`${this.url}/stream`)
  componentDidMount() {
    this.stream.onmessage = event => {
      const { data } = event
      const action = JSON.parse(data)
      this.props.dispatch(action)
    }
  }
  render() {
    return (
      <div style={appStyle}>
        <Navbar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/game/:id" component={GameDetailPage} />
          <Route component={Homepage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default connect()(App);