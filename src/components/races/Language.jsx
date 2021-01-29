import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getApiData } from '../../redux/reducers'

import { Link } from 'react-router-dom'

class Language extends Component {
  state = {
    raceThatCalled: this.props.language, // holds the race that called this page before redux state is overwritten
  }

  componentDidMount = async () => {
    const language = 'languages/' + this.props.match.params.language
    await this.props.getApiData(language)

    setTimeout(() => {
      console.log('language:', this.props.language)
    }, 800)
  }

  render() {
    console.log('url param:', this.props.match.params.language)
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
            <h1>Language: {this.props.language.name}</h1>
          </div>

          <div className="click-away-info-container">
            <div className="click-away-info-title">
              <h3>Description</h3>
            </div>
            <div className="click-away-info">
              {this.props.language.desc !== undefined ? (
                this.props.language.desc
              ) : (
                <div>
                  <p>This language does not have a description.</p>
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
    language: state.dndData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getApiData: (searchApi) => dispatch(getApiData(searchApi)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Language)
