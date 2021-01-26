import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Homepage from '../components/Homepage'
import AllCharacters from '../components/AllCharacters'
import Classes from '../components/classes/Classes'
import IndividualClass from '../components/classes/classes/displayClass/individualClass/IndividualClass'
import Races from '../components/races/Races'
import IndividualRace from '../components/races/IndividualRace'
import Bonus from '../components/races/Bonus'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/allCharacters" component={AllCharacters} />
      <Route exact path="/classes" component={Classes} />
      <Route exact path="/class/:index" component={IndividualClass} />
      <Route path="/races/:race" component={IndividualRace} />
      <Route eaxct path="/races" component={Races} />
      <Route path="/bonus/:bonus" component={Bonus} />
    </Switch>
  )
}

export default Routes
