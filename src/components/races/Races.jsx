import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getApiData } from '../../redux/reducers'

class races extends Component {
  componentDidMount = async () => {
    const response = await this.props.getApiData('proficiencies') // the first slash is redundant
    console.log('API DATA:', response)
  }

  render() {
    return (
      <div>
        <p>races component</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dndData: state.dndData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getApiData: (searchApi) => dispatch(getApiData(searchApi)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(races)
