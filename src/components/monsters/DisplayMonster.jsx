import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class DisplayMonster extends Component {
  render() {
    return (
      <div>
        <Link to={`/monsters/${this.props.index}`}>{this.props.name}</Link>
      </div>
    )
  }
}

export default DisplayMonster
