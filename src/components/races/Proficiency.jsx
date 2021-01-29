import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getApiData } from '../../redux/reducers'

import { Link } from 'react-router-dom'

class Proficiency extends Component {
  state = {
    raceThatCalled: this.props.proficiency, // holds the race that called this page before redux state is overwritten
  }

  componentDidMount = async () => {
    const proficiency = 'proficiencies/' + this.props.match.params.proficiency
    await this.props.getApiData(proficiency)
  }

  render() {
    return (
      <div>
        <div className="click-away-container">
          <div className="back-to">
            {/* If page refreshes, then race that called this is undefined b/c its overwritten, thus it shows nothing */}
            {this.state.raceThatCalled.index !== undefined ? (
              <Link
                id="back-to-link"
                to={`/races/${this.state.raceThatCalled.index}`}
              >
                Back to {this.state.raceThatCalled.name} information
              </Link>
            ) : (
              <span />
            )}
          </div>

          <div className="click-away-title">
            <h1>Proficiency: {this.props.proficiency.name}</h1>
          </div>

          <div className="click-away-info-container">
            <div className="click-away-info-title">
              <h3>Type</h3>
            </div>
            <div className="click-away-info">
              {this.props.proficiency.type !== undefined ? (
                this.props.proficiency.type
              ) : (
                <div>
                  <p>This proficiency does not have a type.</p>
                </div>
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
    proficiency: state.dndData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getApiData: (searchApi) => dispatch(getApiData(searchApi)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Proficiency)
