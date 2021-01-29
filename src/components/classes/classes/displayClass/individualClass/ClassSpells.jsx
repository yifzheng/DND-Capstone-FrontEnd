import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class ClassSpells extends React.Component {
  state = {
    spells: {},
  }
  async componentDidMount() {
    try {
    
      const data = await axios.get(
        `https://www.dnd5eapi.co/api/classes/${this.props.match.params.index}/spells`
      )
      
      this.setState({
        spells: data.data,
      })
    } catch (error) {
      console.log(error)
    }
  }
  render() {
   
    return (
      <div>
        <h1 className="fix-h1-h2-h3-h4">
          {this.props.match.params.index[0].toUpperCase()}
          {this.props.match.params.index.substring(1)} Class Spells
        </h1>
        {this.state.spells.results && (
          <div>
            {this.state.spells.results.map((item, index) => {
              return (
                <h3 className="fix-h1-h2-h3-h4" key={index}>
                  Spell:{' '}
                  <Link
                    to={`/spells/${item.index}`}
                    style={{ textDecoration: 'none' }}
                  >
                    {item.name}
                  </Link>
                </h3>
              )
            })}
          </div>
        )}
      </div>
    )
  }
}

export default ClassSpells
