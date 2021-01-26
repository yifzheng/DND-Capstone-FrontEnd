import React from "react";
import { Route, Switch } from "react-router-dom";

import Homepage from '../components/Homepage'
import AllCharacters from '../components/AllCharacters'
import Classes from "../components/classes/Classes"
import IndividualClass from "../components/classes/classes/displayClass/individualClass/IndividualClass"
import SubClasses from "../components/classes/subclasses/SubClasses";
import IndividualSubClass from "../components/classes/subclasses/IndividualSubClass"
import Features from '../components/classes/features/Features';
import IndividualFeature from "../components/classes/features/IndividualFeature";
import StartingEquipments from "../components/classes/startingEquipment/StartingEquipments";
import IndividualEquipment from "../components/classes/startingEquipment/IndividualEquipment";
import DisplayProficiencies from "../components/classes/classes/displayClass/individualClass/DisplayProficiencies"
import ClassLevels from "../components/classes/classes/displayClass/individualClass/ClassLevels"

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={ Homepage } />
			<Route path="/allCharacters" component={ AllCharacters } />
			<Route exact path="/classes" component={ Classes } />
			<Route exact path="/class/:index" component={ IndividualClass } />
			<Route exact path="/subclasses" component={ SubClasses } />
			<Route exact path="/subclass/:index" component={ IndividualSubClass } />
			<Route path="/feature/:index" component={ IndividualFeature } />
			<Route exact path="/features" component={ Features } />
			<Route exact path="/starting-equipment/:index" component={ IndividualEquipment } />
			<Route exact path="/starting-equipments" component={ StartingEquipments } />

			<Route exact path="/proficiencies/:index" component={ DisplayProficiencies } />
			<Route exact path="/class/:index/levels" component={ ClassLevels } />
		</Switch>
	);
};

export default Routes;