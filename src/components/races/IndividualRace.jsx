import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getApiData } from '../../redux/reducers'

import '../../css/single-race.css'
import { Link } from 'react-router-dom'
import dragonborn from './dnd race images/dragonborn.png'
import dwarf from './dnd race images/dwarf.png'
import elf from './dnd race images/elf.png'
import gnome from './dnd race images/gnome.png'
import halfElf from './dnd race images/half-elf.png'
import halfling from './dnd race images/halfling.png'
import halfOrc from './dnd race images/half-orc.png'
import human from './dnd race images/human.png'
import tiefling from './dnd race images/tiefling.png'

class IndividualRace extends Component {
  componentDidMount = () => {
    const race = 'races/' + this.props.match.params.race
    this.props.getApiData(race)
  }

  render() {
    const { race } = this.props.match.params
    let bkgImage
    race === 'dragonborn'
      ? (bkgImage = dragonborn)
      : race === 'dwarf'
      ? (bkgImage = dwarf)
      : race === 'elf'
      ? (bkgImage = elf)
      : race === 'gnome'
      ? (bkgImage = gnome)
      : race === 'half-elf'
      ? (bkgImage = halfElf)
      : race === 'halfling'
      ? (bkgImage = halfling)
      : race === 'half-orc'
      ? (bkgImage = halfOrc)
      : race === 'human'
      ? (bkgImage = human)
      : race === 'tiefling'
      ? (bkgImage = tiefling)
      : (bkgImage = '')
    return (
      <div className="signle-race-root-container">
        <div className="single-race-title">
          <h1>Race: {this.props.race.name}</h1>
        </div>
        <div className="single-race-container">
          <div className="single-race-image">
            <img src={bkgImage} alt="single-race-image" />
          </div>

          {/* <div className="clear-float"></div> */}

          <div className="single-race-info">
            <div className="race-info-title">
              <h3>Age</h3>
            </div>
            <div className="race-info">
              {this.props.race !== undefined ? (
                <div>
                  <p>{this.props.race.age}</p>
                </div>
              ) : (
                <span />
              )}
            </div>

            <div className="race-info-title">
              <h3>Alignment</h3>
            </div>
            <div className="race-info">
              {this.props.race !== undefined ? (
                <div>
                  <p>{this.props.race.alignment}</p>
                </div>
              ) : (
                <span />
              )}
            </div>

            <div className="race-info-title">
              <h3>Language Description</h3>
            </div>
            <div className="race-info">
              {this.props.race !== undefined ? (
                <div>
                  <p>{this.props.race.language_desc}</p>
                </div>
              ) : (
                <span />
              )}
            </div>

            <div className="race-info-title">
              <h3>Languages</h3>
            </div>
            <div className="race-info-bits">
              {this.props.race.ability_bonuses !== undefined ? (
                this.props.race.languages.map((element, index) => {
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
            </div>

            <div className="race-info-title">
              <h3>Size</h3>
            </div>
            <div className="race-info-bits">
              {this.props.race !== undefined ? (
                <div>
                  <p>{this.props.race.size}</p>
                </div>
              ) : (
                <span />
              )}
            </div>

            <div className="race-info-title">
              <h3>Size Description</h3>
            </div>
            <div className="race-info">
              {this.props.race !== undefined ? (
                <div>
                  <p>{this.props.race.size_description}</p>
                </div>
              ) : (
                <span />
              )}
            </div>

            <div className="race-info-title">
              <h3>Ability Bonuses</h3>
            </div>
            <div className="race-info-bits">
              {this.props.race.ability_bonuses !== undefined ? (
                this.props.race.ability_bonuses.map((element, index) => {
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
            </div>

            <div className="race-info-title">
              <h3>Speed</h3>
            </div>
            <div className="race-info-bits">
              {this.props.race !== undefined ? (
                <div>
                  <p>{this.props.race.speed}</p>
                </div>
              ) : (
                <span />
              )}
            </div>

            <div className="race-info-title">
              <h3>Starting Proficiencies</h3>
            </div>
            <div className="race-info-bits">
              {this.props.race.starting_proficiencies !== undefined ? (
                this.props.race.starting_proficiencies.length !== 0 ? (
                  this.props.race.starting_proficiencies.map(
                    (element, index) => {
                      return (
                        <div key={index}>
                          <p>{element.name}</p>
                        </div>
                      )
                    }
                  )
                ) : (
                  <div>
                    <p>None</p>
                  </div>
                )
              ) : (
                <span />
              )}
            </div>

            <div className="race-info-title">
              <h3>Starting Proficiency Options</h3>
            </div>
            <div className="race-info-bits">
              {this.props.race.starting_proficiency_options !== undefined ? (
                <div>
                  Choose: {this.props.race.starting_proficiency_options.choose}
                </div>
              ) : (
                <div>
                  <p>Choose: None</p>
                </div>
              )}

              {this.props.race.starting_proficiency_options !== undefined ? (
                this.props.race.starting_proficiency_options.from.length !==
                0 ? (
                  this.props.race.starting_proficiency_options.from.map(
                    (element, index) => {
                      return (
                        <div key={index}>
                          <Link to={`/races/proficiencies/${element.index}`}>
                            <p>{element.name}</p>
                          </Link>
                        </div>
                      )
                    }
                  )
                ) : (
                  <div>
                    <p>None</p>
                  </div>
                )
              ) : (
                <span />
              )}
            </div>

            <div className="race-info-title">
              <h3>Sub Races</h3>
            </div>
            <div className="race-info-bits">
              {this.props.race.subraces !== undefined ? (
                this.props.race.subraces.length !== 0 ? (
                  this.props.race.subraces.map((element, index) => {
                    return (
                      <div key={index}>
                        <p>{element.name}</p>
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
            </div>

            <div className="race-info-title">
              <h3>Traits</h3>
            </div>
            <div className="race-info-bits">
              {this.props.race.traits !== undefined ? (
                this.props.race.traits.map((element, index) => {
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
          </div>
        </div>
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
