import { Component } from 'react';
import axios from 'axios';
import {connect } from 'react-redux'
import {getApiData} from '../../redux/reducers'

import SpellDisplay from './SpellDisplay';

class Spells extends Component {
    
        state = {
            spell: []
        
    }

    // async componentDidMount() {
    //     try{
    //         let spellName = await axios.get("https://www.dnd5eapi.co/api/spells")
    //         this.setState({
    //             spell: spellName.data.results  
    //         })

    //     }catch(error) {
    //         console.error(error);
    //     }
    // }

    componentDidMount = async () => {
        this.fetchSpells('spells')
    }
    fetchSpells = async (searchApi) => {
        await this.props.getApiData(searchApi)

    setTimeout(() => {
        this.setState({
            spell: this.props.spell.results
        })
    }, 200)

    setTimeout(() => {
        console.log('SPELL STATE', this.state.spell)
      }, 400)
    }
            
        
    render() {
        console.log(this.state.spell)
        return (
          <div>
            <h1>Spells</h1>
            {this.state.spell !== undefined ? (
              this.state.spell.map((spell, index) => (
                <SpellDisplay key={index} name={spell.name} />
              ))
            ) : (
              <span />
            )}
          </div>
        )
      
    }
    

    // render(){
    //     return(
    //         <div>
    //             <h1>Spell</h1>
    //             {this.state.spell.map((spell,index) => (
    //                 <SpellDisplay key={index} name={spell.name} />
    //             ))}
                
    //         </div>
    //     )
    // }

}

const mapStateToProps = state => {
    return{
        spell: state.dndData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getApiData: (searchApi) => dispatch(getApiData(searchApi)),
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Spells);