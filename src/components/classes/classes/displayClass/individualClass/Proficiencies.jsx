import React from "react"
import { Link } from "react-router-dom";

class Proficiencies extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Link to = {`/proficiencies/${this.props.classIndex}`}><h4>{this.props.name}</h4></Link>
        )
    }
}

export default Proficiencies;