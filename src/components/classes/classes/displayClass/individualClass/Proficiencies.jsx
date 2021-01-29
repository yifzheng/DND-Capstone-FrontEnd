import React from 'react'
import { Link } from 'react-router-dom'
import '../../../../../css/individualclass.css'
class Proficiencies extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="profs">
        <Link
          to={`/proficiencies/${this.props.classIndex}`}
          style={{ textDecoration: 'none' }}
        >
          <h4 className="fix-h1-h2-h3-h4">
            {' '}
            {' | '}
            {this.props.name}
          </h4>
        </Link>{' '}
      </div>
    )
  }
}

export default Proficiencies
