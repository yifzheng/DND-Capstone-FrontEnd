import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllUserCharacters } from "../../../redux/reducers";

import { Link } from 'react-router-dom'
class DisplayUserCharacters extends Component {
    constructor ( props ) {
        super( props )
    }

    async componentDidMount () {
        try {
            await this.props.getAllUserCharacters( this.props.id );

        } catch ( error ) {
            console.log( error )
        }
    }
    render () {
        return (
            <div id="user-character-container">
                <h1>Characters</h1>
                <div id="usercharacter">
                    { this.props.characters !== undefined ?
                        this.props.characters.map( ( item, index ) => {
                            return (
                                <Link to={ `/character/${item.id}` } style={{ textDecoration: 'none' }}><h3 id = "character-name" key={ index }>{ item.name }</h3></Link>
                            )
                        } ) : <h1>Loading</h1>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        characters: state.characters.characters,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllUserCharacters: ( id ) => dispatch( getAllUserCharacters( id ) ),
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( DisplayUserCharacters );