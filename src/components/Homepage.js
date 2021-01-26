import React, { Component } from 'react'
import {connect } from 'react-redux'
import {getAllClasses} from "../redux/reducers";
class Homepage extends Component {
  async componentDidMount() {
    await this.props.getAllClasses()
  }
  render() {
    console.log("classes",  this.props.classes)
    return (
      <div>
        <h1>Homepage Component</h1>
      </div>
    )
  }
}
const mapState = state => {
  return{
    classes: state.classes
  }
}

const mapDispatch = dispatch => {
  return{
    getAllClasses: () => dispatch( getAllClasses()),
  }
}
export default connect(mapState, mapDispatch)(Homepage)
