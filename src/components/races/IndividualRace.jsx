import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getApiData } from '../../redux/reducers'

import { Link } from 'react-router-dom'

class IndividualRace extends Component {
  componentDidMount = () => {
    const race = 'races/' + this.props.match.params.race
    this.props.getApiData(race)

    setTimeout(() => {
      console.log('race prop:', this.props.race)
    }, 300)
  }

  render() {
    return (
      <div>
        <h1>Race: {this.props.race.name}</h1>

        <h3>Ability Bonuses</h3>
        {this.props.race.ability_bonuses !== undefined ? (
          this.props.race.ability_bonuses.map((element, index) => {
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
        {this.props.race !== undefined ? (
          <div>
            <p>{this.props.race.age}</p>
          </div>
        ) : (
          <span />
        )}

        <h3>Alignment</h3>
        {this.props.race !== undefined ? (
          <div>
            <p>{this.props.race.alignment}</p>
          </div>
        ) : (
          <span />
        )}

        <h3>Language Description</h3>
        {this.props.race !== undefined ? (
          <div>
            <p>{this.props.race.language_desc}</p>
          </div>
        ) : (
          <span />
        )}

        <h3>Languages</h3>
        {this.props.race.ability_bonuses !== undefined ? (
          this.props.race.languages.map((element, index) => {
            console.log('element', element)
            return (
              <div key={index}>
                <Link to={`/languages/${element.index}`}>
                  <p>{element.name}</p>
                </Link>
              </div>
            )
          })
        ) : (
          <span />
        )}

        <h3>Size</h3>
        {this.props.race !== undefined ? (
          <div>
            <p>{this.props.race.size}</p>
          </div>
        ) : (
          <span />
        )}

        <h3>Size Description</h3>
        {this.props.race !== undefined ? (
          <div>
            <p>{this.props.race.size_description}</p>
          </div>
        ) : (
          <span />
        )}

        <h3>Speed</h3>
        {this.props.race !== undefined ? (
          <div>
            <p>{this.props.race.speed}</p>
          </div>
        ) : (
          <span />
        )}

        {/* No race seems to have any starting proficiencies so this will always print none */}
        <h3>Starting Proficiencies</h3>
        {this.props.race.starting_proficiencies !== undefined ? (
          !this.props.race.starting_proficiencies.length === 0 ? (
            this.props.race.starting_proficiencies.map((element, index) => {
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
        {this.props.race.subraces !== undefined ? (
          this.props.race.subraces.map((element, index) => {
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
        {this.props.race.traits !== undefined ? (
          this.props.race.traits.map((element, index) => {
            console.log('element', element)
            return (
              <div key={index}>
                <Link to={`/traits/${element.index}`}>
                  <p>{element.name}</p>
                </Link>
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
