import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import DisplayClass from "./DisplayClass"

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
        console.log( `this is the rendering for the features` )
        console.log( this.props )
        console.log(this.state.class)
        {console.log("About to go to displayfeature")}
        return (
            <div className="class-container">
                <h1>Starting Equipments</h1>
                {
                    this.state.class.map( ( item, ind ) => {
                        return (
                            <DisplayClass key = {ind} name={ item.class } index={ item.index } />
                        )
                    } )
                }
            </div>
        )
    }
}

export default StartingEqupments;