import React from 'react'
import{ Link } from 'react-router-dom'


const DisplayFeatures = ( { name, index } ) => {
    return (
        <div>
            <Link to = {`/feature/${index}`}><h3>{name}</h3></Link>
        </div>
    )
}

export default DisplayFeatures;
