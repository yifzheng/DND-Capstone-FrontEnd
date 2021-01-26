import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getApiData } from '../../redux/reducers'

import { Link } from 'react-router-dom'

class ConditionImmunity extends Component {
  state = {
    monsterThatCalled: this.props.condition, // holds the monster that called this page before redux state is overwritten
  }

  componentDidMount = () => {
    const condition = 'conditions/' + this.props.match.params.condition
    this.props.getApiData(condition)

    setTimeout(() => {
      console.log('condition', this.props.condition)
    }, 800)
  }
  render() {
    return (
      <div>
        {/* If page refreshes, then monster that called this is undefined b/c its overwritten, thus it shows nothing */}
        {this.state.monsterThatCalled.index !== undefined ? (
          <Link to={`/monsters/${this.state.monsterThatCalled.index}`}>
            <p>Back to {this.state.monsterThatCalled.name} information</p>
          </Link>
        ) : (
          <span />
        )}

        <h1>Condition: {this.props.condition.name}</h1>

        {this.props.condition.desc !== undefined ? (
          this.props.condition.desc
        ) : (
          <div>
            <p>Loading</p>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    condition: state.dndData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getApiData: (searchApi) => dispatch(getApiData(searchApi)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConditionImmunity)
