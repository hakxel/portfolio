import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home'
import Main from './components/Main'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}></Route>
          <Route path="/main" component={Main}></Route>
          <Route path="/projects" component={Projects}></Route>
          <Route path="/resume" component={Resume}></Route>
          <Route path="/contact" component={Contact}></Route>
        </div> 
      </Router>
    )
  }
}

export default App
