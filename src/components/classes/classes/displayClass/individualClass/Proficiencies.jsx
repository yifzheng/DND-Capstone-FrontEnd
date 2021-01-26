import React from "react"
import { Link } from "react-router-dom";

class Proficiencies extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Link to = {`/proficiencies/${this.props.classIndex}`}><h3>{this.props.name}</h3></Link>
        )
    }
}

export default Proficiencies;