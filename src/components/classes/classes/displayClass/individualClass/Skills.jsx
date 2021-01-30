import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { getApiData } from '../../../../../redux/reducers'
import Skill from './Skill'
import "../../../../../css/individualskill.css"
class Skills extends React.Component {
  state = {
    skills: {},
    index: '',
  }
  async componentDidMount() {
    try { 
      let url = `proficiencies/${this.props.match.params.index}`  
      const data = await axios.get(`https://www.dnd5eapi.co/api/${url}`)
      this.setState({
        skills: data.data,
        index: this.props.match.params.index,
      })

    } catch (error) {
      console.log(error)
    }
  }

  render() {
    /* if ( this.props.skills.references != undefined ) {
            return (
                <h1>Loading</h1>
            )
        } */
    return (
      <div id = "characyer-skill-contain">
        <div id = "indiv-skill-container">
        <h1 className="indiv-skill-name">{this.state.skills.name}</h1>
        {this.state.skills.references !== undefined &&
          this.state.skills.references.map((item, index) => {
            return <Skill key={index} index={item.index} />
          })}
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    /*  skills: state.dndData, */
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getApiData: (url) => dispatch(getApiData(url)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Skills)
