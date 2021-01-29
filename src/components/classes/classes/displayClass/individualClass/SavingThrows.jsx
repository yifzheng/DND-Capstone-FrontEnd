import React from "react"
import { Link } from "react-router-dom";

const SavingThrows = ( { name, classIndex } ) => {
    console.log( `Display class index ${classIndex}` );
    return (
        <Link to={ `/bonus/${classIndex}` } style={ { textDecoration: 'none' } }><h4>{ name }</h4></Link>
        

    )
}

export default SavingThrows;