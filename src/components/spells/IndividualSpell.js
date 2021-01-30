import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getApiData } from '../../redux/reducers'

import { Link } from 'react-router-dom'

import '../../css/single-spell.css'

class IndividualSpell extends Component {
  componentDidMount = () => {
    let spellName = 'spells/' + this.props.match.params.spell
    this.props.getApiData(spellName)
  }

  render() {
    console.log('spell:', this.props.spellName)
    return (
      <div className="single-spell-container">
        <div className="single-spell-title">
          <h1>Spell: {this.props.spellName.name}</h1>
        </div>

        <div className="single-spell-info-container">
          <div className="single-spell-info-title">
            <h3>Description</h3>
          </div>
          <div className="single-spell-info">
            {this.props.spellName !== undefined ? (
              <div>
                <p>{this.props.spellName.desc}</p>
              </div>
            ) : (
              <span />
            )}
          </div>

          <div className="single-spell-info-title">
            <h3>Higher Level</h3>
          </div>
          <div className="single-spell-info">
            {this.props.spellName.higher_level !== undefined ? (
              <div>
                {this.props.spellName.higher_level.map((item, index) => {
                  return <p key={index}>{item}</p>
                })}
              </div>
            ) : (
              <span />
            )}
          </div>

          <div className="single-spell-info-title">
            <h3>Range</h3>
          </div>
          <div className="single-spell-info-bits">
            {this.props.spellName.range !== undefined ? (
              <div>
                <p>{this.props.spellName.range}</p>
              </div>
            ) : (
              <span />
            )}
          </div>

          {/* <h3>component</h3>
                {this.props.spellName.components !== undefined ? (
                    this.props.spellName.components.map((element, index) => {
                    
                        return(
                            <div key={index}>
                            <Link to {`/component/${element.components.index}`}>
                                <p>{element.components.name}</p>
                            </Link>
                        )
                    })
                )}  */}

          <div className="single-spell-info-title">
            <h3>Material</h3>
          </div>
          <div className="single-spell-info">
            {this.props.spellName.material !== undefined ? (
              <div>
                <p>{this.props.spellName.material}</p>
              </div>
            ) : (
              <span />
            )}
          </div>

          <div className="single-spell-info-title">
            <h3>Ritual</h3>
          </div>
          <div className="single-spell-info-bits">
            {this.props.spellName.ritual !== undefined ? (
              this.props.spellName.ritual === false ? (
                <p>False</p>
              ) : (
                <p>True</p>
              )
            ) : (
              <span />
            )}
          </div>

          <div className="single-spell-info-title">
            <h3>Duration</h3>
          </div>
          <div className="single-spell-info-bits">
            {this.props.spellName.duration !== undefined ? (
              <div>
                <p>{this.props.spellName.duration}</p>
              </div>
            ) : (
              <span />
            )}
          </div>

          <div className="single-spell-info-title">
            <h3>Concentration</h3>
          </div>
          <div className="single-spell-info-bits">
            {this.props.spellName.concentration !== undefined ? (
              this.props.spellName.concentration === false ? (
                <p>False</p>
              ) : (
                <p>True</p>
              )
            ) : (
              <span />
            )}
          </div>

          <div className="single-spell-info-title">
            <h3>Casting time</h3>
          </div>
          <div className="single-spell-info-bits">
            {this.props.spellName.casting_time !== undefined ? (
              <div>
                <p>{this.props.spellName.casting_time}</p>
              </div>
            ) : (
              <span />
            )}
          </div>

          <div className="single-spell-info-title">
            <h3>Level</h3>
          </div>
          <div className="single-spell-info-bits">
            {this.props.spellName.level !== undefined ? (
              <div>
                <p>{this.props.spellName.level}</p>
              </div>
            ) : (
              <span />
            )}
          </div>

          <div className="single-spell-info-title">
            <h3>Attack Type</h3>
          </div>
          <div className="single-spell-info-bits">
            {this.props.spellName.attack_type !== undefined ? (
              <div>
                <p>{this.props.spellName.attack_type}</p>
              </div>
            ) : (
              <span />
            )}
          </div>

          <div className="single-spell-info-title">
            <h3>Damage</h3>
          </div>
          <div className="single-spell-info-bits">
            {this.props.spellName.damage ? (
              <div>
                <p>
                  Damage Type:
                  {this.props.spellName.damage.damage_type.name}
                </p>

                {this.props.spellName.damage.damage_at_slot_level ? (
                  Object.entries(
                    this.props.spellName.damage.damage_at_slot_level
                  ).map(([key, value]) => {
                    return (
                      <p>
                        {key} : {value}
                      </p>
                    )
                  })
                ) : (
                  <span />
                )}
              </div>
            ) : (
              <span />
            )}
          </div>

          {/* <h3>Damage</h3>
        {this.props.spellName.damage !== undefined ? (
          <div>
            <p>
              Damage Type:
              {this.props.spellName.damage.damage_type.name}
            </p>
            {this.props.spellName.damage.damage_at_slot_level !== undefined ? (
              <div></div>
            ) : (
              <span />
            )}
          </div>
        ) : (
          <span />
        )} */}

          <div className="single-spell-info-title">
            <h3>
              School:{' '}
              {this.props.spellName.school !== undefined &&
                this.props.spellName.school.name}
            </h3>
          </div>

          <div className="single-spell-info-title">
            <h3>Classes</h3>
          </div>
          <div className="single-spell-info-bits">
            {this.props.spellName.classes !== undefined &&
              this.props.spellName.classes.map((item, index) => {
                return (
                  <Link to={`/class/${item.index}`}>
                    <p key={index}>{item.name}</p>
                  </Link>
                )
              })}
          </div>

          {/* <div className="single-spell-info-title">
            <h3>Subclasses</h3>
          </div>
          <div className="single-spell-info-bits">
            {this.props.spellName.subclasses.length !== 0 ? (
              this.props.spellName.subclasses.map((item, index) => {
                return (
                  <Link to={`/subclass/${item.index}`}>
                    <p key={index}>{item.name}</p>
                  </Link>
                )
              })
            ) : (
              <div>None</div>
            )}
          </div> */}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    spellName: state.dndData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getApiData: (searchApi) => dispatch(getApiData(searchApi)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndividualSpell)
