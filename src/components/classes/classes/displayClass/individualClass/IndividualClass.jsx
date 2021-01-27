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
        console.log(this.props)
        if (!this.props.class.subclasses){
            return <h1>Loading</h1>
        }
        return (
            <div>
                <Link to = {`/classes`}><h4>Back to Classes Information</h4></Link>
                <h1>{ this.props.class.name }</h1>
                <h2>Hit Die: { this.props.class.hit_die }</h2>
                <div className="p_choices">
                    <h2>Proficiency Choices</h2>
                    { this.props.class.proficiency_choices.map( ( item, index ) => {
                        return (
                            <Choices key={ index } choose={ item.choose } from={ item.from } />
                        )
                    } ) }
                </div>
                <div className="proficiencies">
                    <h2>Proficiencies</h2>
                    { this.props.class.proficiencies.map( ( item, index ) => {
                        return (
                            <Proficiencies key={ index } name={ item.name } classIndex={ item.index } />
                        )
                    } ) }
                </div>
                <div className="saving-throws">
                    <h2>Saving Throws: </h2>
                    { this.props.class.saving_throws.map( ( item, index ) => {
                        return (
                            <SavingThrows key={ index } name={ item.name } classIndex={ item.index } />
                        )
                    } ) }
                </div>
                <Link to={ `/starting-equipment/${this.props.match.params.index}` }><h2>Starting Equipment</h2></Link>
                <Link to={ `/class/${this.props.match.params.index}/levels` }><h2>Class Levels</h2></Link>
                <div className="subclasses">
                    <h2>Sub-Classes</h2>
                    { this.props.class.subclasses.map( ( item, index ) => {
                        return (
                            <Subclass key={ index } name={ item.name } classIndex={ item.index } />
                        )
                    } ) }
                </div>
                {this.props.class.spellcasting ?
                    <div className="spellcasting">
                        <SpellCasting info={ this.props.class.spellcasting.info } level={ this.props.class.spellcasting.level } spellcasting_ability={ this.props.class.spellcasting.spellcasting_ability } />
                    </div> :
                    <div className='no-spell-casting'> <h2>No Spell Casting for this class</h2></div> }
                {this.props.class.spells && <Link to={ `/classSpells/${this.props.match.params.index}/spells` }><h2>{ this.props.class.name} Class Spells</h2></Link>}
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