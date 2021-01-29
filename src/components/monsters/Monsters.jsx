import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getApiData } from '../../redux/reducers'

import DisplayMonster from './DisplayMonster'

class Monsters extends Component {
  componentDidMount = () => {
    this.props.getApiData('monsters')
  }

  render() {
    return (
      <div>
        <h1>Monsters</h1>
        {this.props.monsters.results !== undefined ? (
          this.props.monsters.results.map((monster, index) => {
            return (
              <DisplayMonster
                key={index}
                index={monster.index}
                name={monster.name}
              />
            )
          })
        ) : (
          <span />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    monsters: state.dndData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getApiData: (searchApi) => dispatch(getApiData(searchApi)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Monsters)
