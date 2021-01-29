import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { getApiData } from '../../../../../redux/reducers'
import Skill from './Skill'

class Skills extends React.Component {
  state = {
    skills: {},
    index: '',
  }
  async componentDidMount() {
    try {
      console.log('Skills component mounted', this.props.match.params.index)
      let url = `proficiencies/${this.props.match.params.index}`
      console.log('About to fetch data from api')
      const data = await axios.get(`https://www.dnd5eapi.co/api/${url}`)
      console.log('got data from api', data)
      this.setState({
        skills: data.data,
        index: this.props.match.params.index,
      })
      setTimeout(console.log(this.state.skills), 2000)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    /* console.log( this.props.skills.references ) */
    /* if ( this.props.skills.references != undefined ) {
            return (
                <h1>Loading</h1>
            )
        } */
    return (
      <div>
        <h1 className="fix-h1-h2-h3-h4">{this.state.skills.name}</h1>
        {this.state.skills.references !== undefined &&
          this.state.skills.references.map((item, index) => {
            return <Skill key={index} index={item.index} />
          })}
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
