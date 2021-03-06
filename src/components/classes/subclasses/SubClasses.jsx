import React, { Component } from 'react';
import axios from 'axios';

import DisplaySubClass from "./DisplaySubClass"
import "../../../css/subclass.css"
class SubClasses extends Component {
    constructor ( props ) {
        super( props );

        this.state = {
            classes: []
        }
    }

    async componentDidMount () {
        const { data } = await axios.get( "https://www.dnd5eapi.co/api/subclasses" );
        this.setState( {
            classes: data.results
        } )
    }

    render () {
       
        return (
            <div className="subclass-container">
                <h1>SubClasses</h1>
                <div className="subclass-cards">
                    {
                        this.state.classes.map( ( item, ind ) => {
                            return (
                                <DisplaySubClass key={ ind } name={ item.name } index={ item.index } />
                            )
                        } )
                    }
                </div>

            </div>
        )
    }
}

export default SubClasses;