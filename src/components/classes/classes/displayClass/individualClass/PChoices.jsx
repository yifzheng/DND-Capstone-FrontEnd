import React from "react";
import { Link } from 'react-router-dom'

const PChoices = ({name, classIndex}) =>{
    
    return(
        <Link to = {`/skills/${classIndex}`}style={{ textDecoration: 'none' }}><h4>{name}</h4></Link>
    )

}

export default PChoices;