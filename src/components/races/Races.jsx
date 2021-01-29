import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getApiData } from '../../redux/reducers'

import DisplayRace from './DisplayRace'

class races extends Component {
  componentDidMount = async () => {
    this.fetchRaces('races')
  }

  fetchRaces = async (searchApi) => {
    await this.props.getApiData(searchApi)
  }

  render() {
    return (
      <div className="root-race-container">
        <div className="races-title">
          <h1>Races</h1>
        </div>
        {this.props.races.results !== undefined ? (
          <div className="race-preview-container">
            {this.props.races.results.map((race, index) => (
              <DisplayRace key={index} index={race.index} name={race.name} />
            ))}
          </div>
        ) : (
          <span />
        )}
        <div className="clear-float"></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    races: state.dndData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getApiData: (searchApi) => dispatch(getApiData(searchApi)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(races)
