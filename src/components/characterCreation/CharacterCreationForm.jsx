import React from 'react';
import CreateCharacter from './CreateCharacter';
import { Link } from "react-router-dom"

class CharacterCreationForm extends React.Component {
    render () {
        return (
            <div className="creation-form">
                <header>DUNGEONS { "&" } DRAGONS CHARACTER CREATION FORM</header>
                <form>
                    <label>
                        CharacterName :
                        <br></br>
                        <input type="text" name="CharacterName" placeholder="Raffaela Ciccone"></input>
                    </label>
                    <br></br>
                    <label>
                        Select Your Classes<br></br>
                        <select placeholder={ "Choose Your Class" }>
                            <option selected="Choose Your Class">Choose Your Class</option>
                        </select>
                    </label>
                    <br></br>
                    <label>
                        Select Your Race
                    <br></br>
                        <select id="race" placeholder={ "Choose Your Race" } /* value={ this.state.race } */>
                            <option selected="Choose Your Race">Choose Your Race</option>
                            {/* map throught the array and create an options tag for race*/ }
                        </select>
                    </label>

                    <br></br>
                    <label>
                        Proficiency Bonus
                        <br></br>
                        <input type="text" name="proficiencybonus" placeholder={ Math.floor( Math.random() * 6 ) } defaultValue={ ( Math.floor( Math.random() * 6 ) ) }></input>
                    </label>
                    <br></br>
                    <label>
                        Armor Class
                        <br></br>
                        <input type="text" name="armourclass" placeholder={ Math.floor( Math.random() * 15 ) } defaultValue={Math.floor( Math.random() * 15 ) }></input>
                    </label>
                    <br></br>
                    <label>
                        Initiative
                        <br></br>
                        <input type="text" name="initiative" placeholder={Math.floor( Math.random() * 15 ) } defaultValue={ Math.floor( Math.random() * 15 ) }></input>
                    </label>
                    <br></br>
                    <label>
                        Speed
                        <br></br>
                        <input type="text" name="speed" placeholder={ Math.floor( Math.random() * 15 ) } defaultValue={ Math.floor( Math.random() * 15 ) }></input>
                    </label>
                    <br></br>
                   <label>
                       Select Your Skills
                       <br></br>
                       <select id="skills" placeholder={ "Select Your Skills" } /* value={ this.state.skills } */>
                        <option selected="Choose Your Skills">Choose Your Race</option>
                        <span>Hello</span>
                        {/* map throught the array and create an options tag for skills*/ }
                    </select>
                   </label>
                    <br></br>
                    <label>
                        Strength
                        <br></br>
                        <input type="text" name="strength" placeholder={ Math.floor( Math.random() * 20 ) } defaultValue={ Math.floor( Math.random() * 20 ) }></input>
                    </label>
                    <br></br>
                    <label>
                        Dexterity
                        <br></br>
                        <input type="text" name="dexterity" placeholder={ Math.floor( Math.random() * 20 ) } defaultValue={Math.floor( Math.random() * 20 ) }></input>
                    </label>
                    <br></br>
                    <label>
                        Constitution
                        <br></br>
                        <input type="text" name="constitution" placeholder={ Math.floor( Math.random() * 20 ) } defaultValue={ Math.floor( Math.random() * 20 ) }></input>
                    </label>
                    <br></br>
                    <label>
                        Intelligence
                        <br></br>
                        <input type="text" name="intelligence" placeholder={Math.floor( Math.random() * 20 ) } defaultValue={ Math.floor( Math.random() * 20 ) }></input>
                    </label>
                    <br></br>
                    <label>
                        Wisdom
                        <br></br>
                        <input type="text" name="wisdom" placeholder={ Math.floor( Math.random() * 20 ) } defaultValue={ Math.floor( Math.random() * 20 ) }></input>
                    </label>
                    <br></br>
                    <label>
                        Charisma
                        <br></br>
                        <input type="text" name="Charisma" placeholder={ Math.floor( Math.random() * 20 ) } defaultValue={ Math.floor( Math.random() * 20 ) }></input>
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