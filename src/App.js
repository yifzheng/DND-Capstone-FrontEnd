import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './Routes/Routes'
import NavBar from './components/navbar/Navbar'
import ScrollToTop from './helper/scroll-to-top'

// global styles
import './css/global-styles.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          {/* <ScrollToTop> */}
          <header>
            <NavBar />
          </header>
          <Routes />
          {/* </ScrollToTop> */}
        </Router>
      </div>
    )
  }
}

export default App
