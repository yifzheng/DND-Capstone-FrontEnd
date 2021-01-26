import React from "react"
import { Link } from "react-router-dom";

const Subclass = ({ name, classIndex }) => {
    console.log(`Display class index ${classIndex}`);
    return(
        <div>
            <Link to = {`/subclass/${classIndex}`}><h4>{name}</h4></Link>
        </div>
    )
}

export default Subclass;