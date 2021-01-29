import React from "react"
import { Link } from "react-router-dom";

import "../../../../css/displayclass.css"
const DisplayClass = ({ name, index }) => {
    
    return(
        <div id = "class">
            <Link to = {`/class/${index}`}style={{ textDecoration: 'none' }}><h3 className = "class">{name}</h3></Link>
        </div>
    )
}

export default DisplayClass;