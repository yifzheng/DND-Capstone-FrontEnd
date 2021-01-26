import React from 'react';

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
            <h3>Spell: {props.spell.name }</h3>
        </div>
    )
}

export default SubClassSpells;