import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getAllCharacters } from '../redux/reducers'

class AllCharacters extends Component {
  componentDidMount = async () => {
    await this.fetchAllCharacters()
  }

  fetchAllCharacters = async () => {
    await this.props.getAllCharacters()
  }

  render() {
    return (
      <div>
        <p>all characters component</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllCharacters: () => dispatch(getAllCharacters()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllCharacters)
