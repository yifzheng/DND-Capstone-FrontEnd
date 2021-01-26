import React from 'react'



const Options = ( { arr } ) => {
    console.log( arr[ 0 ] );
    return (
        <div>
            <h3>Quantity: { arr[0].quantity }</h3>
            <h3>{ arr[0].equipment.name }</h3>
        </div>
    )
}

export default Options;
