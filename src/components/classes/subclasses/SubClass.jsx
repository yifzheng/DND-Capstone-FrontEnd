import React from 'react'

import { Link } from "react-router-dom";
import "../../../css/subclass.css"
const SubClass = () => {
    return(
        <div id = "subclass">
            <Link to = {`/subclasses`} style={{ textDecoration: 'none' }}><h1>SubClasses</h1></Link>
        </div>
    )
}

export default SubClass;
