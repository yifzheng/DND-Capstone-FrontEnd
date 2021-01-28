import React, { Component } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getApiData } from "../../../../../redux/reducers/index"


class ClassLevels extends Component {
    constructor ( props ) {
        super( props );

        this.state = {
            array: []
        }
    }

    async componentDidMount () {
        try {
            console.log( "component did mount " + this.props )
            let url = `classes/${this.props.match.params.index}/levels`;
            await this.props.getApiData( url );
            /* const { data } = await axios.get( `https://www.dnd5eapi.co/api/${url}` )
            console.log( data );
            this.setState( {
                array: data
            } ) */
        } catch ( error ) {
            console.log( error );
        }

    }

    render () {
        console.log( `this is the rendering for the individual class` )
        console.log( this.props.class )

        if ( !this.props.class.length ) {
            return <h1>Loading</h1>
        }
        return (
            <div>
                <Link to={ `/class/${this.props.match.params.index}` }style={{ textDecoration: 'none' }}><h4>Back to { this.props.match.params.index } Information</h4></Link>
                <h1>{ this.props.match.params.index.charAt( 0 ).toUpperCase() }{ this.props.match.params.index.substring( 1 ) }</h1>
                {

                    this.props.class.map( ( item, index ) => {
                        return (
                            <div key={ index } className={ `level-${item.level}` }>
                                <h2>Level : { item.level }</h2>
                                {item.ability_score_bonuses >= 0 && <h2>Ability-Score Bonus : { item.ability_score_bonuses }</h2> }
                                {item.prof_bonus >= 0 && <h2>Proficiency Bonus : { item.prof_bonus }</h2> }
                                {item.feature_choices.length !== 0 && <div classname="feature-choices">
                                    <h2>Feature Choices</h2>
                                    { item.feature_choices.map( ( item, index ) => {
                                        return (
                                            <Link to={ `/feature/${item.index}` }style={{ textDecoration: 'none' }}><h3 key={ index }>{ item.name }</h3></Link>
                                        )
                                    } ) }
                                </div> }
                                {item.features.length !== 0 && <div>
                                    <h2>Features</h2>
                                    { item.features.map( ( item, index ) => {
                                        return (
                                            <Link to={ `/feature/${item.index}` }style={{ textDecoration: 'none' }}><h3 key={ index }>{ item.name }</h3></Link>
                                        )
                                    } ) }
                                </div> }
                                {item.spellcasting !== undefined && <div>
                                    <h2>Spell Casting</h2>
                                    {
                                        Object.entries( item.spellcasting ).map( ( [ key, value ] ) => {
                                            let arr = key.split( "_" ).join( " " );
                                            return (
                                                <h3>{ arr } : {value }</h3>
                                            )
                                        } )
                                    }
                                </div> }
                                {item.class_specific !== undefined && <div>
                                    <h2>Class Specific </h2>
                                    {
                                        Object.entries( item.class_specific ).map( ( [ key, value ] ) => {
                                            let arr = key.split( "_" ).join( " " );
                                            return (
                                                <h3>{ arr } : {value }</h3>
                                            )
                                        } )
                                    }
                                </div> }
                                <br></br>
                            </div>
                        )
                    } )
                }
            </div>

        )
    }

}

const mapStateToProps = ( state ) => {
    console.log( `Map state to props for individual class ${state.dndData}` )
    return {
        class: state.dndData,
    }
}

const mapDispatchToProps = ( dispatch ) => {
    console.log( `Map dispatch to props for individiual class` );
    return {
        getApiData: ( url ) => dispatch( getApiData( url ) ),
    }
}
export default connect( mapStateToProps, mapDispatchToProps )( ClassLevels );