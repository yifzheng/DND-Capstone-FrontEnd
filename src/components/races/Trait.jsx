import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getApiData } from '../../redux/reducers'

import { Link } from 'react-router-dom'

import '../../css/click-away.css'

class Trait extends Component {
  state = {
    raceThatCalled: this.props.trait, // holds the race that called this page before redux state is overwritten
  }

  componentDidMount = async () => {
    const trait = 'traits/' + this.props.match.params.trait
    await this.props.getApiData(trait)

    setTimeout(() => {
      console.log('trait:', this.props.trait)
    }, 800)
  }

  render() {
    console.log('url param:', this.props.match.params.trait)
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
            <h1>Trait: {this.props.trait.name}</h1>
          </div>

          <div className="click-away-info-container">
            <div className="click-away-info-title">
              <h3>Description</h3>
            </div>
            <div className="click-away-info">
              {this.props.trait.desc !== undefined ? (
                this.props.trait.desc.map((element, index) => {
                  return (
                    <div key={index}>
                      <p>{element}</p>
                    </div>
                  )
                })
              ) : (
                <span />
              )}
            </div>

            <div className="click-away-info-title">
              <h3>Races Applicable</h3>
            </div>
            <div className="click-away-info-bits">
              {this.props.trait.races !== undefined ? (
                this.props.trait.races.map((element, index) => {
                  return (
                    <div key={index}>
                      <Link to={`/races/${element.index}`}>
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
    trait: state.dndData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getApiData: (searchApi) => dispatch(getApiData(searchApi)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Trait)
