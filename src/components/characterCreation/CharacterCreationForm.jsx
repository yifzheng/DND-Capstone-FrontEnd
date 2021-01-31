import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import {
  getAllClasses,
  getAllRaces,
  getAllSkills,
  createCharacter,
  updateCharacter,
} from '../../redux/reducers'
import '../../css/charactercreation.css'
class CharacterCreationForm extends React.Component {
  constructor(props) {
    super(props)
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
        str: Math.floor(Math.random() * 20),
        dex: Math.floor(Math.random() * 20),
        con: Math.floor(Math.random() * 20),
        int: Math.floor(Math.random() * 20),
        wis: Math.floor(Math.random() * 20),
        cha: Math.floor(Math.random() * 20),
        personalityTraits: '',
        flaws: '',
        ideals: '',
        bonds: '',
        attacksAndSpellcasting: '',
        featuresAndTraits: '',
        equipment: '',
        profAndLang: '',
        userId: '',
      },
      public: true,
      editing: this.props.location.state
        ? this.props.location.state.editing
        : false, // using a Link we can pass a location.state, if this component is not linked to, this local state is false
      updatingCharacterId: this.props.location.state
        ? this.props.location.state.updatingCharacterId
        : null, // id of character being updated, if editing is true, this value MUST be true, as in it has a valid id.
      oldCharacterInfo: this.props.location.state
        ? this.props.location.state.oldCharacterInfo
        : null,
    }
  }

  componentDidMount = async () => {
    await this.props.getAllClasses()
    await this.props.getAllRaces()
    await this.props.getAllSkills()
    if (this.state.oldCharacterInfo) {
      const {
        name,
        race,
        gender,
        armorClass,
        speed,
        skill1,
        skill2,
        skill3,
        skill4,
        str,
        dex,
        con,
        int,
        wis,
        cha,
        personalityTraits,
        flaws,
        ideals,
        bonds,
        attacksAndSpellcasting,
        featuresAndTraits,
        equipment,
        profAndLang,
      } = this.state.oldCharacterInfo
      const charaClass = this.state.oldCharacterInfo.class
      let arr = []
      if (skill1 !== null) {
        arr.push(skill1)
      }
      if (skill2 !== null) {
        arr.push(skill2)
      }
      if (skill3 !== null) {
        arr.push(skill3)
      }
      if (skill4 !== null) {
        arr.push(skill4)
      }
      this.setState({
        characterInfo: {
          characterName: name,
          class: charaClass,
          race: race,
          gender: gender,
          proficiencyBonus: '2',
          armorClass: armorClass,
          initiative: 0,
          speed: speed,
          skills: arr,
          str: str,
          dex: dex,
          con: con,
          int: int,
          wis: wis,
          cha: cha,
          personalityTraits: personalityTraits,
          flaws: flaws,
          ideals: ideals,
          bonds: bonds,
          attacksAndSpellcasting: attacksAndSpellcasting,
          featuresAndTraits: featuresAndTraits,
          equipment: equipment,
          profAndLang: profAndLang,
          userId: '',
        },
      })
    }
  }

  handleClassSelectChange = (e) => {
    this.setState({
      characterInfo: {
        ...this.state.characterInfo,
        class: e.target.value,
      },
    })
  }

  handleRaceSelectChange = (e) => {
    const { value } = e.target

    if (
      value === 'dragonborn' ||
      value === 'elf' ||
      value === 'half-elf' ||
      value === 'half-orc' ||
      value === 'human' ||
      value === 'tiefling'
    ) {
      this.setState({
        characterInfo: {
          ...this.state.characterInfo,
          race: e.target.value,
          speed: 30,
        },
      })
    } else {
      this.setState({
        characterInfo: {
          ...this.state.characterInfo,
          race: e.target.value,
          speed: 25,
        },
      })
    }
  }

  handleGenderSelectChange = (e) => {
    this.setState({
      characterInfo: {
        ...this.state.characterInfo,
        gender: e.target.value,
      },
    })
  }

  handleSkillsSelectChange = (e) => {
    if (this.state.characterInfo.skills.length === 4) {
      alert('You may only have 4 skills per character!')
      return
    }
    for (const skill of this.state.characterInfo.skills) {
      if (skill === e.target.value) {
        alert('No duplicate skills allowed!')
        return
      }
    }

    this.setState({
      characterInfo: {
        ...this.state.characterInfo,
        skills: [...this.state.characterInfo.skills, e.target.value], // append skill to array
      },
    })
  }

  handleAbilityScoreChange = (e) => {
    let modifier = Math.floor((parseInt(e.target.value) - 10) / 2)
    document.getElementById(`${e.target.name}` + '-modifier').innerHTML =
      '+' + modifier

    if (e.target.name === 'dex') {
      this.setState({
        characterInfo: {
          ...this.state.characterInfo,
          [e.target.name]: e.target.value,
          armorClass: 10 + modifier,
        },
      })
    } else {
      this.setState({
        characterInfo: {
          ...this.state.characterInfo,
          [e.target.name]: e.target.value,
        },
      })
    }
  }

  handleMainStatChange = (e) => {
    this.setState({
      characterInfo: {
        ...this.state.characterInfo,
        [e.target.name]: e.target.value,
      },
    })
  }

  handleDisplayStatusChange = (e) => {
    this.setState({
      public: e.target.value,
    })
  }

  handleTextareaChange = (e) => {
    this.setState({
      characterInfo: {
        ...this.state.characterInfo,
        [e.target.name]: e.target.value,
      },
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    /*  const { str, dex, con, wis, int, cha } = this.state
     if ( ( str || dex || con || wis || int || cha ) > 30 || ( str || dex || con || wis || int || cha ) < 0 ) {
       alert( "Characters Attritbutes Are Maxed at 30" )
     }
     else { */
    if (this.state.public === 'false') {
      this.setState({
        characterInfo: {
          ...this.state.characterInfo,
          userId: this.props.currentUser.userId,
        },
      })
    } else {
      delete this.state.characterInfo.userId
    }

    // setTimeout(() => {
    //   this.props.createCharacter(
    //     this.state.characterInfo,
    //     this.props.currentUser.token
    //   )
    // }, 1200)

    setTimeout(() => {
      if (this.state.editing) {
        this.props.updateCharacter(
          this.state.characterInfo,
          this.state.updatingCharacterId
        )
      } else {
        this.props.createCharacter(
          this.state.characterInfo,
          this.props.currentUser.token
        )
      }
    }, 1200)

    setTimeout(() => {
      if (
        this.props.newCharacter !== undefined ||
        this.props.currentUpdatedCharacter !== undefined
      ) {
        if (this.state.public === 'true') {
          this.props.history.push('/builds')
        } else {
          this.props.history.push('/userprofile')
        }
      }
    }, 2000)
    /* } */
  }

  render() {
   /*  console.log('this.state.editing:', this.state.editing)
    console.log(
      'this.state.updatingCharacterId:',
      this.state.updatingCharacterId
    )
    console.log('old chara info:', this.state.oldCharacterInfo)

    console.log('chara info test:', this.state.characterInfo) */
    return (
      <div className="creation-form">
        {this.state.editing ? (
          <header>DUNGEONS {'&'} DRAGONS CHARACTER EDIT FORM</header>
        ) : (
          <header>DUNGEONS {'&'} DRAGONS CHARACTER CREATION FORM</header>
        )}

        <div id="character-creation-form">
          {/* Main Character Creation Form */}
          <form onSubmit={(e) => this.handleFormSubmit(e)}>
            {/* Character Name */}
            <div id="character-creation-name">
              <label>
                Character Name:<br></br>
                <input
                  type="text"
                  name="characterName"
                  // placeholder="Raffaela Ciccone"
                  value={this.state.characterInfo.characterName}
                  onChange={(e) =>
                    this.setState({
                      characterInfo: {
                        ...this.state.characterInfo,
                        characterName: e.target.value,
                      },
                    })
                  }
                  required
                ></input>
              </label>
            </div>
            <br></br>
            {/* End Character Name */}

            {/* Class Select */}
            <div id="class-select">
              <label>
                Select Your Classes<br></br>
                <select
                  name="classSelect"
                  onChange={(e) => this.handleClassSelectChange(e)}
                  required
                >
                  <option value="">--Choose Your Class--</option>
                  {this.props.allClasses !== undefined ? (
                    this.props.allClasses.map((element, index) => {
                      if (element.index === this.state.characterInfo.class) {
                        return (
                          <option
                            selected="selected"
                            key={index}
                            value={element.index}
                          >
                            {element.name}
                          </option>
                        )
                      } else {
                        return (
                          <option key={index} value={element.index}>
                            {element.name}
                          </option>
                        )
                      }
                    })
                  ) : (
                    <span />
                  )}
                </select>
              </label>
            </div>
            {/* End Class Select */}

            <br></br>
            {/* Race Select */}
            <div id="race-select">
              <label>
                Select Your Race
                <br></br>
                <select
                  name="raceSelect"
                  onChange={(e) => this.handleRaceSelectChange(e)}
                  required
                >
                  <option value="">--Choose Your Race--</option>
                  {this.props.allRaces !== undefined ? (
                    this.props.allRaces.map((element, index) => {
                      if (element.index === this.state.characterInfo.race) {
                        return (
                          <option
                            selected="selected"
                            key={index}
                            value={element.index}
                          >
                            {element.name}
                          </option>
                        )
                      } else {
                        return (
                          <option key={index} value={element.index}>
                            {element.name}
                          </option>
                        )
                      }
                    })
                  ) : (
                    <span />
                  )}
                </select>
              </label>
            </div>
            {/* End Race Select */}

            <br></br>
            {/* Gender Select */}
            <div id="gender-choices">
              {this.state.characterInfo.gender === 'male' ? (
                <div className="gender-male">
                  <input
                    type="radio"
                    checked="checked"
                    id="male"
                    name="gender"
                    value="male"
                    onChange={(e) => this.handleGenderSelectChange(e)}
                  ></input>
                  <label htmlFor="male">Male</label>
                </div>
              ) : (
                <div className="gender-male">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    onChange={(e) => this.handleGenderSelectChange(e)}
                  ></input>
                  <label htmlFor="male">Male</label>
                </div>
              )}
              {this.state.characterInfo.gender === 'female' ? (
                <div className="gender-female">
                  <input
                    type="radio"
                    checked="checked"
                    id="female"
                    name="gender"
                    value="female"
                    onChange={(e) => this.handleGenderSelectChange(e)}
                  ></input>
                  <label htmlFor="female">Female</label>
                </div>
              ) : (
                <div className="gender-female">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    onChange={(e) => this.handleGenderSelectChange(e)}
                  ></input>
                  <label htmlFor="female">Female</label>
                </div>
              )}

              {this.state.characterInfo.gender === 'other' ? (
                <div className="gender-other">
                  <input
                    type="radio"
                    checked="checked"
                    id="other"
                    name="gender"
                    value="other"
                    onChange={(e) => this.handleGenderSelectChange(e)}
                  ></input>
                  <label htmlFor="other">Other</label>
                </div>
              ) : (
                <div className="gender-other">
                  <input
                    type="radio"
                    id="other"
                    name="gender"
                    value="other"
                    onChange={(e) => this.handleGenderSelectChange(e)}
                  ></input>
                  <label htmlFor="other">Other</label>
                </div>
              )}
            </div>

            {/* End Gender Select  */}

            {/* Main Stats */}
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
                  onChange={(e) =>
                    alert('A lvl.1 character has +2 proficieny bonus!')
                  }
                  required
                >
                  {' '}
                  {this.state.characterInfo.proficiencyBonus}
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
                  {' '}
                  {this.state.characterInfo.armorClass}
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
                  value={this.state.characterInfo.speed}
                  required
                >
                  {' '}
                  {this.state.characterInfo.speed}
                </span>
              </label>
              <br></br>
            </div>
            {/* End Main Stats */}

            {/* Skill Select */}
            <div id="select-character-skill">
              <label>
                Select Your Skills (Choose up to 4)
                <br></br>
                <select
                  name="skillsSelect"
                  onChange={(e) => this.handleSkillsSelectChange(e)}
                  required
                >
                  {this.state.editing ? (
                    <option value="Add more skills">
                      --Add More Skills?--
                    </option>
                  ) : (
                    <option value="Choose Your Skills">
                      --Choose Your Skills--
                    </option>
                  )}
                  {this.props.allSkills !== undefined ? (
                    this.props.allSkills.map((element, index) => {
                      return (
                        <option key={index} value={element.index}>
                          {element.name}
                        </option>
                      )
                    })
                  ) : (
                    <span />
                  )}
                </select>
              </label>
            </div>
            {/* End Skill Select */}

            <br></br>
            {/* Ability Scores */}
            <div id="character-attributes">
              <div id="str">
                <label>
                  Strength
                  <br></br>
                  <input
                    type="number"
                    name="str"
                    value={this.state.characterInfo.str}
                    onChange={(e) => this.handleAbilityScoreChange(e)}
                    min="0"
                    max="30"
                    required
                  ></input>
                  <span id="str-modifier"></span>
                </label>
              </div>
              <div id="con">
                <label>
                  Constitution
                  <br></br>
                  <input
                    type="number"
                    name="con"
                    value={this.state.characterInfo.con}
                    onChange={(e) => this.handleAbilityScoreChange(e)}
                    min="0"
                    max="30"
                    required
                  ></input>
                  <span id="con-modifier"></span>
                </label>
              </div>
              <div id="dex">
                <label>
                  Dexterity
                  <br></br>
                  <input
                    type="number"
                    name="dex"
                    value={this.state.characterInfo.dex}
                    onChange={(e) => this.handleAbilityScoreChange(e)}
                    min="0"
                    max="30"
                    required
                  ></input>
                  <span id="dex-modifier"></span>
                </label>
              </div>
              <div id="cha">
                <label>
                  Charisma
                  <br></br>
                  <input
                    type="number"
                    name="cha"
                    value={this.state.characterInfo.cha}
                    onChange={(e) => this.handleAbilityScoreChange(e)}
                    min="0"
                    max="30"
                    required
                  ></input>
                  <span id="cha-modifier"></span>
                </label>
              </div>
              <div id="int">
                <label>
                  Intelligence
                  <br></br>
                  <input
                    type="number"
                    name="int"
                    value={this.state.characterInfo.int}
                    onChange={(e) => this.handleAbilityScoreChange(e)}
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
                    value={this.state.characterInfo.wis}
                    onChange={(e) => this.handleAbilityScoreChange(e)}
                    min="0"
                    max="30"
                    required
                  ></input>
                  <span id="wis-modifier"></span>
                </label>
              </div>
            </div>

            <div id="personality-traits">
              <h3>Personality Traits</h3>
              <textarea
                name="personalityTraits"
                cols="40"
                rows="6"
                value={this.state.characterInfo.personalityTraits}
                onChange={(e) => this.handleTextareaChange(e)}
              ></textarea>
            </div>

            <div id="flaws">
              <h3>Flaws</h3>
              <textarea
                name="flaws"
                cols="40"
                rows="6"
                value={this.state.characterInfo.flaws}
                onChange={(e) => this.handleTextareaChange(e)}
              ></textarea>
            </div>

            <div id="ideals">
              <h3>Ideals</h3>
              <textarea
                name="ideals"
                cols="40"
                rows="6"
                value={this.state.characterInfo.ideals}
                onChange={(e) => this.handleTextareaChange(e)}
              ></textarea>
            </div>

            <div id="bonds">
              <h3>Bonds</h3>
              <textarea
                name="bonds"
                cols="40"
                rows="6"
                value={this.state.characterInfo.bonds}
                onChange={(e) => this.handleTextareaChange(e)}
              ></textarea>
            </div>

            <div id="attacks-and-spellcasting">
              <h3>Attacks {'&'} Spellcasting</h3>
              <textarea
                name="attacksAndSpellcasting"
                cols="40"
                rows="6"
                value={this.state.characterInfo.attacksAndSpellcasting}
                onChange={(e) => this.handleTextareaChange(e)}
              ></textarea>
            </div>

            <div id="features-and-traits">
              <h3>Features {'&'} Traits</h3>
              <textarea
                name="featuresAndTraits"
                cols="40"
                rows="6"
                value={this.state.characterInfo.featuresAndTraits}
                onChange={(e) => this.handleTextareaChange(e)}
              ></textarea>
            </div>

            <div id="equipment-cc">
              <h3>Equipment</h3>
              <textarea
                name="equipment"
                cols="40"
                rows="6"
                value={this.state.characterInfo.equipment}
                onChange={(e) => this.handleTextareaChange(e)}
              ></textarea>
            </div>

            <div id="prof-and-lang">
              <h3>Proficiencies {'&'} Languages</h3>
              <textarea
                name="profAndLang"
                cols="40"
                rows="6"
                value={this.state.characterInfo.profAndLang}
                onChange={(e) => this.handleTextareaChange(e)}
              ></textarea>
            </div>

            {/* Display Status: public or private */}
            <div id="public-private">
              <input
                type="radio"
                name="public" // this is a state, not value
                value="true"
                onChange={(e) => this.handleDisplayStatusChange(e)}
              />
              <label>Public</label>

              <input
                type="radio"
                name="public" // this is a state, not value
                value="false"
                onChange={(e) => this.handleDisplayStatusChange(e)}
              />
              <label>Private</label>
            </div>
            {/* END Display Status: public or private */}

            {this.state.editing ? (
              <input
                id="create-btn"
                type="submit"
                value="Update Your Character"
              ></input>
            ) : (
              <input
                id="create-btn"
                type="submit"
                value="Create Your Character"
              ></input>
            )}

            {/* <input type="reset" value="Reset"></input> Does not work with modifiers */}
            <Link to="/">
              <input id="cancel-btn" type="button" value="Cancel"></input>
            </Link>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    allClasses: state.allClasses,
    allRaces: state.allRaces,
    allSkills: state.allSkills,
    newCharacter: state.newCharacter,
    currentUser: state.currentLoggedInUserInfo,
    currentUpdatedCharacter: state.currentUpdatedCharacter,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllClasses: () => dispatch(getAllClasses()),
    getAllRaces: () => dispatch(getAllRaces()),
    getAllSkills: () => dispatch(getAllSkills()),
    createCharacter: (characterInfo, userToken) =>
      dispatch(createCharacter(characterInfo, userToken)),
    updateCharacter: (characterInfo, updatingCharacterId) =>
      dispatch(updateCharacter(characterInfo, updatingCharacterId)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterCreationForm)
