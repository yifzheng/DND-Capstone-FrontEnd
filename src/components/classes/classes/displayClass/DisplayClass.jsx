import React from "react"
import { Link } from "react-router-dom";

const DisplayClass = ({ name, index }) => {
    console.log(`Display class index ${index}`);
    return(
        <div>
            <Link to = {`/class/${index}`}><h3 className = "class">{name}</h3></Link>
        </div>
    )
}

export default DisplayClass;