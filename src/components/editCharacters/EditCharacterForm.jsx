import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import {
    getAllClasses,
    getAllRaces,
    getAllSkills,
    createCharacter,
    getSingleCharacter,
} from '../../redux/reducers'
import '../../css/charactercreation.css'
class EditCharacterForm extends React.Component {
    constructor ( props ) {
        super( props )
        this.state = {
            characterInfo: {
                characterName: '',
                class: '',
                race: '',
                gender: '',
                proficiencyBonus: '2',
                armorClass: 10,
                initiative: 0,
                speed: 0,
                skills: [],
                str: 0,
                dex: 0,
                con: 0,
                int: 0,
                wis: 0,
                cha: 0,
                personalityTraits: '',
                flaws: '',
                ideals: '',
                userId: '',
            },
            public: true,
        }
    }

    componentDidMount = async () => {
        await this.props.getAllClasses()
        await this.props.getAllRaces()
        await this.props.getAllSkills()
        await this.props.getSingleCharacter( this.props.match.params.id );
        this.setState( {
            characterInfo: {
                characterName: this.props.character.characterName,
                class: this.props.character.class,
                race: this.props.character.race,
                gender: this.props.character.gender,
                proficiencyBonus: '2',
                armorClass: this.props.character.armorClass,
                speed: this.props.character.speed,
                skills: [],
                str: this.props.character.str,
                dex: this.props.character.dex,
                con: this.props.character.con,
                int: this.props.character.int,
                wis: this.props.character.wis,
                cha: this.props.character.cha,
                personalityTraits: this.props.character.personalityTraits,
                flaws: this.props.character.flaws,
                ideals: this.props.character.ideals,
                userId: this.props.character.userId,
            }
        } )
    }

    handleClassSelectChange = ( e ) => {
        this.setState( {
            characterInfo: {
                ...this.state.characterInfo,
                class: e.target.value,
            },
        } )
    }

    handleRaceSelectChange = ( e ) => {
        const { value } = e.target

        if (
            value === 'dragonborn' ||
            value === 'elf' ||
            value === 'half-elf' ||
            value === 'half-orc' ||
            value === 'human' ||
            value === 'tiefling'
        ) {
            this.setState( {
                characterInfo: {
                    ...this.state.characterInfo,
                    race: e.target.value,
                    speed: 30,
                },
            } )
        } else {
            this.setState( {
                characterInfo: {
                    ...this.state.characterInfo,
                    race: e.target.value,
                    speed: 25,
                },
            } )
        }
    }

    handleGenderSelectChange = ( e ) => {
        this.setState( {
            characterInfo: {
                ...this.state.characterInfo,
                gender: e.target.value,
            },
        } )
    }

    handleSkillsSelectChange = ( e ) => {
        if ( this.state.characterInfo.skills.length === 4 ) {
            alert( 'You may only have 4 skills per character!' )
            return
        }
        for ( const skill of this.state.characterInfo.skills ) {
            if ( skill === e.target.value ) {
                alert( 'No duplicate skills allowed!' )
                return
            }
        }

        this.setState( {
            characterInfo: {
                ...this.state.characterInfo,
                skills: [ ...this.state.characterInfo.skills, e.target.value ], // append skill to array
            },
        } )
    }

    handleAbilityScoreChange = ( e ) => {
        let modifier = Math.floor( ( parseInt( e.target.value ) - 10 ) / 2 )
        document.getElementById( `${e.target.name}` + '-modifier' ).innerHTML =
            '+' + modifier

        if ( e.target.name === 'dex' ) {
            this.setState( {
                characterInfo: {
                    ...this.state.characterInfo,
                    [ e.target.name ]: e.target.value,
                    armorClass: 10 + modifier,
                },
            } )
        } else {
            this.setState( {
                characterInfo: {
                    ...this.state.characterInfo,
                    [ e.target.name ]: e.target.value,
                },
            } )
        }
    }

    handleMainStatChange = ( e ) => {
        this.setState( {
            characterInfo: {
                ...this.state.characterInfo,
                [ e.target.name ]: e.target.value,
            },
        } )
    }

    handleDisplayStatusChange = ( e ) => {
        this.setState( {
            public: e.target.value,
        } )
    }

    handleTextareaChange = ( e ) => {
        this.setState( {
            characterInfo: {
                ...this.state.characterInfo,
                [ e.target.name ]: e.target.value,
            },
        } )
    }

    handleFormSubmit = ( e ) => {
        e.preventDefault()
        /*  const { str, dex, con, wis, int, cha } = this.state
         if ( ( str || dex || con || wis || int || cha ) > 30 || ( str || dex || con || wis || int || cha ) < 0 ) {
           alert( "Characters Attritbutes Are Maxed at 30" )
         }
         else { */
        if ( this.state.public === 'false' ) {
            this.setState( {
                characterInfo: {
                    ...this.state.characterInfo,
                    userId: this.props.currentUser.userId,
                },
            } )
        } else {
            delete this.state.characterInfo.userId
        }

        setTimeout( () => {
            this.props.createCharacter(
                this.state.characterInfo,
                this.props.currentUser.token
            )
        }, 1200 )
        setTimeout( () => {
            if ( this.props.newCharacter !== undefined ) {
                if ( this.state.public === 'true' ) {
                    this.props.history.push( '/builds' )
                } else {
                    this.props.history.push( '/userprofile' )
                }
            }
        }, 2000 )
        /* } */
    }

    render () {
        return (
            <div className="creation-form">
                <header>DUNGEONS { '&' } DRAGONS CHARACTER EDIT FORM</header>

                <div id="character-creation-form">
                    {/* Main Character Creation Form */ }
                    <form onSubmit={ ( e ) => this.handleFormSubmit( e ) }>
                        {/* Character Name */ }
                        <div id="character-creation-name">
                            <label>
                                Character Name:<br></br>
                                <input
                                    type="text"
                                    name="characterName"
                                    value = {this.state.userInfocharacterName}
                                    onChange={ ( e ) =>
                                        this.setState( {
                                            characterInfo: {
                                                ...this.state.characterInfo,
                                                characterName: e.target.value,
                                            },
                                        } )
                                    }
                                    required
                                ></input>
                            </label>
                        </div>
                        <br></br>
                        {/* End Character Name */ }

                        {/* Class Select */ }
                        <div id="class-select">
                            <label>
                                Select Your Class<br></br>
                                <select
                                    name="classSelect"
                                    onChange={ ( e ) => this.handleClassSelectChange( e ) }
                                    required
                                >
                                    <option value="">--Choose Your Class--</option>
                                    { this.props.allClasses !== undefined ? (
                                        this.props.allClasses.map( ( element, index ) => {
                                            return (
                                                <option key={ index } value={ element.index }>
                                                    {element.name }
                                                </option>
                                            )
                                        } )
                                    ) : (
                                            <span />
                                        ) }
                                </select>
                            </label>
                        </div>
                        {/* End Class Select */ }

                        <br></br>
                        {/* Race Select */ }
                        <div id="race-select">
                            <label>
                                Select Your Race
                <br></br>
                                <select
                                    name="raceSelect"
                                    onChange={ ( e ) => this.handleRaceSelectChange( e ) }
                                    required
                                >
                                    <option value="">--Choose Your Race--</option>
                                    { this.props.allRaces !== undefined ? (
                                        this.props.allRaces.map( ( element, index ) => {
                                            return (
                                                <option key={ index } value={ element.index }>
                                                    {element.name }
                                                </option>
                                            )
                                        } )
                                    ) : (
                                            <span />
                                        ) }
                                </select>
                            </label>
                        </div>
                        {/* End Race Select */ }

                        <br></br>
                        {/* Gender Select */ }
                        <div id="gender-choices">
                            <div className="gender-male">
                                <input
                                    type="radio"
                                    id="male"
                                    name="gender"
                                    value="male"
                                    onChange={ ( e ) => this.handleGenderSelectChange( e ) }
                                ></input>
                                <label htmlFor="male">Male</label>
                            </div>
                            <div className="gender-female">
                                <input
                                    type="radio"
                                    id="female"
                                    name="gender"
                                    value="female"
                                    onChange={ ( e ) => this.handleGenderSelectChange( e ) }
                                ></input>
                                <label htmlFor="female">Female</label>
                            </div>
                            <div className="gender-other">
                                <input
                                    type="radio"
                                    id="other"
                                    name="gender"
                                    value="other"
                                    onChange={ ( e ) => this.handleGenderSelectChange( e ) }
                                ></input>
                                <label htmlFor="other">Other</label>
                            </div>
                        </div>

                        {/* End Gender Select  */ }

                        {/* Main Stats */ }
                        <div id="character-prof-bonus">
                            <label>
                                Proficiency Bonus (+2 For Lvl.1) :
                <span
                                    id="proficiencyBonus-display"
                                    // type="number"
                                    name="proficiencyBonus"
                                    // placeholder={Math.floor(Math.random() * 6)}
                                    // defaultValue={Math.floor(Math.random() * 6)}
                                    value="2"
                                    onChange={ ( e ) =>
                                        alert( 'A lvl.1 character has +2 proficieny bonus!' )
                                    }
                                    required
                                >
                                    { ' ' }
                                    { this.state.characterInfo.proficiencyBonus }
                                </span>
                            </label>
                        </div>
                        <div id="other-main-stats">
                            <label>
                                Armor Class :
                <span
                                    id="armorClass-display"
                                    type="number"
                                    name="armorClass"
                                    required
                                >
                                    { ' ' }
                                    { this.state.characterInfo.armorClass }
                                </span>
                            </label>

                            {/* <br></br>
          <label>
            Initiative
            <br></br>
            <input
              type="number"
              name="Initiative"
              placeholder={ Math.floor( Math.random() * 15 ) }
              // defaultValue={Math.floor(Math.random() * 15)}
              onChange={ ( e ) => this.handleMainStatChange( e ) }
              required
            ></input>
          </label> */}

                            <br></br>
                            <label>
                                Speed :
                <span
                                    id="speed-display"
                                    type="number"
                                    name="speed"
                                    value={ this.state.characterInfo.speed }
                                    required
                                >
                                    { ' ' }
                                    { this.state.characterInfo.speed }
                                </span>
                            </label>
                            <br></br>
                        </div>
                        {/* End Main Stats */ }

                        {/* Skill Select */ }
                        <div id="select-character-skill">
                            <label>
                                Skills Reset: Select Your Skills (Choose up to 4)
                <br></br>
                                <select
                                    name="skillsSelect"
                                    onChange={ ( e ) => this.handleSkillsSelectChange( e ) }
                                    required
                                >
                                    <option value="">--Choose Your Skills--</option>
                                    { this.props.allSkills !== undefined ? (
                                        this.props.allSkills.map( ( element, index ) => {
                                            return (
                                                <option key={ index } value={ element.index }>
                                                    {element.name }
                                                </option>
                                            )
                                        } )
                                    ) : (
                                            <span />
                                        ) }
                                </select>
                            </label>
                        </div>
                        {/* End Skill Select */ }

                        <br></br>
                        {/* Ability Scores */ }
                        <div id="character-attributes">
                            <div id="str">
                                <label>
                                    Strength
                  <br></br>
                                    <input
                                        type="number"
                                        name="str"
                                        defaultValue={ this.state.characterInfo.str }
                                        onChange={ ( e ) => this.handleAbilityScoreChange( e ) }
                                        min="0"
                                        max="30"
                                        required
                                    ></input>
                                    <span id="str-modifier"></span>
                                </label>
                            </div>
                            <div id="dex">
                                <label>
                                    Dexterity
                  <br></br>
                                    <input
                                        type="number"
                                        name="dex"
                                        defaultValue={ this.state.characterInfo.dex }
                                        onChange={ ( e ) => this.handleAbilityScoreChange( e ) }
                                        min="0"
                                        max="30"
                                        required
                                    ></input>
                                    <span id="dex-modifier"></span>
                                </label>
                            </div>
                            <div id="con">
                                <label>
                                    Constitution
                  <br></br>
                                    <input
                                        type="number"
                                        name="con"
                                        defaultValue={ this.state.characterInfo.con }
                                        onChange={ ( e ) => this.handleAbilityScoreChange( e ) }
                                        min="0"
                                        max="30"
                                        required
                                    ></input>
                                    <span id="con-modifier"></span>
                                </label>
                            </div>
                            <div id="int">
                                <label>
                                    Intelligence
                  <br></br>
                                    <input
                                        type="number"
                                        name="int"
                                        defaultValue={ this.state.characterInfo.int }
                                        onChange={ ( e ) => this.handleAbilityScoreChange( e ) }
                                        min="0"
                                        max="30"
                                        required
                                    ></input>
                                    <span id="int-modifier"></span>
                                </label>
                            </div>
                            <div id="wis">
                                <label>
                                    Wisdom
                  <br></br>
                                    <input
                                        type="number"
                                        name="wis"
                                        defaultValue={ this.state.characterInfo.wis }
                                        onChange={ ( e ) => this.handleAbilityScoreChange( e ) }
                                        min="0"
                                        max="30"
                                        required
                                    ></input>
                                    <span id="wis-modifier"></span>
                                </label>
                            </div>
                            <div id="cha">
                                <label>
                                    Charisma
                  <br></br>
                                    <input
                                        type="number"
                                        name="cha"
                                        defaultValue={ this.state.characterInfo.cha }
                                        onChange={ ( e ) => this.handleAbilityScoreChange( e ) }
                                        min="0"
                                        max="30"
                                        required
                                    ></input>
                                    <span id="cha-modifier"></span>
                                </label>
                            </div>
                        </div>

                        <div id="personality-traits">
                            <h3>Personality Traits</h3>
                            <textarea
                                name="personalityTraits"
                                cols="40"
                                rows="6"
                                onChange={ ( e ) => this.handleTextareaChange( e ) }
                            ></textarea>
                        </div>

                        <div id="flaws">
                            <h3>Flaws</h3>
                            <textarea
                                name="flaws"
                                cols="40"
                                rows="6"
                                onChange={ ( e ) => this.handleTextareaChange( e ) }
                            ></textarea>
                        </div>

                        <div id="ideals">
                            <h3>Ideals</h3>
                            <textarea
                                name="ideals"
                                cols="40"
                                rows="6"
                                onChange={ ( e ) => this.handleTextareaChange( e ) }
                            ></textarea>
                        </div>

                        {/* Display Status: public or private */ }
                        <div id="public-private">
                            <input
                                type="radio"
                                name="public" // this is a state, not value
                                value="true"
                                onChange={ ( e ) => this.handleDisplayStatusChange( e ) }
                            />
                            <label>Public</label>

                            <input
                                type="radio"
                                name="public" // this is a state, not value
                                value="false"
                                onChange={ ( e ) => this.handleDisplayStatusChange( e ) }
                            />
                            <label>Private</label>
                        </div>
                        {/* END Display Status: public or private */ }

                        <input
                            id="create-btn"
                            type="submit"
                            value="Save Changes"
                        ></input>
                        {/* <input type="reset" value="Reset"></input> Does not work with modifiers */ }
                        <Link to="/">
                            <input id="cancel-btn" type="button" value="Cancel"></input>
                        </Link>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
        allClasses: state.allClasses,
        allRaces: state.allRaces,
        allSkills: state.allSkills,
        newCharacter: state.newCharacter,
        currentUser: state.currentLoggedInUserInfo,
        character: state.character.characters,
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        getAllClasses: () => dispatch( getAllClasses() ),
        getAllRaces: () => dispatch( getAllRaces() ),
        getAllSkills: () => dispatch( getAllSkills() ),
        createCharacter: ( characterInfo, userToken ) =>
            dispatch( createCharacter( characterInfo, userToken ) ),
        getSingleCharacter: ( id ) => dispatch( getSingleCharacter( id ) ),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)( EditCharacterForm )
