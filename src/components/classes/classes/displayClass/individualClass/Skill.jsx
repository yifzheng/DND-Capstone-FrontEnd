import React from "react";
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from "react-router-dom"
import { getApiData } from "../../../../../redux/reducers"

class Skill extends React.Component {
    state = {
        skills: {}
    }
    async componentDidMount () {
        try {
            console.log( "About to fetch data from api" )
            const data = await axios.get( `https://www.dnd5eapi.co/api/skills/${this.props.index}` );
            console.log( "got data from api", data )
            this.setState( {
                skills: data.data,
            } )
            setTimeout( console.log( this.state.skills ), 2000 )
        } catch ( error ) {
            console.log( error )
        }
    }
    render () {
        console.log( this.state.skills )
        return (
            <div>
                <h2>Description</h2>
                {this.state.skills.desc &&
                    this.state.skills.desc.map( ( item, index ) => {
                        return (
                            <p key={ index }> {item }</p>
                        )
                    } )
                }
                <h2>Ability Score:</h2>
                {this.state.skills.ability_score &&
                    <h3>Name : <Link to = {`/bonus/${this.state.skills.ability_score.index}`}>{this.state.skills.ability_score.name }</Link></h3>
                }
            </div>
        )
    }
}
const mapStateToProps = ( state ) => {
    return {
        /* skills: state.dndData, */
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        getApiData: ( url ) => dispatch( getApiData( url ) ),
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( Skill );