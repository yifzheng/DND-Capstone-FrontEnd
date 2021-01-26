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

        this.state = {
            name: '',
            hit_die: '',
            p_choices: [],
            proficiencies: [],
            saving_throws: [],
            starting_equipment: '',
            class_levels: '',
            subclasses: [],
            spellCasting: {}
        }
    }

    async componentDidMount () {
        try {
            console.log( `this is the url parameter ${this.props.match.params.index}` )
            let url = `classes/${this.props.match.params.index}`;
            console.log( `name of class name in lower case: ${url}` )
            await this.props.getApiData( url );
            console.log( JSON.stringify( this.props.class ) );
            this.setState( {
                name: this.props.class.name,
                hit_die: this.props.class.hit_die,
                spellCasting: this.props.class.spellcasting,
                p_choices: this.props.class.proficiency_choices,
                proficiencies: this.props.class.proficiencies,
                starting_equipment: this.props.class.starting_equipment,
                class_levels: this.props.class.class_levels,
                subclasses: this.props.class.subclasses,
                saving_throws: this.props.class.saving_throws
            } )
        } catch ( error ) {
            console.log( error );
        }

    }

    render () {
        console.log( `this is the rendering for the individual class` )
        return (
            <div>
                <h1>{ this.state.name }</h1>
                <h2>Hit Die: { this.state.hit_die }</h2>
                <div className="p_choices">
                    <h2>Proficiency Choices</h2>
                    { this.state.p_choices.map( ( item, index ) => {
                        return (
                            <Choices key={ index } choose={ item.choose } from={ item.from } />
                        )
                    } ) }
                </div>
                <div className="proficiencies">
                    <h2>Proficiencies</h2>
                    { this.state.proficiencies.map( ( item, index ) => {
                        return (
                            <Proficiencies key={ index } name={ item.name } classIndex={ item.index } />
                        )
                    } ) }
                </div>
                <div className="saving-throws">
                    <h2>Saving Throws</h2>
                    { this.state.saving_throws.map( ( item, index ) => {
                        return (
                            <SavingThrows key={ index } name={ item.name } classIndex={ item.index } />
                        )
                    } ) }
                </div>
                <Link to={ `/starting-equipment/${this.props.match.params.index}` }><h2>Starting Equipment { this.state.starting_equipment }</h2></Link>
                <Link to={ `/classes/${this.props.match.params.index}/levels` }><h2>Class Levels: { this.state.class_levels }</h2></Link>
                <div className="subclasses">
                    <h2>Sub-Classes</h2>
                    { this.state.subclasses.map( ( item, index ) => {
                        return (
                            <Subclass key={ index } name={ item.name } classIndex={ item.index } />
                        )
                    } ) }
                </div>
                {/* {this.state.spellCasting ?
                    <div className="spellcasting">
                        <SpellCasting info={ this.props.class.spellcasting.info } level={ this.props.class.spellcasting.level } spellcasting_ability={ this.props.class.spellcasting.spellcasting_ability } />
                    </div> :
                    <div className='no-spell-casting'> <h2>No Spell Casting for this class</h2></div> } */}
                <Link to={ `/class/${this.props.match.params.index}/spells` }><h2>{ this.state.name } Class Spells</h2></Link>
            </div>
        )
    }

}

const mapStateToProps = ( state ) => {
    console.log( `Map state to props for individual class` )
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