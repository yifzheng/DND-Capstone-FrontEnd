import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getApiData } from '../../redux/reducers'

import { Link } from 'react-router-dom'

import '../../css/single-monster.css'

class IndividualMonster extends Component {
  componentDidMount = async () => {
    const monster = 'monsters/' + this.props.match.params.monster
    await this.props.getApiData(monster)

  }

  render() {
    return (
      <div className="single-monster-root-container">
        <div className="single-monster-title">
          <h1>Monster: {this.props.monster.name}</h1>
        </div>

        <div className="single-monster-info-container">
          <div className="monster-info-title">
            <h3>Actions</h3>
          </div>
          <div className="monster-info">
            {this.props.monster.actions !== undefined ? (
              this.props.monster.actions.map((action, index) => {
                return (
                  <div key={index}>
                    <div className="monster-info-subtitle">
                      <h4>{action.name}</h4>
                    </div>
                    <p>{action.desc}</p>
                  </div>
                )
              })
            ) : (
              <span />
            )}
          </div>

          <div className="monster-info-title">
            <h3>Special Abilities</h3>
          </div>
          <div className="monster-info">
            {this.props.monster.special_abilities !== undefined ? (
              this.props.monster.special_abilities.map((ability, index) => {
                return (
                  <div key={index}>
                    <div className="monster-info-subtitle">
                      <h4>{ability.name}</h4>
                    </div>
                    <p>{ability.desc}</p>
                  </div>
                )
              })
            ) : (
              <div>
                <p>None</p>
              </div>
            )}
          </div>

          <div className="monster-info-title">
            <h3>Condition Immunities</h3>
          </div>
          <div className="monster-info-condition-immunities">
            {this.props.monster.condition_immunities !== undefined ? (
              this.props.monster.condition_immunities.length !== 0 ? (
                this.props.monster.condition_immunities.map(
                  (element, index) => {
                    return (
                      <div key={index}>
                        <Link to={`/conditionImmunity/${element.index}`}>
                          <p>{element.name}</p>
                        </Link>
                      </div>
                    )
                  }
                )
              ) : (
                <div>None</div>
              )
            ) : (
              <span />
            )}
          </div>

          <div className="monster-info-title">
            <h3>Alignment</h3>
          </div>
          <div className="monster-info-bits-non">
            {this.props.monster.alignment !== undefined ? (
              <div>
                <p>{this.props.monster.alignment}</p>
              </div>
            ) : (
              <span />
            )}
          </div>

          <div className="monster-info-title">
            <h3>Languages</h3>
          </div>
          <div className="monster-info-bits-non">
            {this.props.monster.languages !== undefined ? (
              <div>
                <p>{this.props.monster.languages}</p>
              </div>
            ) : (
              <span />
            )}
          </div>

          <div className="monster-info-title">
            <h3>Size</h3>
          </div>
          <div className="monster-info-bits-non">
            {this.props.monster.size !== undefined ? (
              <div>
                <p>{this.props.monster.size}</p>
              </div>
            ) : (
              <span />
            )}
          </div>

          <div className="monster-info-bits-master-container">
            <div className="monster-info-bits-container">
              <div className="monster-info-bits-title">
                <h3>Challenge Rating</h3>
              </div>
              <div className="monster-info-bits">
                {this.props.monster.challenge_rating !== undefined ? (
                  <span>{this.props.monster.challenge_rating}</span>
                ) : (
                  <span />
                )}
              </div>
            </div>

            <div className="monster-info-bits-container">
              <div className="monster-info-bits-title">
                <h3>Armor Class</h3>
              </div>
              <div className="monster-info-bits">
                {this.props.monster.armor_class !== undefined ? (
                  <span>{this.props.monster.armor_class}</span>
                ) : (
                  <span />
                )}
              </div>
            </div>

            <div className="monster-info-bits-container">
              <div className="monster-info-bits-title">
                <h3>Strength</h3>
              </div>
              <div className="monster-info-bits">
                {this.props.monster.strength !== undefined ? (
                  <span>{this.props.monster.strength}</span>
                ) : (
                  <span />
                )}
              </div>
            </div>

            <div className="monster-info-bits-container">
              <div className="monster-info-bits-title">
                <h3>Charisma</h3>
              </div>
              <div className="monster-info-bits">
                {this.props.monster.charisma !== undefined ? (
                  <span>{this.props.monster.charisma}</span>
                ) : (
                  <span />
                )}
              </div>
            </div>

            <div className="monster-info-bits-container">
              <div className="monster-info-bits-title">
                <h3>Dexterity</h3>
              </div>
              <div className="monster-info-bits">
                {this.props.monster.dexterity !== undefined ? (
                  <span>{this.props.monster.dexterity}</span>
                ) : (
                  <span />
                )}
              </div>
            </div>

            <div className="monster-info-bits-container">
              <div className="monster-info-bits-title">
                <h3>Xp</h3>
              </div>
              <div className="monster-info-bits">
                {this.props.monster.xp !== undefined ? (
                  <span>{this.props.monster.xp}</span>
                ) : (
                  <span />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    monster: state.dndData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getApiData: (searchApi) => dispatch(getApiData(searchApi)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndividualMonster)
