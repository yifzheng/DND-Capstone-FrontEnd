import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import DisplayFeatures from "./DisplayFeatures"
import "../../../css/feature.css"

class Features extends Component {
    constructor ( props ) {
        super( props );

        this.state = {
            features: []
        }
    }

    async componentDidMount () {
        const { data } = await axios.get( "https://www.dnd5eapi.co/api/features" );
        this.setState( {
            features: data.results
        } )
    }

    render () {
        console.log( `this is the rendering for the features` )
        console.log( this.props )
        console.log( this.state.features )
        { console.log( "About to go to displayfeature" ) }
        return (
            <div className="features-container">
                <h1>Features</h1>
                <div className="feature-card">
                    {
                        this.state.features.map( ( item, ind ) => {
                            return (
                                <DisplayFeatures key={ ind } name={ item.name } index={ item.index } />
                            )
                        } )
                    }
                </div>
            </div>
        )
    }
}

export default Features;