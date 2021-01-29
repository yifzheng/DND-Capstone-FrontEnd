import axios from "axios";
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getApiData } from "../../../../../redux/reducers/index"
import Choices from "./Choices";
import Proficiencies from "./Proficiencies";
import SavingThrows from "./SavingThrows";
import SpellCasting from "./SpellCasting";
import Subclass from "./Subclass";

import "../../../../../css/individualclass.css"
class IndividualClass extends Component {
    constructor ( props ) {
        super( props );

        /* this.state = {
            name: '',
            hit_die: '',
            p_choices: [],
            proficiencies: [],
            saving_throws: [],
            starting_equipment: '',
            class_levels: '',
            subclasses: [],
            spellCasting: {}
        } */
    }

    async componentDidMount () {
        try {
            console.log( "component did mount " + this.props )
            let url = `classes/${this.props.match.params.index}`;
            await this.props.getApiData( url );
        } catch ( error ) {
            console.log( error );
        }

    }

    render () {
        console.log( `this is the rendering for the individual class` )
        console.log( this.props )
        if ( !this.props.class.subclasses ) {
            return <h1>Loading</h1>
        }
        return (
            <div id="class-info">
                <Link to={ `/classes` } style={ { textDecoration: 'none' } }><h3 id = "back">Back to Classes Information</h3></Link>
                <h1 id="class-name">{ this.props.class.name }</h1>
                <h2 id="hit-die">Hit Die: { this.props.class.hit_die }</h2>
                <div id = "class-etc"> <Link to={ `/starting-equipment/${this.props.match.params.index}` } style={ { textDecoration: 'none' } }><h2>{"--> "}Starting Equipment{" <--"}</h2></Link>
                    <Link to={ `/class/${this.props.match.params.index}/levels` } style={ { textDecoration: 'none' } }><h2>{"--> "}Class Levels{" <--"}</h2></Link>
                    { this.props.class.spells && <Link to={ `/classSpells/${this.props.match.params.index}/spells` } style={ { textDecoration: 'none' } }><h2>{ this.props.class.name }{"--> "} Class Spells{" <--"}</h2></Link> }</div>
                <div className="p_choices">
                    <h2>--Proficiency Choices--</h2>
                    <div className = "all-p-choices">
                        { this.props.class.proficiency_choices !== undefined && this.props.class.proficiency_choices.map( ( item, index ) => {
                        return (
                            <Choices key={ index } choose={ item.choose } from={ item.from } />
                        )
                    } ) }
                    </div>
                    
                </div>
                <div className="proficiencies">
                    <h2 id="proficiency">--Proficiencies--</h2>
                    { this.props.class.proficiencies !== undefined && this.props.class.proficiencies.map( ( item, index ) => {
                        return (
                            <Proficiencies key={ index } name={ item.name } classIndex={ item.index } />
                        )
                    } ) }
                </div>
                <div className="saving-throws">
                    <h2>--Saving Throws-- </h2>
                    <div id = "saving-throws-container">
                       { this.props.class.saving_throws !== undefined && this.props.class.saving_throws.map( ( item, index ) => {
                        return (
                            <SavingThrows key={ index } name={ item.name } classIndex={ item.index } />
                        )
                    } ) } 
                    </div>
                    
                </div>

                <div className="subclasses">
                    <h2>--Sub-Classes--</h2>
                    { this.props.class.subclasses !== undefined && this.props.class.subclasses.map( ( item, index ) => {
                        return (
                            <Subclass key={ index } name={ item.name } classIndex={ item.index } />
                        )
                    } ) }
                </div>
                {this.props.class.spellcasting !== undefined && ( this.props.class.spellcasting ?
                    <div className="spellcasting">
                        <h2>--Spell Casting ability--</h2>
                        <SpellCasting info={ this.props.class.spellcasting.info } level={ this.props.class.spellcasting.level } spellcasting_ability={ this.props.class.spellcasting.spellcasting_ability } />
                    </div> :
                    <div className='no-spell-casting'> <h2>No Spell Casting for this class</h2></div> ) }
                {/* <Link to={ `/starting-equipment/${this.props.match.params.index}` } style={ { textDecoration: 'none' } }><h2>Starting Equipment</h2></Link>
                <Link to={ `/class/${this.props.match.params.index}/levels` } style={ { textDecoration: 'none' } }><h2>Class Levels</h2></Link>
                {this.props.class.spells && <Link to={ `/classSpells/${this.props.match.params.index}/spells` } style={ { textDecoration: 'none' } }><h2>{ this.props.class.name } Class Spells</h2></Link> } */}
            </div>
        )
    }

}

const mapStateToProps = ( state ) => {
    console.log( `Map state to props for individual class ${state.dndData}` )
    return {
        class: state.dndData,
    }
}

const mapDispatchToProps = ( dispatch ) => {
    console.log( `Map dispatch to props for individiual class` );
    return {
        getApiData: ( url ) => dispatch( getApiData( url ) ),
    }
}
export default connect( mapStateToProps, mapDispatchToProps )( IndividualClass );