import React from "react"
import { Link } from "react-router-dom";
import "../../../css/subclass.css"

const DisplaySubClass = ({ name, index }) => {
   
    return(
        <div id = "subclasses">
            <Link to = {`/subclass/${index}`}style={{ textDecoration: 'none' }}><h3 id = "sub-class">{name}</h3></Link>
        </div>
    )
}

export default DisplaySubClass;