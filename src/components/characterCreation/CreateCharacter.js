import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class CreateCharacter extends Component {
  render() {
    return (
      <div>
        <Link to = {`/CharacterCreation`}><button>Create Character</button></Link>
      </div>
    )
  }
}

export default CreateCharacter
