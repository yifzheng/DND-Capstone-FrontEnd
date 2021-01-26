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

    setTimeout(() => {
      console.log('RACES PROP', this.props.races)
    }, 200)
  }

  render() {
    return (
      <div>
        <h1>Races</h1>
        {this.props.races.results !== undefined ? (
          this.props.races.results.map((race, index) => (
            <DisplayRace key={index} name={race.name} />
          ))
        ) : (
          <span />
        )}
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
