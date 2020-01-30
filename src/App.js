import React from 'react';
import { Switch, Route } from "react-router-dom";
import Homepage from './components/Homepage'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import GameDetailPage from './components/GameDetailPage'
import Footer from './components/Footer'
import './App.css';
import { connect } from 'react-redux'

class App extends React.Component {
  //url = 'https://glacial-stream-52474.herokuapp.com'
  url = 'http://localhost:4000'
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
      <div className="App">
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