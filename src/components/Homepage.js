import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllClasses } from '../redux/reducers'

import "./homepage.css";
class Homepage extends Component {
  async componentDidMount() {
    await this.props.getAllClasses()
  }
  render() {
    console.log('classes', this.props.classes)
    return (
      <div className = "homepage">
        <h1>Homepage Component</h1>
      </div>
    )
  }
}
const mapState = (state) => {
  return {
    classes: state.classes,
  }
}

const mapDispatch = (dispatch) => {
  return {
    getAllClasses: () => dispatch(getAllClasses()),
  }
}
export default connect(mapState, mapDispatch)(Homepage)

// we should get the values on the "create your chara" page b/c
// if the user refreshes on that page, state will be reset and
// the options will be blank
