import React from "react"
import { Link } from "react-router-dom";

const SpellCastingDesc = ({ description }) => {
    
    return(
        <div>
            <p>{description}</p>
        </div>
    )
}

export default SpellCastingDesc;