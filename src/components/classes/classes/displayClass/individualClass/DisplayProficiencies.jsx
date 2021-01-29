import React from "react"
import { Link } from "react-router-dom";
import axios from "axios"
import { connect } from "react-redux";
import { getApiData } from "../../../../../redux/reducers";
import "../../../../../css/displayproficiencies.css"
class DisplayProficiencies extends React.Component {
    constructor ( props ) {
        super( props )
    }

    async componentDidMount () {
        console.log( "component did mount " + this.props )
        let url = `/proficiencies/${this.props.match.params.index}`;
        await this.props.getApiData( url );
        //const {data} = await axios.get(`https://www.dnd5eapi.co/api/equipment/${this.props.prof.references.index}`)
    }
    render () {
        console.log( this.props )
        if ( !this.props.prof.name ) {
            return <h1>Loading</h1>
        }
        return (
            <div id = "prof-container">
                <h1>{ this.props.prof.name }</h1>
                <div className="prof-classes">
                    <h2>--Classes--</h2>
                    <div >
                       { this.props.prof.classes ?
                        <div id = "pof-classes">

                            {
                                this.props.prof.classes.map( ( item, index ) => {
                                    return (
                                        <Link to={ `/class/${item.index}` }style={{ textDecoration: 'none' }}><p>{ item.name }</p></Link>
                                    )

                                } )
                            }

                        </div>
                        :
                        <div>
                            <h3>This Skill Is Not Tied To Any Class</h3>
                        </div> } 
                    </div>
                </div>
                <div className="prof-races">
                    <h2>--Races--</h2>
                    { this.props.prof.races !== undefined ?
                        <div id = "pof-races">
                            {
                                this.props.prof.races.map( ( item, index ) => {
                                    return (
                                        <Link to={ `/race/${item.index}` }style={{ textDecoration: 'none' }}><p>{ item.name }</p></Link>
                                    )
                                } )
                            }

                        </div>
                        :
                        <div>
                            <h3>This Skill Is Not Tied To Any Race</h3>
                        </div> }
                </div>
                {
                    this.props.prof.references !== undefined && 
                    <div id = 'references'>
                        <h2>--References--</h2>
                        {this.props.prof.references.map( (item, index) => {
                            return(
                                <Link to = {`/equipment/${item.index}`}style={{ textDecoration: 'none' }} ><p key = {index}>{item.name}</p></Link>
                            )
                        })}
                    </div>
                }
            </div>

        )
    }
}
const mapStateToProps = ( state ) => {
    console.log( `Map state to props for individual sub class ${state.dndData}` )
    return {
        prof: state.dndData,
    }
}

const mapDispatchToProps = ( dispatch ) => {
    console.log( `Map dispatch to props for individiual sub class` );
    return {
        getApiData: ( url ) => dispatch( getApiData( url ) ),
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( DisplayProficiencies );