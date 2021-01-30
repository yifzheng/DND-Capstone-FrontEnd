import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { getApiData } from '../../../../../redux/reducers'
import "../../../../../css/individualskill.css"
class Skill extends React.Component {
  state = {
    skills: {},
  }
  async componentDidMount() {
    try {
   
      const data = await axios.get(
        `https://www.dnd5eapi.co/api/skills/${this.props.index}`
      )
      
      this.setState({
        skills: data.data,
      })

    } catch (error) {
      console.log(error)
    }
  }
  render() {
   
    return (
      <div>
        <h2 className="skill-description-101">Description</h2>
        {this.state.skills.desc &&
          this.state.skills.desc.map((item, index) => {
            return <p key={index}> {item}</p>
          })}
        <h2 className="ability-score-101">Ability Score:</h2>
        {this.state.skills.ability_score && (
          <h3 className="ability-score-101">
            Name :{' '}
            <Link
              to={`/bonus/${this.state.skills.ability_score.index}`}
              style={{ textDecoration: 'none' }}
            >
              {this.state.skills.ability_score.name}
            </Link>
          </h3>
        )}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    /* skills: state.dndData, */
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getApiData: (url) => dispatch(getApiData(url)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Skill)
