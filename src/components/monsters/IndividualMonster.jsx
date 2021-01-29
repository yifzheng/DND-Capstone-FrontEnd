import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getApiData } from '../../redux/reducers'

import { Link } from 'react-router-dom'

class IndividualMonster extends Component {
  componentDidMount = async () => {
    const monster = 'monsters/' + this.props.match.params.monster
    await this.props.getApiData(monster)

  }

  render() {
    return (
      <div>
        <h1>Monster: {this.props.monster.name}</h1>

        <h3>Actions</h3>
        {this.props.monster.actions !== undefined ? (
          this.props.monster.actions.map((action, index) => {
            return (
              <div key={index}>
                <h4>{action.name}</h4>
                <p>{action.desc}</p>
              </div>
            )
          })
        ) : (
          <span />
        )}

        <h3>Special Abilities</h3>
        {this.props.monster.special_abilities !== undefined ? (
          this.props.monster.special_abilities.map((ability, index) => {
            return (
              <div key={index}>
                <h4>{ability.name}</h4>
                <p>{ability.desc}</p>
              </div>
            )
          })
        ) : (
          <div>
            <p>None</p>
          </div>
        )}

        <h3>Condition Immunities</h3>
        {this.props.monster.condition_immunities !== undefined ? (
          this.props.monster.condition_immunities.length !== 0 ? (
            this.props.monster.condition_immunities.map((element, index) => {
              return (
                <div key={index}>
                  <Link to={`/conditionImmunity/${element.index}`}>
                    <p>{element.name}</p>
                  </Link>
                </div>
              )
            })
          ) : (
            <div>None</div>
          )
        ) : (
          <span />
        )}

        <h3>Alignment</h3>
        {this.props.monster.alignment !== undefined ? (
          <div>
            <p>{this.props.monster.alignment}</p>
          </div>
        ) : (
          <span />
        )}

        <h3>Languages</h3>
        {this.props.monster.languages !== undefined ? (
          <div>
            <p>{this.props.monster.languages}</p>
          </div>
        ) : (
          <span />
        )}

        <h3>Size</h3>
        {this.props.monster.size !== undefined ? (
          <div>
            <p>{this.props.monster.size}</p>
          </div>
        ) : (
          <span />
        )}

        <h3>Challenge Rating</h3>
        {this.props.monster.challenge_rating !== undefined ? (
          <div>
            <p>{this.props.monster.challenge_rating}</p>
          </div>
        ) : (
          <span />
        )}

        <h3>Armor Class</h3>
        {this.props.monster.armor_class !== undefined ? (
          <div>
            <p>{this.props.monster.armor_class}</p>
          </div>
        ) : (
          <span />
        )}

        <h3>Strength</h3>
        {this.props.monster.strength !== undefined ? (
          <div>
            <p>{this.props.monster.strength}</p>
          </div>
        ) : (
          <span />
        )}

        <h3>Charisma</h3>
        {this.props.monster.charisma !== undefined ? (
          <div>
            <p>{this.props.monster.charisma}</p>
          </div>
        ) : (
          <span />
        )}

        <h3>Dexterity</h3>
        {this.props.monster.dexterity !== undefined ? (
          <div>
            <p>{this.props.monster.dexterity}</p>
          </div>
        ) : (
          <span />
        )}
        <h3>Xp</h3>
        {this.props.monster.xp !== undefined ? (
          <div>
            <p>{this.props.monster.xp}</p>
          </div>
        ) : (
          <span />
        )}
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
