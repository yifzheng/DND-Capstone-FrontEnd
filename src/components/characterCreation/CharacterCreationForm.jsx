import React from 'react';
import CreateCharacter from './CreateCharacter';
import { Link } from "react-router-dom"

class CharacterCreationForm extends React.Component {
    constructor ( props ) {
        super( props );
        this.state = {
            CharacterName: '',
            Class: '',
            Race: '',
            Gender: '',
            ProficiencyBonus: 0,
            ArmorClass: 0,
            Initiative: 0,
            Speed: 0,
            Skills: [],
            Str: 0,
            Dex: 0,
            Con: 0,
            Int: 0,
            Wis: 0,
            Cha: 0
        }
    }

    handleChange = e =>{
        if (isNaN(e.target.value)){
            alert(`Please Enter A Digit Value In The Required Fields`)
        }
    }
    render () {
        return (
            <div className="creation-form">
                <header>DUNGEONS { "&" } DRAGONS CHARACTER CREATION FORM</header>
                <form>
                    <label>
                        CharacterName :
                        <br></br>
                        <input type="text" name="CharacterName" placeholder="Raffaela Ciccone" onChange={ e => this.setState( { CharacterName: e.target.value } ) } required></input>
                    </label>
                    <br></br>
                    <label>
                        Select Your Classes<br></br>
                        <select placeholder={ "Choose Your Class" } value={ this.state.Class } required>
                            <option selected="Choose Your Class">Choose Your Class</option>
                        </select>
                    </label>
                    <br></br>
                    <label>
                        Select Your Race
                    <br></br>
                        <select id="race" placeholder={ "Choose Your Race" } value={ this.state.Race } required>
                            <option selected="Choose Your Race">Choose Your Race</option>
                            {/* map throught the array and create an options tag for race*/ }
                        </select>
                    </label>
                    <br></br>
                    <input type="radio" id="male" name="gender" value="male" onChange={e => this.setState({Gender: male})}></input>
                    <label for="male">Male</label>
                    <br></br>
                    <input type="radio" id="female" name="gender" value="female" onChange={e => this.setState({Gender: female})}></input>
                    <label for="female">Female</label>
                    <br></br>
                    <input type="radio" id="other" name="gender" value="other" onChange={e => this.setState({Gender: other})}></input>
                    <label for="other">Other</label>
                    <br></br>
                    <label>
                        Proficiency Bonus
                        <br></br>
                        <input type="text" name="ProficiencyBonus" placeholder={ Math.floor( Math.random() * 6 ) } defaultValue={ ( Math.floor( Math.random() * 6 ) ) } onChange = {e => this.handleChange(e)} required></input>
                    </label>
                    <br></br>
                    <label>
                        Armor Class
                        <br></br>
                        <input type="text" name="ArmourClass" placeholder={ Math.floor( Math.random() * 15 ) } defaultValue={ Math.floor( Math.random() * 15 ) } onChange = {e => this.handleChange(e)} required></input>
                    </label>
                    <br></br>
                    <label>
                        Initiative
                        <br></br>
                        <input type="text" name="Initiative" placeholder={ Math.floor( Math.random() * 15 ) } defaultValue={ Math.floor( Math.random() * 15 ) } onChange = {e => this.handleChange(e)} required></input>
                    </label>
                    <br></br>
                    <label>
                        Speed
                        <br></br>
                        <input type="text" name="Speed" placeholder={ Math.floor( Math.random() * 15 ) } defaultValue={ Math.floor( Math.random() * 15 ) } onChange = {e => this.handleChange(e)} required></input>
                    </label>
                    <br></br>
                    <label>
                        Select Your Skills
                       <br></br>
                        <select id="skills" placeholder={ "Select Your Skills" } value={ this.state.Skills } >
                            <option selected="Choose Your Skills">Choose Your Race</option>
                            <span>Hello</span>
                            {/* map throught the array and create an options tag for skills*/ }
                        </select>
                    </label>
                    <br></br>
                    <label>
                        Strength
                        <br></br>
                        <input type="text" name="Str" placeholder={ Math.floor( Math.random() * 20 ) } defaultValue={ Math.floor( Math.random() * 20 ) } onChange = {e => this.handleChange(e)} required></input>
                    </label>
                    <br></br>
                    <label>
                        Dexterity
                        <br></br>
                        <input type="text" name="Dex" placeholder={ Math.floor( Math.random() * 20 ) } defaultValue={ Math.floor( Math.random() * 20 ) } onChange = {e => this.handleChange(e)} required></input>
                    </label>
                    <br></br>
                    <label>
                        Constitution
                        <br></br>
                        <input type="text" name="Con" placeholder={ Math.floor( Math.random() * 20 ) } defaultValue={ Math.floor( Math.random() * 20 ) } onChange = {e => this.handleChange(e)} required></input>
                    </label>
                    <br></br>
                    <label>
                        Intelligence
                        <br></br>
                        <input type="text" name="Int" placeholder={ Math.floor( Math.random() * 20 ) } defaultValue={ Math.floor( Math.random() * 20 ) } onChange = {e => this.handleChange(e)} required></input>
                    </label>
                    <br></br>
                    <label>
                        Wisdom
                        <br></br>
                        <input type="text" name="Wis" placeholder={ Math.floor( Math.random() * 20 ) } defaultValue={ Math.floor( Math.random() * 20 ) } onChange = {e => this.handleChange(e)} required></input>
                    </label>
                    <br></br>
                    <label>
                        Charisma
                        <br></br>
                        <input type="text" name="Cha" placeholder={ Math.floor( Math.random() * 20 ) } defaultValue={ Math.floor( Math.random() * 20 ) } onChange = {e => this.handleChange(e)} required></input>
                    </label>
                    <br></br>
                    <input type="button" value="Create Your Character"></input>
                    <input type="reset" value="Reset"></input>
                    <Link to="/createCharacter"><input type="button" value="Cancel"></input></Link>
                </form>
            </div>
        )
    }
}

export default CharacterCreationForm;