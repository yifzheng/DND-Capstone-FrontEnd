import React from "react"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getApiData } from "../../../../../redux/reducers";

class DisplayProficiencies extends React.Component {
    constructor ( props ) {
        super( props )
    }

    async componentDidMount () {
        console.log( "component did mount " + this.props )
        let url = `/proficiencies/${this.props.match.params.index}`;
        await this.props.getApiData( url );
    }
    render () {
        console.log( this.props )
        if ( !this.props.prof.name ) {
            return <h1>Loading</h1>
        }
        return (
            <div>
                <h2>{ this.props.prof.name }</h2>
                <div className="prof-classes">
                    <h2>Classes</h2>
                    { this.props.prof.classes ?
                        <div>

                            {
                                this.props.prof.classes.map( ( item, index ) => {
                                    return (
                                        <Link to={ `/class/${item.index}` }><p>{ item.name }</p></Link>
                                    )

                                } )
                            }

                        </div>
                        :
                        <div>
                            <h3>This Skill Is Not Tied To Any Class</h3>
                        </div> }
                </div>
                <div className="prof-races">
                    <h2>Races</h2>
                    { this.props.prof.races ?
                        <div>
                            {
                                this.props.prof.races.map( ( item, index ) => {
                                    return (
                                        <Link to={ `/race/${item.index}` }><p>{ item.name }</p></Link>
                                    )
                                } )
                            }

                        </div>
                        :
                        <div>
                            <h3>This Skill Is Not Tied To Any Race</h3>
                        </div> }
                </div>
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