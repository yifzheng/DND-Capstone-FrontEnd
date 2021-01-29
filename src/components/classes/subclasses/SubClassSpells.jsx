import React from 'react';
import {Link} from "react-router-dom"
import "../../../css/individualsubclass.css"

const SubClassSpells = ( props ) => {
    return (
        <div>
            {
                props.prerequisites.map( ( item, index ) => {
                    return (
                        <h3 key={ index }>Prerequisite: {item.name }</h3>
                    )
                } )
            }
            <Link to = {`/spells/${props.spell.index}`}style={{ textDecoration: 'none' }}><h3 id = "spellName">Spell: {props.spell.name }</h3></Link>
        </div>
    )
}

export default SubClassSpells;