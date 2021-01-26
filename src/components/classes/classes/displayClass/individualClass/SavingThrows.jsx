import React from "react"
import { Link } from "react-router-dom";

const SavingThrows = ({ name, classIndex }) => {
    console.log(`Display class index ${classIndex}`);
    return(
        <div>
            <Link to = {`/ability-scores/${classIndex}`}><h3>dex</h3></Link>
        </div>
    )
}

export default SavingThrows;