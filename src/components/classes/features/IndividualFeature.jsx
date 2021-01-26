import axios from "axios";
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getApiData } from "../../../redux/reducers/index"
import FeatureChoice from "./FeatureChoice";


class IndividualFeature extends Component {
    constructor ( props ) {
        super( props );
    }

    async componentDidMount () {
        try {
            console.log( "component did mount " + this.props )
            let url = `features/${this.props.match.params.index}`;
            await this.props.getApiData( url );
        } catch ( error ) {
            console.log( error );
        }

    }

    render () {
        console.log( `this is the rendering for the individual class` )
        console.log( this.props )
        if ( !this.props.feature.class ) {
            return <h1>Loading</h1>
        }
        return (
            <div>
                <Link to={ `/class/${this.props.feature.class.name.toLowerCase()}` }><h4>Back to { this.props.feature.class.name.toLowerCase() } Information</h4></Link>
                <h1>{ this.props.feature.name }</h1>
                <h2>Class: { this.props.feature.class.name }</h2>
                <h2>Level: { this.props.feature.level }</h2>
                <div>
                    <h2>Prerequisites</h2>
                    { this.props.feature.prerequisites.length > 0 ?
                        <div>
                            {
                                this.props.feature.prerequisites.map( item => {
                                    return(
                                        <h3>{item}</h3>
                                    )
                                })
                            }
                        </div>
                        :
                        <div>
                            <h3>This Feature Has No Prerequisites</h3>
                        </div>
                    }
                </div>
                <div className = "feature-desc">
                    <h2>Description</h2>
                    {
                        this.props.feature.desc.map( (item, index) => {
                            return(
                                <h3 key = {index}>{item}</h3>
                            )
                        })
                    }
                </div>
                 <div className = "feature-choices">
                    <h2>Choices</h2>
                    { this.props.feature.choice ?
                        <div>
                            <h3>Choose {this.props.feature.choice.choose} from:</h3>
                            <FeatureChoice from = {this.props.feature.choice.from} />
                        </div>
                        :
                        <div>
                            <h3>This Feature Has No Choices</h3>
                        </div>
                    }
                </div>
            </div>
        )
    }

}

const mapStateToProps = ( state ) => {
    console.log( `Map state to props for individual sub class ${state.dndData}` )
    return {
        feature: state.dndData,
    }
}

const mapDispatchToProps = ( dispatch ) => {
    console.log( `Map dispatch to props for individiual sub class` );
    return {
        getApiData: ( url ) => dispatch( getApiData( url ) ),
    }
}
export default connect( mapStateToProps, mapDispatchToProps )( IndividualFeature );