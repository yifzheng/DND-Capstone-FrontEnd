import React from 'react'

import { Route, Switch } from 'react-router-dom'

// Main Imports
import Homepage from '../components/Homepage'
import AllCharacters from '../components/AllCharacters'

// Classes Imports
import Classes from '../components/classes/Classes'
import IndividualClass from '../components/classes/classes/displayClass/individualClass/IndividualClass'
import SubClasses from '../components/classes/subclasses/SubClasses'
import IndividualSubClass from '../components/classes/subclasses/IndividualSubClass'

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


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/allCharacters" component={AllCharacters} />
      {/* <Route exact path="/classes" component={Classes} /> */}
      <Route exact path="/class/:index" component={IndividualClass} />
      <Route exact path="/subclasses" component={SubClasses} />
      <Route exact path="/subclass/:index" component={IndividualSubClass} />

      {/* RACES ROUTES BELOW */}
      <Route path="/races/:race" component={IndividualRace} />
      <Route eaxct path="/races" component={Races} />
      <Route path="/bonus/:bonus" component={Bonus} />
	  <Route path="/spells/:spell" component={IndividualSpell} />
	  <Route eaxct path="/spells" component={Spells} />
	  

      <Route path="/languages/:language" component={Language} />
      <Route path="/traits/:trait" component={Trait} />



      <Route path="/proficiencies/:proficiency" component={Proficiency} />
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
      {/* END OF CREATE CHARACTER ROUTES */}

    </Switch>
  )
}

export default Routes
