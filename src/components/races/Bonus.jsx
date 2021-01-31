import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getApiData } from '../../redux/reducers'

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
        <div className="click-away-container">
          {/* If page refreshes, then race that called this is undefined b/c its overwritten, thus it shows nothing */}
          {/* {this.state.raceThatCalled.index !== undefined ? (
          <Link to={`/races/${this.state.raceThatCalled.index}`}>
            Back to {this.state.raceThatCalled.name} information
          </Link>
        ) : (
          <span />
        )} */}

          <div id="special-case-click-away-title">
            <h1>Bonus: {this.props.bonus.full_name}</h1>
          </div>

          <div className="click-away-info-container">
            <div className="click-away-info-title">
              <h3>Description</h3>
            </div>
            <div className="click-away-info">
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
          </div>
        </div>
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
