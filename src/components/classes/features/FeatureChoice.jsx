import React from 'react';

const FeatureChoice = ({from}) => {
    return(
        <div>
            {
            from.map((item, index) => {
                return(
                    <h3>{item.name}</h3>
                )
            })
        }
        </div>
    )
}

export default FeatureChoice;