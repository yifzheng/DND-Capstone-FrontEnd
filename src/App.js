import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './Routes/Routes'
import NavBar from './components/navbar/Navbar'

// global styles
import './css/global-styles.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <header>
            <NavBar />
          </header>
          <Routes />
        </Router>
      </div>
    )
  }
}

export default App
