import React from 'react'
import{ Link } from 'react-router-dom'
import "../../../css/feature.css"

const DisplayFeatures = ( { name, index } ) => {
    return (
        <div id = "features">
            <Link to = {`/feature/${index}`} style={{ textDecoration: 'none' }}><h3 id = "feature-name">{name}</h3></Link>
        </div>
    )
}

export default DisplayFeatures;
