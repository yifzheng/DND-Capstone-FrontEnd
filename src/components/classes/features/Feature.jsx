import React from 'react'

import { Link } from "react-router-dom";

const Feature = () => {
    return(
        <div>
            <Link to = {`/features`}><h1>Features</h1></Link>
        </div>
    )
}

export default Feature;
