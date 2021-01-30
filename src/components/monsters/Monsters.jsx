import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getApiData } from '../../redux/reducers'

import DisplayMonster from './DisplayMonster'

import '../../css/monsters.css'

class Monsters extends Component {
  componentDidMount = () => {
    this.props.getApiData('monsters')
  }

  render() {
    return (
      <div className="root-root-monster-container">
        {/* <div className="root-monster-container"> */}
        <div className="monsters-title">
          <h1>Monsters</h1>
          <p>Slay or be slain</p>
        </div>

        {this.props.monsters.results !== undefined ? (
          <div className="monster-preview-container">
            {this.props.monsters.results.map((monster, index) => (
              <DisplayMonster
                key={index}
                index={monster.index}
                name={monster.name}
              />
            ))}
          </div>
        ) : (
          <span />
        )}
        {/* </div> */}
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
