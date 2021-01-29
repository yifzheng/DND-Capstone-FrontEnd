import React, { Component } from "react";
import { connect } from "react-redux";
import { getSingleCharacter } from "../../redux/reducers";
import dragonborn from '../races/dnd race images/dragonborn.png'
import dwarf from '../races/dnd race images/dwarf.png'
import elf from '../races/dnd race images/elf.png'
import gnome from '../races/dnd race images/gnome.png'
import halfElf from '../races/dnd race images/half-elf.png'
import halfling from '../races/dnd race images/halfling.png'
import halfOrc from '../races/dnd race images/half-orc.png'
import human from '../races/dnd race images/human.png'
import tiefling from '../races/dnd race images/tiefling.png'

import "../../css/characterdisplay.css"

class DisplayCharacter extends Component {
    constructor ( props ) {
        super( props )
       
    }

    async componentDidMount () {
        try {
            await this.props.getSingleCharacter( this.props.match.params.id );
        } catch ( error ) {
            console.log( error )
        }
    }

    render () {
        return (
            <div id="character-container">
                <div id="character-info-container">
                    { this.props.character !== undefined ?
                        <div>
                            <div id="display-character-info">
                                <div id ="character-race-image">
                                    {
                                        this.props.character.race === "dragonborn" && <img src={ dragonborn } alt="race-image" height="500px" width="420px" marginLeft = "30px" ></img>
                                    }
                                    {
                                        this.props.character.race === "dwarf" && <img src={ dwarf } alt="race-image" height="500px" width="420px" marginLeft = "30px"></img>
                                    }
                                    {
                                        this.props.character.race === "elf" && <img src={ elf } alt="race-image" height="500px" width="420px" marginLeft = "30px"></img>
                                    }
                                    {
                                        this.props.character.race === "gnome" && <img src={ gnome } alt="race-image" height="500px" width="420px" marginLeft = "30px"></img>
                                    }
                                    {
                                        this.props.character.race === "half-elf" && <img src={ halfElf } alt="race-image" height="500px" width="420px" marginLeft = "30px"></img>
                                    }
                                    {
                                        this.props.character.race === "halfling" && <img src={ halfling } alt="race-image" height="500px" width="420px" marginLeft = "30px"></img>
                                    }
                                    {
                                        this.props.character.race === "half-orc" && <img src={ halfOrc } alt="race-image" height="500px" width="420px" marginLeft = "30px"></img>
                                    }
                                    {
                                        this.props.character.race === "human" && <img src={ human } alt="race-image" height="500px" width="420px" marginLeft = "30px" ></img>
                                    }
                                    {
                                        this.props.character.race === "tiefling" && <img src={ tiefling } alt="race-image" height="500px" width="420px" marginLeft = "30px"></img>
                                    }
                                    {/* {
                                        this.props.character.race !== ("dragonborn" || "dwarf" || "elf" || "half-elf" || "gnome" || "halfling" || "half-orc" || "human" || "tiefling") && <img src={ "https://wow.zamimg.com/modelviewer/live/webthumbs/npc/15/94223.png" } alt="race-image" height="500px" width="420px" marginLeft = "30px"></img>
                                    } */}
                                </div>
                                <div className="character-info">
                                    <div id="general-info">
                                        <h3>Character Name : { this.props.character.name }</h3>
                                        <h3>Class : { this.props.character.class.charAt( 0 ).toUpperCase() }{ this.props.character.class.substr( 1 ) }</h3>
                                        <h3>Race : { this.props.character.race.charAt( 0 ).toUpperCase() }{ this.props.character.race.substr( 1 ) }</h3>
                                        <h3>Gender: { this.props.character.gender.charAt( 0 ).toUpperCase() }{ this.props.character.gender.substr( 1 ) }</h3>
                                        <h3>Armor Class : { this.props.character.armorClass }</h3>
                                        <h3>Speed : { this.props.character.speed }</h3>
                                        
                                        { this.props.character.skill1 !== null ? <h3>Skill #1 : { this.props.character.skill1 }</h3> : <h3>Skill #1 : No Skill Chosen</h3> }
                                        { this.props.character.skill2 !== null ? <h3>Skill #2 : { this.props.character.skill2 }</h3> : <h3>Skill #2 : No Skill Chosen</h3> }
                                        { this.props.character.skill3 !== null ? <h3>Skill #3 : { this.props.character.skill3 }</h3> : <h3>Skill #3 : No Skill Chosen</h3> }
                                        { this.props.character.skill4 !== null ? <h3>Skill #4 : { this.props.character.skill4 }</h3> : <h3>Skill #4 : No Skill Chosen</h3> }
                                    </div>
                                    <br></br>
                                </div>
                            </div>
                            <div id="attributes">
                                <h3>Strength : { this.props.character.str }</h3>
                                <h3>Dexterity : { this.props.character.dex }</h3>
                                <h3>Constitution : { this.props.character.con }</h3>
                                <h3>Intelligence : { this.props.character.int }</h3>
                                <h3>Wisdom : { this.props.character.wis }</h3>
                                <h3>Charisma : { this.props.character.cha }</h3>
                            </div>
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