import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllCharacters } from "../../redux/reducers";

import { Link } from 'react-router-dom'
class Builds extends Component {
    constructor ( props ) {
        super( props )

    }

    async componentDidMount () {
        console.log( "Build component Mounted" )
        try {
            await this.props.getAllCharacters();

        } catch ( error ) {
            console.log( error )
        }
    }
    render () {
        console.log( this.props.characters )
        return (
            <div>
                <h1>Characters</h1>
                { this.props.characters !== undefined ?
                    this.props.characters.map( ( item, index ) => {
                        return (
                            <div id={ item.id }>
                                <Link to={ `/character/${item.id}` }><h3 key={ index }>{ item.name }</h3></Link>
                            </div>
                        )
                    } ) : <h1>Loading</h1>
                }
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
        getAllCharacters: () => dispatch( getAllCharacters() ),
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( Builds );