import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom"


class ClassSpells extends React.Component {
    state = {
        spells: {}
    }
    async componentDidMount () {
        try {
            console.log( "About to fetch data from api" )
            const data = await axios.get( `https://www.dnd5eapi.co/api/classes/${this.props.match.params.index}/spells` );
            console.log( "got data from api", data )
            this.setState( {
                spells: data.data,
            } )
            setTimeout( console.log( this.state.spells ), 2000 )
        } catch ( error ) {
            console.log( error )
        }
    }
    render () {
        console.log( this.state.spells )
        return (
            <div>
                <h1>{ this.props.match.params.index[ 0 ].toUpperCase() }{ this.props.match.params.index.substring( 1 ) } Class Spells</h1>
                {
                    this.state.spells.results &&
                    <div>
                        {this.state.spells.results.map( (item, index) => {
                            return(
                                <h3 key = {index}>Spell: <Link to = {`/spells/${item.index}`}>{item.name}</Link></h3>
                            )
                        })}
                    </div>
                }
            </div>
        )
    }
}


export default ClassSpells;