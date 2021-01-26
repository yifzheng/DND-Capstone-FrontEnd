import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getApiData} from '../../redux/reducers'

import {Link} from 'react-router-dom'

class IndividualSpell extends Component {
    componentDidMount = () => {
        let spellName = 'spells/' + this.props.match.params.spell
        this.props.getApiData(spellName)
        
        setTimeout (() =>{
            console.log('spell prop', this.props.spellName)
        }, 800)
        console.log("component mounted")
    }


    render() {
        return(
            // <h1>helllo</h1>
            <div>
                <h1>Spell: {this.props.spellName.name}</h1>

                <h3>Description</h3>
                {this.props.spellName !== undefined ? (
                    <div>
                        <p>{this.props.spellName.desc}</p>
                    </div>
                ): (
                    <span />
                )}

                <h3>higher Level</h3>
                {this.props.spellName !== undefined ? (
                    <div>
                        <p>{this.props.spellName.high_level}</p>
                    </div>
                ): (
                    <span />
                )}

                <h3>Range</h3>
                {this.props.spellName.range !== undefined ? (
                    <div>
                        <p>{this.props.spellName.range}</p>
                        </div>
                ): (
                    <span/>
                )}

                {/* <h3>component</h3>
                {this.props.spellName.components !== undefined ? (
                    this.props.spellName.components.map((element, index) => {
                        console.log('element',element)
                        return(
                            <div key={index}>
                            <Link to {`/component/${element.components.index}`}>
                                <p>{element.components.name}</p>
                            </Link>
                        )
                    })
                )}  */}

                <h3>material</h3>
                {this.props.spellName.material !== undefined ? (
                    <div>
                        <p>{this.props.spellName.material}</p>
                        </div>
                ): (
                    <span/>
                )}
                <h3>ritual</h3>
                {this.props.spellName.ritual !== undefined ? (
                    <div>
                        <p>{this.props.spellName.ritual}</p>
                        </div>
                ): (
                    <span/>
                )}
                <h3>duration</h3>
                {this.props.spellName.duration !== undefined ? (
                    <div>
                        <p>{this.props.spellName.duration}</p>
                        </div>
                ): (
                    <span/>
                )}
                <h3>concentration</h3>
                {this.props.spellName.concentraion !== undefined ? (
                    <div>
                        <p>{this.props.spellName.concentraion}</p>
                        </div>
                ): (
                    <span/>
                )}
                <h3>casting time</h3>
                {this.props.spellName.casting_time !== undefined ? (
                    <div>
                        <p>{this.props.spellName.casting_time}</p>
                        </div>
                ): (
                    <span/>
                )}
                <h3>level</h3>
                {this.props.spellName.level !== undefined ? (
                    <div>
                        <p>{this.props.spellName.level}</p>
                        </div>
                ): (
                    <span/>
                )}
                <h3>attack type</h3>
                {this.props.spellName.attack_type !== undefined ? (
                    <div>
                        <p>{this.props.spellName.attack_type}</p>
                        </div>
                ): (
                    <span/>
                )}

                <h3>Damage</h3>

                <h3>School</h3>

                <h3>Classes</h3>

                <h3>Subclasses</h3>




                
                         
          
        


            </div>
        )
    }


}


const mapStateToProps = state => {
    return {
        spellName: state.dndData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getApiData: (searchApi) => dispatch(getApiData(searchApi))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(IndividualSpell)