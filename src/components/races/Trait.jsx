import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getApiData } from '../../redux/reducers'

import { Link } from 'react-router-dom'

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
        {/* If page refreshes, then race that called this is undefined b/c its overwritten, thus it shows nothing */}
        {this.state.raceThatCalled.index !== undefined ? (
          <Link to={`/races/${this.state.raceThatCalled.index}`}>
            <p>Back to {this.state.raceThatCalled.name} information</p>
          </Link>
        ) : (
          <span />
        )}

        <h1>Trait: {this.props.trait.name}</h1>

        <h3>Description</h3>
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

        <h3>Races Applicable</h3>
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
