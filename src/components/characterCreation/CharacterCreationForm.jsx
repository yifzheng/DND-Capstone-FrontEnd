import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import {
  getAllClasses,
  getAllRaces,
  getAllSkills,
  createCharacter,
} from '../../redux/reducers'

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
        public: false,
      },
      displayStatus: '',
    }
  }

  componentDidMount = async () => {
    await this.props.getAllClasses()
    await this.props.getAllRaces()
    await this.props.getAllSkills()
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
      console.log('dex modifier:', modifier)
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
      displayStatus: e.target.value,
    })

    setTimeout(() => {
      console.log('displayStatus state:', this.state.displayStatus)
    }, 800)
  }

  handleFormSubmit = async (e) => {
    e.preventDefault()

    await this.props.createCharacter(this.state.characterInfo)

    setTimeout(() => {
      console.log('CREATED CHARACTER REDUX STATE:', this.props.newCharacter)
    }, 2000)
  }

  render() {
    // console.log('all classes:', this.props.allClasses)
    // console.log('all races:', this.props.allRaces)
    // console.log('all skills:', this.props.allSkills)
    console.log('characterInfo:', this.state.characterInfo)
    return (
      <div className="creation-form">
        <header>DUNGEONS {'&'} DRAGONS CHARACTER CREATION FORM</header>

        {/* Main Character Creation Form */}
        <form onSubmit={(e) => this.handleFormSubmit(e)}>
          {/* Character Name */}
          <label>
            Character Name:<br></br>
            <input
              type="text"
              name="characterName"
              placeholder="Raffaela Ciccone"
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
          <br></br>
          {/* End Character Name */}

          {/* Class Select */}
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
          {/* End Class Select */}

          <br></br>
          {/* Race Select */}
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
          {/* End Race Select */}

          <br></br>
          {/* Gender Select */}
          <div>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              onChange={(e) => this.handleGenderSelectChange(e)}
            ></input>
            <label htmlFor="male">Male</label>

            <br></br>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              onChange={(e) => this.handleGenderSelectChange(e)}
            ></input>
            <label htmlFor="female">Female</label>

            <br></br>
            <input
              type="radio"
              id="other"
              name="gender"
              value="other"
              onChange={(e) => this.handleGenderSelectChange(e)}
            ></input>
            <label htmlFor="other">Other</label>
          </div>

          {/* End Gender Select  */}

          <br></br>
          {/* Main Stats */}
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

          <br></br>
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
          {/* End Main Stats */}

          {/* Skill Select */}
          <label>
            Select Your Skills (Choose up to 4)
            <br></br>
            <select
              name="skillsSelect"
              onChange={(e) => this.handleSkillsSelectChange(e)}
              required
            >
              <option value="">--Choose Your Skills--</option>
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
          {/* End Skill Select */}

          <br></br>
          {/* Ability Scores */}
          <label>
            Strength
            <br></br>
            <input
              type="number"
              name="str"
              defaultValue={this.state.characterInfo.str}
              onChange={(e) => this.handleAbilityScoreChange(e)}
              required
            ></input>
            <span id="str-modifier"></span>
          </label>

          <br></br>
          <label>
            Dexterity
            <br></br>
            <input
              type="number"
              name="dex"
              defaultValue={this.state.characterInfo.dex}
              onChange={(e) => this.handleAbilityScoreChange(e)}
              required
            ></input>
            <span id="dex-modifier"></span>
          </label>

          <br></br>
          <label>
            Constitution
            <br></br>
            <input
              type="number"
              name="con"
              defaultValue={this.state.characterInfo.con}
              onChange={(e) => this.handleAbilityScoreChange(e)}
              required
            ></input>
            <span id="con-modifier"></span>
          </label>

          <br></br>
          <label>
            Intelligence
            <br></br>
            <input
              type="number"
              name="int"
              defaultValue={this.state.characterInfo.int}
              onChange={(e) => this.handleAbilityScoreChange(e)}
              required
            ></input>
            <span id="int-modifier"></span>
          </label>

          <br></br>
          <label>
            Wisdom
            <br></br>
            <input
              type="number"
              name="wis"
              defaultValue={this.state.characterInfo.wis}
              onChange={(e) => this.handleAbilityScoreChange(e)}
              required
            ></input>
            <span id="wis-modifier"></span>
          </label>

          <br></br>
          <label>
            Charisma
            <br></br>
            <input
              type="number"
              name="cha"
              defaultValue={this.state.characterInfo.cha}
              onChange={(e) => this.handleAbilityScoreChange(e)}
              required
            ></input>
            <span id="cha-modifier"></span>
          </label>

          <br />
          <br />
          {/* Display Status: public or private */}
          <input
            type="radio"
            name="displayStatus"
            value="public"
            onChange={(e) => this.handleDisplayStatusChange(e)}
          />
          <label>Public</label>

          <input
            type="radio"
            name="displayStatus"
            value="private"
            onChange={(e) => this.handleDisplayStatusChange(e)}
          />
          <label>Private</label>
          <br />
          {/* END Display Status: public or private */}

          <br></br>
          <input type="submit" value="Create Your Character"></input>
          {/* <input type="reset" value="Reset"></input> Does not work with modifiers */}
          <Link to="/createCharacter">
            <input type="button" value="Cancel"></input>
          </Link>
        </form>
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllClasses: () => dispatch(getAllClasses()),
    getAllRaces: () => dispatch(getAllRaces()),
    getAllSkills: () => dispatch(getAllSkills()),
    createCharacter: (characterInfo) =>
      dispatch(createCharacter(characterInfo)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterCreationForm)
