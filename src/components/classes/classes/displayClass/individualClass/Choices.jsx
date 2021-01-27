import React from "react"
import { Link } from "react-router-dom";

import PChoices from "./PChoices";

const Choices = ( { choose, from } ) => {
    return (
        <div>
            <h3>Choose { choose } from:</h3>
            {from.map( ( item, index ) => {
                return (
                    <PChoices key = {index} name={ item.name } classIndex = {item.index}/>
                )
            } ) }
        </div>
    )
}

export default Choices;