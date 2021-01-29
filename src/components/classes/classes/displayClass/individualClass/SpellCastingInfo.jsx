import React from "react"
import { Link } from "react-router-dom";
import SpellCastingDesc from "./SpellCastingDesc";
import "../../../../../css/individualclass.css"

const SpellCastingInfo = ( { name, desc } ) => {

    return (
        <div id ="spell-cast">
            <h3>Ability Name : {"  "}{ name }</h3>
            {desc.map( ( item, index ) => {
                return (
                    <SpellCastingDesc key={ index } description={ item } />
                )
            } ) }
        </div>
    )
}

export default SpellCastingInfo;