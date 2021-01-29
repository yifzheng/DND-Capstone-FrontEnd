import React, { Component } from "react";
import { Link } from "react-router-dom"
import axios from "axios";
import "../../../css/equipment.css";
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
            <div className="all-equipment-container">
                <h1>Equipment</h1>
                <div >
                    { this.state.equipment !== undefined && <div className="all-equipment-card">
                        { this.state.equipment.map( ( item, index ) => {
                            return (
                                <div id = "all-equipment">
                                <Link to={ `/equipment/${item.index}` } style={ { textDecoration: 'none' } }><h3 id ="equipment-name">{ item.name }</h3></Link>
                                </div>
                            )
                        } ) }
                    </div> }
                </div>
            </div>
        )
    }
}

export default AllEquipment;