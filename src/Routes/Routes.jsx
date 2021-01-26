import React from "react";
import { Route, Switch } from "react-router-dom";

import Homepage from '../components/Homepage'
import AllCharacters from '../components/AllCharacters'
import Classes from "../components/classes/Classes"
import IndividualClass from "../components/classes/classes/displayClass/individualClass/IndividualClass"
import SubClasses from "../components/classes/subclasses/SubClasses";
import IndividualSubClass from "../components/classes/subclasses/IndividualSubClass"

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Homepage} />
            <Route path="/allCharacters" component={AllCharacters} />
            <Route exact path = "/classes" component = {Classes} />
            <Route exact path = "/class/:index" component = {IndividualClass} />
			<Route exact path = "/subclasses" component = {SubClasses} />
			<Route exact path = "/subclass/:index" component = {IndividualSubClass} />
		</Switch>
	);
};

export default Routes;