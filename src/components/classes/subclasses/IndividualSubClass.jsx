import axios from "axios";
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getApiData } from "../../../redux/reducers/index"

import SubClassSpells from "./SubClassSpells";
import "../../../css/individualsubclass.css"

class IndividualSubClass extends Component {
    constructor ( props ) {
        super( props );
    }

    async componentDidMount () {
        try {

            let url = `subclasses/${this.props.match.params.index}`;
            await this.props.getApiData( url );
        } catch ( error ) {
            console.log( error );
        }

    }

    render () {
 
        if ( !this.props.class.class ) {
            return <h1>Loading</h1>
        }
        return (
            <div>
                <Link to={ `/class/${this.props.class.class.index}` } style={ { textDecoration: 'none' } }><h3 id = "back">Back to { this.props.class.class.name } Information</h3></Link>
                <div id = "indiviudal-subclass-container">
                <h1 id="subclasses-name">{ this.props.class.name }</h1>
                <h2 id="subclass-class-name">Class: { this.props.class.class.name }</h2>
                <h2 id="subclass-falvor">Sub Class Flavor: { this.props.class.subclass_flavor }</h2>
                <div className="subclass-desc">
                    <h2>--Sub Class Desciption--</h2>
                    <div id = "subclass-description">
                        { this.props.class.desc.map( ( item ) => {
                            return (
                                <p>{ item }</p>
                            )
                        } ) }
                    </div>

                </div>
                <div className = "subclass-spells">
                    <h2>--Spells--</h2>
                    { this.props.class.spells ?
                        <div id = "subclass-spells">
                            { this.props.class.spells.map( ( item, index ) => {
                                return (
                                    <SubClassSpells key={ index } prerequisites={ item.prerequisites } spell={ item.spell } />
                                )
                            } ) }
                        </div>
                        :
                        <div id = "subclass-spells">
                            <h3>There are no spells for this subclass</h3>
                        </div>
                    }
                </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = ( state ) => {
    
    return {
        class: state.dndData,
    }
}

const mapDispatchToProps = ( dispatch ) => {
    
    return {
        getApiData: ( url ) => dispatch( getApiData( url ) ),
    }
}
export default connect( mapStateToProps, mapDispatchToProps )( IndividualSubClass );