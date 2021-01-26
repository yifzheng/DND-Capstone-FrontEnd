import axios from "axios";
import React, { Component } from "react";
import { Link } from 'react-router-dom';

import Choices from "./Choices";
import Proficiencies from "./Proficiencies";
import SavingThrows from "./SavingThrows";

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
            spellCasting: []
        }
    }

    async componentDidMount () {
        console.log( `this is the url parameter ${this.props.match.params.index}` )
        let url = `/api/classes/${this.props.match.params.index}`;
        console.log( `name of class name in lower case: ${url}` )
        let { data } = await axios.get( `https://www.dnd5eapi.co${url}` );
        console.log( JSON.stringify( data ) );
        this.setState( {
            name: data.name,
            hit_die: data.hit_die,
            p_choices: data.proficiency_choices,
            proficiencies: data.proficiencies,
            starting_equipment: data.starting_equipment,
            class_levels: data.class_levels,
            subclasses: data.sub,
            saving_throws: data.saving_throws
        } )
    }

    render () {
        console.log( `this is the rendering for the individual class` )
        return (
            <div>
                <h1>{ this.state.name }</h1>
                <h2>Hit Die: { this.state.hit_die }</h2>
                <div className="p_choices">
                    <h2>Proficiency Choices</h2>
                    {this.state.p_choices.map( (item, index) => {
                        return(
                            <Choices key = {index} choose = {item.choose} from = {item.from} />
                        )
                    })}   
                </div>
                <div className= "proficiencies">
                    <h2>Proficiencies</h2>
                {this.state.proficiencies.map( (item, index) => {
                        return(
                            <Proficiencies key = {index} name = {item.name} classIndex = {item.index} />
                        )
                })} 
                </div>
                <div className = "saving-throws">
                    <h2>Saving Throws</h2>
                    <h2>{JSON.stringify(this.state.saving_throws)}</h2>
                    {this.state.saving_throws.map( (item, index) => {
                        return(
                            <SavingThrows key = {index} name = {item.name} classIndex = {index}/>
                        )
                    })}
                </div>
                <Link to = {`/starting-equipment/${this.props.match.params.index}`}><h2>Starting Equipment { this.state.starting_equipment }</h2></Link>
                <h2>Class Levels: { this.state.class_levels }</h2>

            </div>
        )
    }

}

export default IndividualClass;