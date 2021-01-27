import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getApiData } from '../../redux/reducers'

import { Link } from 'react-router-dom'

class Bonus extends Component {
  state = {
    raceThatCalled: this.props.bonus, // holds the race that called this page before redux state is overwritten
  }

  componentDidMount = () => {
    const bonus = 'ability-scores/' + this.props.match.params.bonus
    this.props.getApiData(bonus)
  }

  render() {
    return (
      <div>
        {/* If page refreshes, then race that called this is undefined b/c its overwritten, thus it shows nothing */}
        {/* {this.state.raceThatCalled.index !== undefined ? (
          <Link to={`/races/${this.state.raceThatCalled.index}`}>
            <p>Back to {this.state.raceThatCalled.name} information</p>
          </Link>
        ) : (
          <span />
        )} */}

        <h1>Bonus: {this.props.bonus.full_name}</h1>

        <h3>Description</h3>
        {this.props.bonus.desc !== undefined ? (
          this.props.bonus.desc.map((element, index) => {
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
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bonus: state.dndData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getApiData: (searchApi) => dispatch(getApiData(searchApi)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bonus)
