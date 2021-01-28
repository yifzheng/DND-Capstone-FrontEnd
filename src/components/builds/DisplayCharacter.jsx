import React, { Component } from "react";
import { connect } from "react-redux";
import { getSingleCharacter } from "../../redux/reducers";

class DisplayCharacter extends Component {
    constructor ( props ) {
        super( props )

    }

    async componentDidMount () {
        console.log( "Build component Mounted" )
        try {
            await this.props.getSingleCharacter( this.props.match.params.id );
        } catch ( error ) {
            console.log( error )
        }
    }
    /* 
        "name": "Leonardo Davinci",
    "class": "bard",
    "race": "elf",
    "gender": "male",
    "armorClass": 10,
    "speed": 30,
    "skill1": "history",
    "skill2": "religion",
    "skill3": null,
    "skill4": null,
    "str": 14,
    "dex": 10,
    "con": 11,
    "int": 11,
    "wis": 16,
    "cha": 18,
    */
    render () {
        console.log( this.props.character )
        return (
            <div>

                {this.props.character !== undefined ?
                    <div>
                        <h1>Character Name : { this.props.character.name }</h1>
                        <h3>Class : { this.props.character.class.charAt(0).toUpperCase() }{this.props.character.class.substr(1)}</h3>
                        <h3>Race : { this.props.character.race.charAt(0).toUpperCase() }{this.props.character.race.substr(1)}</h3>
                        <h3>Gender: { this.props.character.gender.charAt(0).toUpperCase() }{this.props.character.gender.substr(1)}</h3>
                        <h3>Armor Class : {this.props.character.armorClass}</h3>
                        <h3>Speed : {this.props.character.speed}</h3>
                        {this.props.character.skill1 !== null ? <h3>Skill #1 : {this.props.character.skill1}</h3> : <h3>Skill #1 : No Skill Chosen</h3>}
                        {this.props.character.skill2 !== null ? <h3>Skill #2 : {this.props.character.skill2}</h3> : <h3>Skill #2 : No Skill Chosen</h3>}
                        {this.props.character.skill3 !== null ? <h3>Skill #3 : {this.props.character.skill3}</h3> : <h3>Skill #3 : No Skill Chosen</h3>}
                        {this.props.character.skill4 !== null ? <h3>Skill #4 : {this.props.character.skill4}</h3> : <h3>Skill #4 : No Skill Chosen</h3>}
                        <h3>Strength : {this.props.character.str}</h3>
                        <h3>Dexterity : {this.props.character.dex}</h3>
                        <h3>Constitution : {this.props.character.con}</h3>
                        <h3>Intelligence : {this.props.character.int}</h3>
                        <h3>Wisdom : {this.props.character.wis}</h3>
                        <h3>Charisma : {this.props.character.cha}</h3>
                    </div>
                    : <h1>Loading</h1>
                }
                {/* {this.props.character !== undefined ?
                    this.props.character.map( (item, index) => {
                        return(
                            <div id = {item.id}>
                                <h3>{item.name}</h3>
                            </div>
                        )
                    }) : <h1>Loading</h1>
                } */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        character: state.character.characters,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getSingleCharacter: ( id ) => dispatch( getSingleCharacter( id ) ),
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( DisplayCharacter );