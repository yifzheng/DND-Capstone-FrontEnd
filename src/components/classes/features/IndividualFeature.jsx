import axios from "axios";
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getApiData } from "../../../redux/reducers/index"
import FeatureChoice from "./FeatureChoice";
import "../../../css/individualfeature.css"

class IndividualFeature extends Component {
    constructor ( props ) {
        super( props );
    }

    async componentDidMount () {
        try {
            let url = `features/${this.props.match.params.index}`;
            await this.props.getApiData( url );
        } catch ( error ) {
            console.log( error );
        }

    }

    render () {
        
        if ( !this.props.feature.class ) {
            return <h1>Loading</h1>
        }
        return (
            <div id = "indiv-feature-container">
                <Link to={ `/class/${this.props.feature.class.name.toLowerCase()}` } style={ { textDecoration: 'none' } }><h3 id="back">Back to { this.props.feature.class.name.toLowerCase() } Information</h3></Link>
                <div id="individual-feature">
                    <h1 id="feature-name">{ this.props.feature.name }</h1>
                    <h2 id="feature-class">Class: { this.props.feature.class.name }</h2>
                    { this.props.feature.level !== undefined && <h2 id="feature-level">Level: { this.props.feature.level }</h2> }
                    <div id="prerequisite-container">
                        <h2>--Prerequisites--</h2>
                        { this.props.feature.prerequisites !== undefined ?
                            <div id="prerequisites">
                                {
                                    this.props.feature.prerequisites.map( item => {
                                        return (
                                            <h3>{ item.type }</h3>
                                        )
                                    } )
                                }
                            </div>
                            :
                            <div id="prerequisites">
                                <h3>This Feature Has No Prerequisites</h3>
                            </div>
                        }
                    </div>
                    <div className="feature-desc">
                        <h2>--Description--</h2>
                        <div id="description">
                            { this.props.feature.desc !== undefined &&
                                this.props.feature.desc.map( ( item, index ) => {
                                    return (
                                        <p key={ index }>{ item }</p>
                                    )
                                } )
                            }
                        </div>
                    </div>

                    <div className="feature-choices">
                        <h2>--Choices--</h2>
                        { this.props.feature.choice !== undefined ?
                            <div id="feature-choice">
                                <h3>Choose { this.props.feature.choice.choose } from:</h3>
                                <FeatureChoice from={ this.props.feature.choice.from } />
                            </div>
                            :
                            <div id="feature-choice" >
                                <h3>This Feature Has No Choices</h3>
                            </div>
                        }
                    </div >
                </div>
            </div >
        )
    }

}

const mapStateToProps = ( state ) => {
    
    return {
        feature: state.dndData,
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        getApiData: ( url ) => dispatch( getApiData( url ) ),
    }
}
export default connect( mapStateToProps, mapDispatchToProps )( IndividualFeature );