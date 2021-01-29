import React from "react"
import { Link } from "react-router-dom";
import "../../../css/startingEquipment.css"
const DisplayClass = ({ name, index }) => {
    return(
        <div id = "equipments">
            <Link to = {`/starting-equipment/${index}`}style={{ textDecoration: 'none' }}><h3 id = "equipments-name">{name}</h3></Link>
        </div>
    )
}

export default DisplayClass;