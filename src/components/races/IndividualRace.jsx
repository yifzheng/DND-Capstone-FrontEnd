import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getApiData } from '../../redux/reducers'

import { Link } from 'react-router-dom'

class IndividualRace extends Component {
  state = {
    race: '',
  }

  componentDidMount = () => {
    let race = 'races/' + this.props.match.params.race.toLowerCase()
    this.props.getApiData(race)

    setTimeout(() => {
      this.setState({ race: this.props.race })
    }, 600)

    setTimeout(() => {
      console.log('race state:', this.state.race)
      console.log(this.state.race.ability_bonuses)
    }, 700)
  }

  render() {
    return (
      <div>
        <h1>{this.props.match.params.race}</h1>

        <h3>Ability Bonuses</h3>
        {this.state.race.ability_bonuses !== undefined ? (
          this.state.race.ability_bonuses.map((element, index) => {
            console.log('element', element)
            return (
              <div key={index}>
                <Link to={`/bonus/${element.ability_score.index}`}>
                  <p>{element.ability_score.name}</p>
                </Link>
                <h4>Bonus</h4>
                <p>{element.bonus}</p>
              </div>
            )
          })
        ) : (
          <span />
        )}

        <h3>Age</h3>
        {this.state.race !== undefined ? (
          <div>
            <p>{this.state.race.age}</p>
          </div>
        ) : (
          <span />
        )}

        <h3>Alignment</h3>
        {this.state.race !== undefined ? (
          <div>
            <p>{this.state.race.alignment}</p>
          </div>
        ) : (
          <span />
        )}

        <h3>Language Description</h3>
        {this.state.race !== undefined ? (
          <div>
            <p>{this.state.race.language_desc}</p>
          </div>
        ) : (
          <span />
        )}

        <h3>Languages</h3>
        {this.state.race.ability_bonuses !== undefined ? (
          this.state.race.languages.map((element, index) => {
            console.log('element', element)
            return (
              <div key={index}>
                <p>{element.name}</p>
              </div>
            )
          })
        ) : (
          <span />
        )}

        <h3>Size</h3>
        {this.state.race !== undefined ? (
          <div>
            <p>{this.state.race.size}</p>
          </div>
        ) : (
          <span />
        )}

        <h3>Size Description</h3>
        {this.state.race !== undefined ? (
          <div>
            <p>{this.state.race.size_description}</p>
          </div>
        ) : (
          <span />
        )}

        <h3>Speed</h3>
        {this.state.race !== undefined ? (
          <div>
            <p>{this.state.race.speed}</p>
          </div>
        ) : (
          <span />
        )}

        {/* No race seems to have any starting proficiencies so this will always print none */}
        <h3>Starting Proficiencies</h3>
        {this.state.race.starting_proficiencies !== undefined ? (
          !this.state.race.starting_proficiencies.length === 0 ? (
            this.state.race.starting_proficiencies.map((element, index) => {
              console.log('element', element)
              return (
                <div key={index}>
                  <p>{element}</p>
                </div>
              )
            })
          ) : (
            <div>
              <p>None</p>
            </div>
          )
        ) : (
          <span />
        )}

        <h3>Sub Races</h3>
        {this.state.race.subraces !== undefined ? (
          this.state.race.subraces.map((element, index) => {
            console.log('element', element)
            return (
              <div key={index}>
                <p>{element.name}</p>
              </div>
            )
          })
        ) : (
          <span />
        )}

        <h3>Traits</h3>
        {this.state.race.traits !== undefined ? (
          this.state.race.traits.map((element, index) => {
            console.log('element', element)
            return (
              <div key={index}>
                <p>{element.name}</p>
              </div>
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
    race: state.dndData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getApiData: (searchApi) => dispatch(getApiData(searchApi)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndividualRace)
