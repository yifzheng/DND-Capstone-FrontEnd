import React from "react"
import { Link } from "react-router-dom";
import SpellCastingDesc from "./SpellCastingDesc";

const SpellCastingInfo = ( { name, desc } ) => {

    return (
        <div>
            <h3>{ name }</h3>
            {desc.map( ( item, index ) => {
                return (
                    <SpellCastingDesc key={ index } description={ item } />
                )
            } ) }
        </div>
    )
}

export default SpellCastingInfo;