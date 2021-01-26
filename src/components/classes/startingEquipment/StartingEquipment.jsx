import React from 'react'

import { Link } from "react-router-dom";

const StartingEquipment = () => {
    return(
        <div>
            <Link to = {`/starting-equipments`}><h1>Starting Equipment</h1></Link>
        </div>
    )
}

export default StartingEquipment;
