import React, { Component } from 'react';
import axios from 'axios';


import DisplayClass from "./DisplayClass"
import "../../../css/startingEquipment.css"
class StartingEqupments extends Component {
    constructor ( props ) {
        super( props );

        this.state = {
            class: []
        }
    }

    async componentDidMount () {
        const { data } = await axios.get( "https://www.dnd5eapi.co/api/starting-equipment" );
        this.setState( {
            class: data.results
        } )
    }

    render () {
        return (
            <div className="equipment-container">
                <h1>Starting Equipments</h1>
                <div className="equipment-card">
                    {
                        this.state.class.map( ( item, ind ) => {
                            return (
                                <DisplayClass key={ ind } name={ item.class } index={ item.index } />
                            )
                        } )
                    }
                </div>

            </div>
        )
    }
}

export default StartingEqupments;