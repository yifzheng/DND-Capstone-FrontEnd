import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllCharacters } from '../../redux/reducers'

import { Link } from 'react-router-dom'

import '../../css/builds.css'

class Builds extends Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    try {
      await this.props.getAllCharacters()
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    return (
      <div id="builds-container">
        <div id="builds-container-h1">
          <h1>Characters</h1>
        </div>
        <div id="build-character-name">
          {this.props.characters !== undefined ? (
            this.props.characters.map((item, index) => {
              return (
                <Link
                  to={`/character/${item.id}`}
                  style={{ textDecoration: 'none' }}
                  key={index}
                >
                  <h3 id="public-characters">{item.name}</h3>
                </Link>
              )
            })
          ) : (
            <h1>Loading</h1>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters.characters,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllCharacters: () => dispatch(getAllCharacters()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Builds)
