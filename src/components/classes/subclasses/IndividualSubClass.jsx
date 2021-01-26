import axios from "axios";
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getApiData } from "../../../redux/reducers/index"

import SubClassSpells from "./SubClassSpells";


class IndividualSubClass extends Component {
    constructor ( props ) {
        super( props );
    }

    async componentDidMount () {
        try {
            console.log( "component did mount " + this.props )
            let url = `subclasses/${this.props.match.params.index}`;
            await this.props.getApiData( url );
        } catch ( error ) {
            console.log( error );
        }

    }

    render () {
        console.log( `this is the rendering for the individual class` )
        console.log( this.props )
        if (!this.props.class.class){
            return <h1>Loading</h1>
        }
        return (
            <div>
                <h1>{ this.props.class.name }</h1>
                <h2>Sub Class Flavor: { this.props.class.subclass_flavor }</h2>
                <div className="subclass-desc">
                    <h2>Sub Class Desciption</h2>
                    { this.props.class.desc.map( ( item ) => {
                        return (
                            <h3>{ item }</h3>
                        )
                    } ) }
                </div>
                <div>
                    <h2>Spells</h2>
                    { this.props.class.spells ?
                        <div>
                            {this.props.class.spells.map( (item, index) => {
                                return(
                                    <SubClassSpells key = {index} prerequisites = {item.prerequisites} spell = {item.spell} />
                                )
                            })}
                        </div>
                        :
                        <div>
                            <h3>There are no spells for this subclass</h3>
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
        class: state.dndData,
    }
}

const mapDispatchToProps = ( dispatch ) => {
    console.log( `Map dispatch to props for individiual sub class` );
    return {
        getApiData: ( url ) => dispatch( getApiData( url ) ),
    }
}
export default connect( mapStateToProps, mapDispatchToProps )( IndividualSubClass );