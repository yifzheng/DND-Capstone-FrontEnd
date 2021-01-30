import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getApiData } from '../../../../../redux/reducers/index'

import "../../../../../css/classlevels.css"
class ClassLevels extends Component {
  constructor ( props ) {
    super( props )

    this.state = {
      array: [],
    }
  }

  async componentDidMount () {
    try {

      let url = `classes/${this.props.match.params.index}/levels`
      await this.props.getApiData( url )
      const { data } = await axios.get( `https://www.dnd5eapi.co/api/${url}` )
      this.setState( {
        array: data
      } )
    } catch ( error ) {
      console.log( error )
    }
  }

  render () {
    console.log(this.state.array)
    console.log(this.props.class)
    if ( !this.state.array.length ) {
      return <h1>Loading</h1>
    }
    return (
      <div id="class-level-container">
        <Link
          to={ `/class/${this.props.match.params.index}` }
          style={ { textDecoration: 'none' } }
        >
          <h3 id="back">
            Back to { this.props.match.params.index } Information
          </h3>
        </Link>
        <h1 className="class-level-name">
          { this.props.match.params.index.charAt( 0 ).toUpperCase() }
          { this.props.match.params.index.substring( 1 ) }
        </h1>

        { this.state.array.map( ( item, index ) => {
          return (
            <div id="class-level-card">
              <div key={ index } className={ `level-${item.level}` }>
                <h2 className="fix-h1-h2-h3-h4">Level : { item.level }</h2>
                 { item.ability_score_bonuses !== undefined && (
                  <h2 className="fix-h1-h2-h3-h4">
                    Ability-Score Bonus : {item.ability_score_bonuses }
                  </h2>
                ) }
                { item.prof_bonus !== undefined && (
                  <h2 className="fix-h1-h2-h3-h4">
                    Proficiency Bonus : {item.prof_bonus }
                  </h2>
                ) }
                { item.feature_choices !== undefined && (
                  <div classname="feature-choices">
                    <h2 className="fix-h1-h2-h3-h4">--Feature Choices--</h2>
                    <div id="indiv-feature-choice">
                      { item.feature_choices.map( ( item, index ) => {
                        return (
                          <Link
                            to={ `/feature/${item.index}` }
                            style={ { textDecoration: 'none' } }
                          >
                            <h3 className="fix-h1-h2-h3-h4" key={ index }>
                              { item.name }
                            </h3>
                          </Link>
                        )
                      } ) }
                    </div>
                  </div>
                ) }
                { item.features !== undefined && (
                  <div>
                    <h2 className="fix-h1-h2-h3-h4">--Features--</h2>
                    <div id="indiv-feature-name">
                      { item.features.map( ( item, index ) => {
                        return (
                          <Link
                            to={ `/feature/${item.index}` }
                            style={ { textDecoration: 'none' } }
                          >
                            <h3 className="fix-h1-h2-h3-h4" key={ index }>
                              { item.name }
                            </h3>
                          </Link>
                        )
                      } ) }
                    </div>
                  </div>
                ) }
                { item.spellcasting !== undefined && (
                  <div>
                    <h2 className="fix-h1-h2-h3-h4">--Spell Casting--</h2>
                    <div id="spellcasting-flex">
                      { Object.entries( item.spellcasting ).map( ( [ key, value ] ) => {
                        let arr = key.split( '_' ).join( ' ' )
                        return (
                          <h3 className="fix-h1-h2-h3-h4">
                            {arr } : {value }
                          </h3>
                        )
                      } ) }
                    </div>
                  </div>
                ) }
                {/* { item.class_specific !== undefined && (
                  <div>
                    <h2 className="fix-h1-h2-h3-h4">--Class Specific-- </h2>
                    {Object.entries( item.class_specific ).map( ( [ key, value ] ) => {
                      let arr = key.split( '_' ).join( ' ' )
                      return (
                        <h3 className="fix-h1-h2-h3-h4">
                          {arr } : {value }
                        </h3>
                      )
                    } ) }
                  </div>
                ) } */}
                <br></br>
              </div>
            </div>
          )
        } ) }
      </div>
    )
  }
}

const mapStateToProps = ( state ) => {

  return {
    class: state.dndData,
  }
}

const mapDispatchToProps = ( dispatch ) => {

  return {
    getApiData: ( url ) => dispatch( getApiData( url ) ),
  }
}
export default connect( mapStateToProps, mapDispatchToProps )( ClassLevels )
