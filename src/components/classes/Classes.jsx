// import React from 'react'
import { Link } from "react-router-dom";

import Class from './classes/Classes'
import SubClass from './subclasses/SubClass'
import Feature from './features/Feature'
import StartingEquipment from './startingEquipment/StartingEquipment'
import "../../css/equipment.css"

const Classes = () => {
    return (
        <div>
            <Class />
            <SubClass />
            <Feature />
            <StartingEquipment />
            <div id = "equipment"><Link to = "/allequipment" style={{ textDecoration: 'none' }}><h1>Equipments</h1></Link></div>
        </div>
    )
}
export default Classes;
