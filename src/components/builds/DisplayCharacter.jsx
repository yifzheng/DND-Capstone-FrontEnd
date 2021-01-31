import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteCharacter, getSingleCharacter } from '../../redux/reducers'
import { Link, Redirect } from 'react-router-dom'
import dragonborn from '../races/dnd race images/dragonborn.png'
import dwarf from '../races/dnd race images/dwarf.png'
import elf from '../races/dnd race images/elf.png'
import gnome from '../races/dnd race images/gnome.png'
import halfElf from '../races/dnd race images/half-elf.png'
import halfling from '../races/dnd race images/halfling.png'
import halfOrc from '../races/dnd race images/half-orc.png'
import human from '../races/dnd race images/human.png'
import tiefling from '../races/dnd race images/tiefling.png'

import '../../css/characterdisplay.css'

class DisplayCharacter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      redirect: false,
      initiative: 0,
      level: 1,
      success: 0,
      failure: 0,
    }
  }

  async componentDidMount() {
    try {
      await this.props.getSingleCharacter(this.props.match.params.id)
    } catch (error) {
      console.log(error)
    }
  }

  handleDelete = () => {
    this.props.deleteCharacter(this.props.character.id).then(() => {
      this.setState({
        redirect: true,
      })
    })
  }
  getInitiative = () => {
    let modifier = Math.floor((parseInt(this.props.character.dex) - 10) / 2)
    let d20 = Math.round(Math.random() * 20)
    let sum = modifier + d20;
    sum < 0 ? this.setState({initiative: 0,}) : this.setState({initiative: modifier + d20,})
  }
  lvlUp = () => {
    this.setState({
      level: this.state.level + 1,
    })
  }
  lvlDown = () => {
    if (this.state.level === 1) {
      alert("You can't be lower than lvl. 1")
    } else {
      this.setState({
        level: this.state.level - 1,
      })
    }
  }
  setSucess = () => {
    if (this.state.success === 3) {
      alert('Death Save Success caps at 3')
    } else {
      this.setState({
        success: this.state.success + 1,
      })
    }
  }
  setFailure = () => {
    if (this.state.failure === 3) {
      alert('Death Save failure caps at 3')
    } else {
      this.setState({
        failure: this.state.failure + 1,
      })
    }
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/userprofile" />
    }
    return (
      <div id="character-container">
        <div id="character-info-container">
          {this.props.character !== undefined ? (
            <div>
              <div id="display-character-info">
                <div id="character-image-info">
                  <div id="character-race-image">
                    {this.props.character.race === 'dragonborn' && (
                      <img
                        src={dragonborn}
                        alt="race-image"
                        height="500px"
                        width="420px"
                        marginleft="30px"
                      ></img>
                    )}
                    {this.props.character.race === 'dwarf' && (
                      <img
                        src={dwarf}
                        alt="race-image"
                        height="500px"
                        width="420px"
                        marginleft="30px"
                      ></img>
                    )}
                    {this.props.character.race === 'elf' && (
                      <img
                        src={elf}
                        alt="race-image"
                        height="500px"
                        width="420px"
                        marginleft="30px"
                      ></img>
                    )}
                    {this.props.character.race === 'gnome' && (
                      <img
                        src={gnome}
                        alt="race-image"
                        height="500px"
                        width="420px"
                        marginleft="30px"
                      ></img>
                    )}
                    {this.props.character.race === 'half-elf' && (
                      <img
                        src={halfElf}
                        alt="race-image"
                        height="500px"
                        width="420px"
                        marginleft="30px"
                      ></img>
                    )}
                    {this.props.character.race === 'halfling' && (
                      <img
                        src={halfling}
                        alt="race-image"
                        height="500px"
                        width="420px"
                        marginleft="30px"
                      ></img>
                    )}
                    {this.props.character.race === 'half-orc' && (
                      <img
                        src={halfOrc}
                        alt="race-image"
                        height="500px"
                        width="420px"
                        marginleft="30px"
                      ></img>
                    )}
                    {this.props.character.race === 'human' && (
                      <img
                        src={human}
                        alt="race-image"
                        height="500px"
                        width="420px"
                        marginleft="30px"
                      ></img>
                    )}
                    {this.props.character.race === 'tiefling' && (
                      <img
                        src={tiefling}
                        alt="race-image"
                        height="500px"
                        width="420px"
                        marginleft="30px"
                      ></img>
                    )}
                    {/* {
                                        this.props.character.race !== ("dragonborn" || "dwarf" || "elf" || "half-elf" || "gnome" || "halfling" || "half-orc" || "human" || "tiefling") && <img src={ "https://wow.zamimg.com/modelviewer/live/webthumbs/npc/15/94223.png" } alt="race-image" height="500px" width="420px" marginleft = "30px"></img>
                                    } */}
                  </div>
                  <div className="character-info">
                    <div id="general-info">
                      <h3>Character Name : {this.props.character.name}</h3>
                      <div id="character-level-counter">
                        <h3 id="current-level">Level: {this.state.level}</h3>
                        <button id="lvl-up" onClick={() => this.lvlUp()}>
                          Level Up
                        </button>
                        <button id="lvl-down" onClick={() => this.lvlDown()}>
                          Level Down
                        </button>
                      </div>
                      <h3>
                        Class :{' '}
                        {this.props.character.class.charAt(0).toUpperCase()}
                        {this.props.character.class.substr(1)}
                      </h3>
                      <h3>
                        Race :{' '}
                        {this.props.character.race.charAt(0).toUpperCase()}
                        {this.props.character.race.substr(1)}
                      </h3>
                      <h3>
                        Gender:{' '}
                        {this.props.character.gender.charAt(0).toUpperCase()}
                        {this.props.character.gender.substr(1)}
                      </h3>
                      <h3>Armor Class : {this.props.character.armorClass}</h3>
                      <h3>Speed : {this.props.character.speed}</h3>

                      <div id="character-skills-1-4">
                        {this.props.character.skill1 !== null ? (
                          <h3>Skill #1 : {this.props.character.skill1}</h3>
                        ) : (
                          <h3>Skill #1 : No Skill Chosen</h3>
                        )}
                        {this.props.character.skill2 !== null ? (
                          <h3>Skill #2 : {this.props.character.skill2}</h3>
                        ) : (
                          <h3>Skill #2 : No Skill Chosen</h3>
                        )}
                        {this.props.character.skill3 !== null ? (
                          <h3>Skill #3 : {this.props.character.skill3}</h3>
                        ) : (
                          <h3>Skill #3 : No Skill Chosen</h3>
                        )}
                        {this.props.character.skill4 !== null ? (
                          <h3>Skill #4 : {this.props.character.skill4}</h3>
                        ) : (
                          <h3>Skill #4 : No Skill Chosen</h3>
                        )}
                      </div>
                      <br></br>
                      <div id="initiative-check">
                        <h3 id="initative-tag">
                          Initiative: {this.state.initiative}
                        </h3>{' '}
                        <button
                          id="getInitiative"
                          onClick={(e) => this.getInitiative()}
                        >
                          Get Initative
                        </button>
                      </div>
                      <div id="death-saves">
                        <div id="death-saves-success">
                          {' '}
                          <button onClick={(e) => this.setSucess()}>
                            Death Saves{'(Successes)'}: {this.state.success}
                          </button>
                        </div>
                        <div id="death-saves-failures">
                          <button onClick={(e) => this.setFailure()}>
                            Death Saves{'(Failures)'}: {this.state.failure}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                </div>
                <div id="attributes">
                  <h3>Strength : {this.props.character.str}</h3>
                  <h3>Dexterity : {this.props.character.dex}</h3>
                  <h3>Constitution : {this.props.character.con}</h3>
                  <h3>Intelligence : {this.props.character.int}</h3>
                  <h3>Wisdom : {this.props.character.wis}</h3>
                  <h3>Charisma : {this.props.character.cha}</h3>
                </div>
                <div id="further-info">
                  <div id="further-info-personality-traits">
                    <h3 id="further-info-personality-traits-h3">
                      Personality Traits
                    </h3>
                    <p>{this.props.character.personalityTraits}</p>
                  </div>
                  <div id="further-info-flaws">
                    <h3 id="further-info-flaws-h3">Flaws</h3>{' '}
                    <p>{this.props.character.flaws}</p>
                  </div>
                  <div id="further-info-ideals">
                    <h3 id="further-info-ideals-h3">Ideals</h3>{' '}
                    <p>{this.props.character.ideals}</p>
                  </div>
                  <div id="further-info-bonds">
                    <h3 id="further-info-bonds-h3">Bonds</h3>{' '}
                    <p>{this.props.character.bonds}</p>
                  </div>
                </div>
                <div id="further-info2">
                  <div id="further-info2-attacksAndSpellcasting">
                    <h3 id="further-info2-attacksAndSpellcasting-h3">
                      Attacks {'&'} Spellcasting
                    </h3>
                    <p>{this.props.character.attacksAndSpellcasting}</p>
                  </div>
                  <div id="further-info2-featuresAndTraits">
                    <h3 id="further-info2-featuresAndTraits-h3">
                      Features {'&'} Traits
                    </h3>{' '}
                    <p>{this.props.character.featuresAndTraits}</p>
                  </div>
                  <div id="further-info2-equipment">
                    <h3 id="further-info2-equipment-h3">Equipment</h3>{' '}
                    <p>{this.props.character.equipment}</p>
                  </div>
                  <div id="further-info2-profAndLang">
                    <h3 id="further-info2-profAndLang-h3">
                      Proficiencies {'&'} Languages
                    </h3>{' '}
                    <p>{this.props.character.profAndLang}</p>
                  </div>
                </div>
                {/* this.props.currentUser.userId === this.props.character.userId ? <Link to = {`/editCharacter/${this.props.match.params.id}`}><button id = "edit-character-btn">Edit</button></Link> : <span/> */}
              </div>

              {/* Can only see these buttons if this character has a userId (i.e. it's private). */}
              {this.props.character.userId ? (
                <div>
                  <Link
                    to={{
                      pathname: '/CharacterCreation',
                      state: {
                        editing: true,
                        updatingCharacterId: this.props.character.id,
                        oldCharacterInfo: this.props.character,
                      },
                    }}
                  >
                    <button id="edit-character-btn">Edit Character</button>
                  </Link>
                  <button
                    id="delete-character-btn"
                    onClick={() => this.handleDelete()}
                  >
                    Delete Character
                  </button>
                </div>
              ) : (
                <span />
              )}
            </div>
          ) : (
            <h1 id="loading">Loading</h1>
          )}
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

const mapStateToProps = (state) => {
  return {
    character: state.character.characters,
    currentUser: state.currentLoggedInUserInfo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSingleCharacter: (id) => dispatch(getSingleCharacter(id)),
    deleteCharacter: (deleteCharacterId) =>
      dispatch(deleteCharacter(deleteCharacterId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayCharacter)
