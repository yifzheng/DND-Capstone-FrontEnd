import React from 'react'
import{ Link } from 'react-router-dom'


const DisplayFeatures = ( { name, index } ) => {
    return (
        <div id = "features">
            <Link to = {`/feature/${index}`}style={{ textDecoration: 'none' }}><h3>{name}</h3></Link>
        </div>
    )
}

export default DisplayFeatures;
