import React from "react"
import { Link } from "react-router-dom";
import SpellCastingInfo from "./SpellCastingInfo";

const SpellCasting = ( { info, level, spellcasting_ability } ) => {
    console.log("spellcasting info#1" + info);
    return (
        <div>
            <h2>Spell Casting ability</h2>
            {info.map ((item, index) => {
                return(
                    <SpellCastingInfo key = {index} name = {item.name} desc = {item.desc} />
                )
            })}
            <h3>Level : { level }</h3>
            <h3>Spell Casting Ability : <Link to={ `/ability-scores/${spellcasting_ability.index}` }>{spellcasting_ability.name}</Link></h3> 
        </div>
    )
}

export default SpellCasting;