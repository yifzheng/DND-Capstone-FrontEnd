import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class DisplayRace extends Component {
  render() {
    console.log('in the display race component')
    return (
      <div>
        <Link to={`/races/${this.props.name}`}>{this.props.name}</Link>
      </div>
    )
  }
}

export default DisplayRace
