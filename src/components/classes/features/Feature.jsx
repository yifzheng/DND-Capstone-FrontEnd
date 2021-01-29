import React from 'react'

import { Link } from "react-router-dom";
import "../../../css/feature.css"
const Feature = () => {
    return(
        <div id = "feature">
            <Link to = {`/features`}style={{ textDecoration: 'none' }}><h1>Features</h1></Link>
        </div>
    )
}

export default Feature;
