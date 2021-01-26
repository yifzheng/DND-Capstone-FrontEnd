import React from "react"
import { Link } from "react-router-dom";

const SavingThrows = ({ name, classIndex }) => {
    console.log(`Display class index ${classIndex}`);
    return(
        <div>
            <Link to = {`/bonus/${classIndex}`}><h4>{name}</h4></Link>
        </div>
    )
}

export default SavingThrows;