  
import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class SpellDisplay extends Component {
  render() {
    console.log('spell component')
    return (
      <div>
        <Link to={`/spells/${this.props.name}`}>{this.props.name}</Link>
      </div>
    )
  }
}

export default SpellDisplay;