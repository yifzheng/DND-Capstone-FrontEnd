import React from 'react'
import { Link } from 'react-router-dom'

const SavingThrows = ({ name, classIndex }) => {
  return (
    <Link to={`/bonus/${classIndex}`} style={{ textDecoration: 'none' }}>
      <h4 className="fix-h1-h2-h3-h4">{name}</h4>
    </Link>
  )
}

export default SavingThrows
