import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class SpellDisplay extends Component {
  render() {
    return (
      <div className="spells-preview">
        <Link to={`/spells/${this.props.index}`}>{this.props.name}</Link>
      </div>
    )
  }
}

export default SpellDisplay
