import React from "react"
import { Link } from "react-router-dom";

const DisplaySubClass = ({ name, index }) => {
    console.log(`Display class index ${index}`);
    return(
        <div id = "subclasses">
            <Link to = {`/subclass/${index}`}style={{ textDecoration: 'none' }}><h3>{name}</h3></Link>
        </div>
    )
}

export default DisplaySubClass;