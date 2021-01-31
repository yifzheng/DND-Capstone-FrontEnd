import { Component } from 'react'
import { connect } from 'react-redux'
import { getApiData } from '../../redux/reducers'

import SpellDisplay from './SpellDisplay'

import '../../css/spells.css'

class Spells extends Component {
  state = {
    spell: [],
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
        spell: this.props.spell.results,
      })
    }, 200)
  }

  render() {
    return (
      <div className="spells-container">
        <div className="spells-title">
          <h1>Spells</h1>
        </div>
        {this.state.spell !== undefined ? (
          <div className="spells-preview-container">
            {this.state.spell.map((spell, index) => (
              <SpellDisplay key={index} name={spell.name} index={spell.index} />
            ))}
          </div>
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

const mapStateToProps = (state) => {
  return {
    spell: state.dndData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getApiData: (searchApi) => dispatch(getApiData(searchApi)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Spells)
