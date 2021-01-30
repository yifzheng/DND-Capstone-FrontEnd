import React from 'react'

import { Route, Switch } from 'react-router-dom'

// Main Imports
import Homepage from '../components/Homepage'
import AllCharacters from '../components/AllCharacters'
// Clases Imports
import Classes from '../components/classes/Classes'
import IndividualClass from '../components/classes/classes/displayClass/individualClass/IndividualClass'
import SubClasses from '../components/classes/subclasses/SubClasses'
import IndividualSubClass from '../components/classes/subclasses/IndividualSubClass'
import Features from '../components/classes/features/Features'
import IndividualFeature from '../components/classes/features/IndividualFeature'
import StartingEquipments from '../components/classes/startingEquipment/StartingEquipments'
import IndividualEquipment from '../components/classes/startingEquipment/IndividualEquipment'
import DisplayProficiencies from '../components/classes/classes/displayClass/individualClass/DisplayProficiencies'
import ClassLevels from '../components/classes/classes/displayClass/individualClass/ClassLevels'
import Skills from '../components/classes/classes/displayClass/individualClass/Skills'
import DisplayEquipment from '../components/classes/startingEquipment/DisplayEquipment'
import AllEquipment from '../components/classes/startingEquipment/AllEquipment'
// Races Imports
import Races from '../components/races/Races'
import IndividualRace from '../components/races/IndividualRace'
import Bonus from '../components/races/Bonus'
import Spells from '../components/spells/Spells'
import Language from '../components/races/Language'
import Trait from '../components/races/Trait'
import IndividualSpell from '../components/spells/IndividualSpell'
import Proficiency from '../components/races/Proficiency'
// Monsters Imports
import Monsters from '../components/monsters/Monsters'
import IndividualMonster from '../components/monsters/IndividualMonster'
import ConditionImmunity from '../components/monsters/ConditionImmunity'
// Create Character Imports
import CreateCharacter from '../components/characterCreation/CreateCharacter'
import CharacterCreationForm from '../components/characterCreation/CharacterCreationForm'
import ClassSpells from '../components/classes/classes/displayClass/individualClass/ClassSpells'
// Builds Folder
import Builds from '../components/builds/Builds'
import DisplayCharacter from '../components/builds/DisplayCharacter'
// SignUp form
import SignUpForm from '../components/SignUpForm'
// userprofile
import Profile from '../components/profile/Profile'
// Login Form
import LoginForm from '../components/LoginPage'
import EditCharacter from '../components/editCharacters/EditCharacter'
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/builds" component={Builds} />
      <Route path="/character/:id" component={DisplayCharacter} />
      <Route path="/allCharacters" component={AllCharacters} />
      <Route exact path="/classes" component={Classes} />
      <Route exact path="/class/:index" component={IndividualClass} />
      <Route exact path="/subclasses" component={SubClasses} />
      <Route exact path="/subclass/:index" component={IndividualSubClass} />
      <Route path="/feature/:index" component={IndividualFeature} />
      <Route exact path="/features" component={Features} />
      <Route
        exact
        path="/starting-equipment/:index"
        component={IndividualEquipment}
      />
      <Route exact path="/starting-equipments" component={StartingEquipments} />
      {/* RACE PROFICIENCY ROUTE NEEDS TO BE HERE TO FUNCTION; yes, the below classes proficieny route still works, i checked */}
      <Route path="/races/proficiencies/:proficiency" component={Proficiency} />
      {/* END RACE PROFICIENY ROUTE FIX */}
      <Route
        exact
        path="/proficiencies/:index"
        component={DisplayProficiencies}
      />
      <Route exact path="/class/:index/levels" component={ClassLevels} />
      <Route path="/skills/:index" component={Skills} />
      <Route path="/classSpells/:index/spells" component={ClassSpells} />
      <Route path="/equipment/:index" component={DisplayEquipment} />
      <Route path="/allequipment" component={AllEquipment} />
      {/* RACES ROUTES BELOW */}
      <Route path="/races/:race" component={IndividualRace} />
      <Route eaxct path="/races" component={Races} />
      <Route path="/bonus/:bonus" component={Bonus} />
      <Route path="/spells/:spell" component={IndividualSpell} />
      <Route eaxct path="/spells" component={Spells} />
      <Route path="/languages/:language" component={Language} />
      <Route path="/traits/:trait" component={Trait} />
      {/* <Route path="/races/proficiencies/:proficiency" component={Proficiency} /> */}
      {/* END OF RACES ROUTES */}

      {/* MONSTERS ROUTES BELOW */}
      <Route path="/monsters/:monster" component={IndividualMonster} />
      <Route exact path="/monsters" component={Monsters} />
      <Route
        path="/conditionImmunity/:condition"
        component={ConditionImmunity}
      />
      {/* END OF MONSTERS ROUTES */}

      {/* CREATE CHARACTER ROUTES */}
      <Route path="/createCharacter" component={CreateCharacter} />
      <Route path="/CharacterCreation" component={CharacterCreationForm} />
      {/* END OF CREATE CHARACTER ROUTES */}

      {/* SIGNUP FORM */}
      <Route path="/signup" component={SignUpForm} />
      <Route path="/userprofile" component={Profile} />

      {/* LOGIN FORM */}
      <Route path="/login" component={LoginForm} />
      <Route path = "/editCharacter/:id" component = {EditCharacter}/>
    </Switch>
  )
}

export default Routes
