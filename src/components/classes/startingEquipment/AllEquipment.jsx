import React, { Component } from "react";
import { Link } from "react-router-dom"
import axios from "axios";

class AllEquipment extends Component {
    state = {
        equipment: []
    }
    async componentDidMount () {
        try {
            const { data } = await axios.get( `https://www.dnd5eapi.co/api/equipment/` )
            this.setState( {
                equipment: data.results
            } )
        } catch ( error ) {
            console.log( error )
        }
    }
    render () {
        if ( this.state.equipment === undefined ) {
            return ( <h1>Loading</h1> )
        }
        return (
            <div>
                <h1>Equipment</h1>
                {this.state.equipment !== undefined && <div>
                    {this.state.equipment.map( (item, index) => {
                        return(
                            <Link to = {`/equipment/${item.index}`}><h3>{item.name}</h3></Link>
                        )
                    })}
                    </div>}
                <footer>If page didn't load refresh the page</footer>
            </div>
        )
    }
}

export default AllEquipment;