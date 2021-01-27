import axios from "axios";
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getApiData } from "../../../redux/reducers/index"
import Options from "./Options"


class IndividualEquipment extends Component {
    constructor ( props ) {
        super( props );
    }

    async componentDidMount () {
        try {
            console.log( "component did mount " + this.props )
            let url = `starting-equipment/${this.props.match.params.index}`;
            await this.props.getApiData( url );
        } catch ( error ) {
            console.log( error );
        }

    }

    render () {
        console.log( `this is the rendering for the individual class` )
        console.log( this.props )
        if ( !this.props.equipment.class ) {
            return <h1>Loading</h1>
        }
        return (
            <div>
                <Link to={ `/class/${this.props.match.params.index}` }><h4>Back to { this.props.equipment.class.name } Information</h4></Link>
                <h1>Class : { this.props.equipment.class.name }</h1>
                <div className="starting-equip">
                    <h2>Sarting Equipment</h2>
                    { this.props.equipment.starting_equipment.length > 0 ?
                        this.props.equipment.starting_equipment.map( ( item, index ) => {
                            return (
                                <div>
                                    <h3>Quantity: { item.quantity }</h3>
                                    <Link to={ `/equipment/${item.equipment.index}` }><h3>{ item.equipment.name }</h3></Link>
                                </div>
                            )
                        } ) :
                        <div>
                            <h3>This Class Has No Starting Equipment</h3>
                        </div>
                    }
                </div>
                {/* <div className="equip-options">
                    <h2>Starting Equipment Options</h2>
                    {
                        this.props.equipment.starting_equipment_options.length > 0 ?
                            <div>
                                <h3>Choose 1 From: </h3>
                                { this.props.equipment.starting_equipment_options.map( ( item, index ) => {
                                        return(
                                            <Options arr = {item.from}/>
                                        )
                                } ) }
                            </div>:
                            <div>
                                <h3>This Class Has No Starting Equipment Options</h3>
                                </div>
                    }
                </div> */}
            </div>
        )
    }

}

const mapStateToProps = ( state ) => {
    console.log( `Map state to props for individual sub class ${state.dndData}` )
    return {
        equipment: state.dndData,
    }
}

const mapDispatchToProps = ( dispatch ) => {
    console.log( `Map dispatch to props for individiual sub class` );
    return {
        getApiData: ( url ) => dispatch( getApiData( url ) ),
    }
}
export default connect( mapStateToProps, mapDispatchToProps )( IndividualEquipment );