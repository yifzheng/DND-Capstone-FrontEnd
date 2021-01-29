import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getApiData } from '../../../../../redux/reducers/index'

class ClassLevels extends Component {
  constructor(props) {
    super(props)

    this.state = {
      array: [],
    }
  }

  async componentDidMount() {
    try {
      
      let url = `classes/${this.props.match.params.index}/levels`
      await this.props.getApiData(url)
      /* const { data } = await axios.get( `https://www.dnd5eapi.co/api/${url}` )
            this.setState( {
                array: data
            } ) */
    } catch (error) {
      console.log(error)
    }
  }

  render() {

    if (!this.props.class.length) {
      return <h1>Loading</h1>
    }
    return (
      <div>
        <Link
          to={`/class/${this.props.match.params.index}`}
          style={{ textDecoration: 'none' }}
        >
          <h4 className="fix-h1-h2-h3-h4">
            Back to {this.props.match.params.index} Information
          </h4>
        </Link>
        <h1 className="fix-h1-h2-h3-h4">
          {this.props.match.params.index.charAt(0).toUpperCase()}
          {this.props.match.params.index.substring(1)}
        </h1>
        {this.props.class.map((item, index) => {
          return (
            <div key={index} className={`level-${item.level}`}>
              <h2 className="fix-h1-h2-h3-h4">Level : {item.level}</h2>
              {item.ability_score_bonuses >= 0 && (
                <h2 className="fix-h1-h2-h3-h4">
                  Ability-Score Bonus : {item.ability_score_bonuses}
                </h2>
              )}
              {item.prof_bonus >= 0 && (
                <h2 className="fix-h1-h2-h3-h4">
                  Proficiency Bonus : {item.prof_bonus}
                </h2>
              )}
              {item.feature_choices.length !== 0 && (
                <div classname="feature-choices">
                  <h2 className="fix-h1-h2-h3-h4">Feature Choices</h2>
                  {item.feature_choices.map((item, index) => {
                    return (
                      <Link
                        to={`/feature/${item.index}`}
                        style={{ textDecoration: 'none' }}
                      >
                        <h3 className="fix-h1-h2-h3-h4" key={index}>
                          {item.name}
                        </h3>
                      </Link>
                    )
                  })}
                </div>
              )}
              {item.features.length !== 0 && (
                <div>
                  <h2 className="fix-h1-h2-h3-h4">Features</h2>
                  {item.features.map((item, index) => {
                    return (
                      <Link
                        to={`/feature/${item.index}`}
                        style={{ textDecoration: 'none' }}
                      >
                        <h3 className="fix-h1-h2-h3-h4" key={index}>
                          {item.name}
                        </h3>
                      </Link>
                    )
                  })}
                </div>
              )}
              {item.spellcasting !== undefined && (
                <div>
                  <h2 className="fix-h1-h2-h3-h4">Spell Casting</h2>
                  {Object.entries(item.spellcasting).map(([key, value]) => {
                    let arr = key.split('_').join(' ')
                    return (
                      <h3 className="fix-h1-h2-h3-h4">
                        {arr} : {value}
                      </h3>
                    )
                  })}
                </div>
              )}
              {item.class_specific !== undefined && (
                <div>
                  <h2 className="fix-h1-h2-h3-h4">Class Specific </h2>
                  {Object.entries(item.class_specific).map(([key, value]) => {
                    let arr = key.split('_').join(' ')
                    return (
                      <h3 className="fix-h1-h2-h3-h4">
                        {arr} : {value}
                      </h3>
                    )
                  })}
                </div>
              )}
              <br></br>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
 
  return {
    class: state.dndData,
  }
}

const mapDispatchToProps = (dispatch) => {
  
  return {
    getApiData: (url) => dispatch(getApiData(url)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ClassLevels)
