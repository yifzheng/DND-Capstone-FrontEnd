import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import DisplayClass from "./displayClass/DisplayClass"

class Features extends Component {
    constructor ( props ) {
        super( props );

        this.state = {
            classes: []
        }
    }

    async componentDidMount () {
        const { data } = await axios.get( "https://www.dnd5eapi.co/api/features" );
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
                            <DisplayFeatures key = {ind} name={ item.name } index={ item.index } />
                        )
                    } )
                }
            </div>
        )
    }
}

export default Features;