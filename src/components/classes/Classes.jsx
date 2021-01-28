// import React from 'react'
import { Link } from "react-router-dom";

import Class from './classes/Classes'
import SubClass from './subclasses/SubClass'
import Feature from './features/Feature'
import StartingEquipment from './startingEquipment/StartingEquipment'


const Classes = () => {
    return (
        <div>
            <Class />
            <SubClass />
            <Feature />
            <StartingEquipment />
            <Link to = "/allequipment"><h1>Equipments</h1></Link>
        </div>
    )
}
export default Classes;
