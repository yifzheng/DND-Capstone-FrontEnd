import React from 'react'
import { Link } from 'react-router-dom'

const Subclass = ({ name, classIndex }) => {
  return (
    <Link to={`/subclass/${classIndex}`} style={{ textDecoration: 'none' }}>
      <h4 className="fix-h1-h2-h3-h4">{name}</h4>
    </Link>
  )
}

export default Subclass
