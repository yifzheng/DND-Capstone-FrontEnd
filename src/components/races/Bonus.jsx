import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getApiData } from '../../redux/reducers'

class Bonus extends Component {
  componentDidMount = () => {
    let bonus = 'ability-scores/' + this.props.match.params.bonus
    this.props.getApiData(bonus)
  }

  render() {
    console.log('bonus url param', this.props.match.params.bonus)
    console.log(this.props.bonus)
    return (
      <div>
        <h1>Bonus</h1>

        <h3>{this.props.bonus.full_name}</h3>
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
