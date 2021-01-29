import React from 'react'

import { Link } from "react-router-dom";
import "../../../css/startingEquipment.css"
const StartingEquipment = () => {
    return(
        <div id = "startingEquipment">
            <Link to = {`/starting-equipments`}style={{ textDecoration: 'none' }}><h1>Starting Equipment</h1></Link>
        </div>
    )
}

export default StartingEquipment;
