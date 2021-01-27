import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { getAllClasses, getAllRaces, getAllSkills } from '../../redux/reducers'

class CharacterCreationForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      characterInfo: {
        characterName: '',
        class: '',
        race: '',
        gender: '',
        proficiencyBonus: 0,
        armorClass: 0,
        initiative: 0,
        speed: 0,
        skills: [],
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
      },
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
    this.setState({
      characterInfo: {
        ...this.state.characterInfo,
        race: e.target.value,
      },
    })
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
    this.setState({
      characterInfo: {
        ...this.state.characterInfo,
        skills: [...this.state.characterInfo.skills, e.target.value], // append skill to array
      },
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    // console.log('all classes:', this.props.allClasses)
    // console.log('all races:', this.props.allRaces)
    console.log('all skills:', this.props.allSkills)
    console.log('characterInfo:', this.state.characterInfo)
    return (
      <div className="creation-form">
        <header>DUNGEONS {'&'} DRAGONS CHARACTER CREATION FORM</header>

        {/* Main Character Creation Form */}
        <form onSubmit={(e) => this.handleFormSubmit(e)}>
          {/* Character Name */}
          <label>
            CharacterName :<br></br>
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
          {/* End Gender Select  */}

          <br></br>
          <label>
            Proficiency Bonus
            <br></br>
            <input
              type="number"
              name="ProficiencyBonus"
              placeholder={Math.floor(Math.random() * 6)}
              defaultValue={Math.floor(Math.random() * 6)}
              required
            ></input>
          </label>
          <br></br>
          <label>
            Armor Class
            <br></br>
            <input
              type="number"
              name="ArmourClass"
              placeholder={Math.floor(Math.random() * 15)}
              defaultValue={Math.floor(Math.random() * 15)}
              required
            ></input>
          </label>
          <br></br>
          <label>
            Initiative
            <br></br>
            <input
              type="number"
              name="Initiative"
              placeholder={Math.floor(Math.random() * 15)}
              defaultValue={Math.floor(Math.random() * 15)}
              required
            ></input>
          </label>
          <br></br>
          <label>
            Speed
            <br></br>
            <input
              type="number"
              name="Speed"
              placeholder={Math.floor(Math.random() * 15)}
              defaultValue={Math.floor(Math.random() * 15)}
              required
            ></input>
          </label>
          <br></br>

          {/* Skill Select */}
          <label>
            Select Your Skills
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
          <label>
            Strength
            <br></br>
            <input
              type="number"
              name="Str"
              placeholder={Math.floor(Math.random() * 20)}
              defaultValue={Math.floor(Math.random() * 20)}
              required
            ></input>
          </label>
          <br></br>
          <label>
            Dexterity
            <br></br>
            <input
              type="number"
              name="Dex"
              placeholder={Math.floor(Math.random() * 20)}
              defaultValue={Math.floor(Math.random() * 20)}
              required
            ></input>
          </label>
          <br></br>
          <label>
            Constitution
            <br></br>
            <input
              type="number"
              name="Con"
              placeholder={Math.floor(Math.random() * 20)}
              defaultValue={Math.floor(Math.random() * 20)}
              required
            ></input>
          </label>
          <br></br>
          <label>
            Intelligence
            <br></br>
            <input
              type="number"
              name="Int"
              placeholder={Math.floor(Math.random() * 20)}
              defaultValue={Math.floor(Math.random() * 20)}
              required
            ></input>
          </label>
          <br></br>
          <label>
            Wisdom
            <br></br>
            <input
              type="number"
              name="Wis"
              placeholder={Math.floor(Math.random() * 20)}
              defaultValue={Math.floor(Math.random() * 20)}
              required
            ></input>
          </label>
          <br></br>
          <label>
            Charisma
            <br></br>
            <input
              type="number"
              name="Cha"
              placeholder={Math.floor(Math.random() * 20)}
              defaultValue={Math.floor(Math.random() * 20)}
              required
            ></input>
          </label>
          <br></br>
          <input type="button" value="Create Your Character"></input>
          <input type="reset" value="Reset"></input>
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllClasses: () => dispatch(getAllClasses()),
    getAllRaces: () => dispatch(getAllRaces()),
    getAllSkills: () => dispatch(getAllSkills()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterCreationForm)
