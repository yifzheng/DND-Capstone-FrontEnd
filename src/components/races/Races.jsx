import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getApiData } from '../../redux/reducers'

import DisplayRace from './DisplayRace'

class races extends Component {
  state = {
    races: [],
  }

  // test comment
  componentDidMount = async () => {
    this.fetchRaces('races')
  }

  fetchRaces = async (searchApi) => {
    await this.props.getApiData(searchApi)

    setTimeout(() => {
      this.setState({
        races: this.props.races.results,
      })
    }, 200)

    setTimeout(() => {
      console.log('RACES STATE', this.state.races)
    }, 400)
  }

  render() {
    return (
      <div>
        <h1>Races</h1>
        {this.state.races !== undefined ? (
          this.state.races.map((race, index) => (
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
