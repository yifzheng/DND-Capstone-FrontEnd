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

    setTimeout(() => {
      console.log('proficiency:', this.props.proficiency)
    }, 800)
  }

  render() {
    console.log('url param:', this.props.match.params.proficiency)
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

        <h1>Proficiency: {this.props.proficiency.name}</h1>

        <h3>Type</h3>
        {this.props.proficiency.type !== undefined ? (
          this.props.proficiency.type
        ) : (
          <div>
            <p>This proficiency does not have a type.</p>
          </div>
        )}
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
