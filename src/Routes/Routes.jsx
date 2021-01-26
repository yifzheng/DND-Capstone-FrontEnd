import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Homepage from '../components/Homepage'
import AllCharacters from '../components/AllCharacters'

import Classes from '../components/classes/Classes'
import IndividualClass from '../components/classes/classes/displayClass/individualClass/IndividualClass'
import SubClasses from '../components/classes/subclasses/SubClasses'
import IndividualSubClass from '../components/classes/subclasses/IndividualSubClass'
import Races from '../components/races/Races'
import IndividualRace from '../components/races/IndividualRace'
import Bonus from '../components/races/Bonus'

import Spells from '../components/spells/Spells'

import Language from '../components/races/Language'
import Trait from '../components/races/Trait'
import IndividualSpell from '../components/spells/IndividualSpell'


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/allCharacters" component={AllCharacters} />
      <Route exact path="/classes" component={Classes} />
      <Route exact path="/class/:index" component={IndividualClass} />
      <Route exact path="/subclasses" component={SubClasses} />
      <Route exact path="/subclass/:index" component={IndividualSubClass} />
      <Route path="/races/:race" component={IndividualRace} />
      <Route eaxct path="/races" component={Races} />
      <Route path="/bonus/:bonus" component={Bonus} />
	  <Route path="/spells/:spell" component={IndividualSpell} />
	  <Route eaxct path="/spells" component={Spells} />
	  

      <Route path="/languages/:language" component={Language} />
      <Route path="/traits/:trait" component={Trait} />

    </Switch>
  )
}

export default Routes
