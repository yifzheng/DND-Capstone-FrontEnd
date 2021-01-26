import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import DisplayClass from "./displayClass/DisplayClass"

class Classes extends Component {
    constructor ( props ) {
        super( props );

        this.state = {
            classes: []
        }
    }

    async componentDidMount () {
        const { data } = await axios.get( "https://www.dnd5eapi.co/api/classes" );
        console.log( "Class Data from DND API" + JSON.stringify(data.results) );
        this.setState( {
            classes: data.results
        } )
    }

    render () {
        {console.log("About to go to displayclass")}
        return (
            <div className="class-container">
                <h1>Classes</h1>
                
                {
                    this.state.classes.map( ( item, ind ) => {
                        return (
                            <DisplayClass key = {ind} name={ item.name } index={ item.index } />
                        )
                    } )
                }
            </div>
        )
    }
}

export default Classes;