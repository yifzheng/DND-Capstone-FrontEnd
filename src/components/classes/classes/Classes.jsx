import React, { Component } from 'react';
import axios from 'axios';


import DisplayClass from "./displayClass/DisplayClass"
import "../../../css/class.css"
class Classes extends Component {
    constructor ( props ) {
        super( props );

        this.state = {
            classes: []
        }
    }

    async componentDidMount () {
        const { data } = await axios.get( "https://www.dnd5eapi.co/api/classes" );
        this.setState( {
            classes: data.results
        } )
    }

    render () {

        return (
            <div className="class-container">
                <h1 id = "classes">Classes</h1>
                <div className="class-cards">
                    {
                    this.state.classes.map( ( item, ind ) => {
                        return (
                            <DisplayClass key = {ind} name={ item.name } index={ item.index } />
                        )
                    } )
                }
                </div>
                
            </div>
        )
    }
}

export default Classes;