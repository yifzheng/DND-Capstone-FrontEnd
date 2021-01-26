  
import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class SpellDisplay extends Component {
  render() {
    console.log('spell component')
    console.log(this.props.index)
    return (
      <div>
        <Link to={`/spells/${this.props.index}`}>{this.props.name}</Link>

      </div>
    )
  }
}

export default SpellDisplay;