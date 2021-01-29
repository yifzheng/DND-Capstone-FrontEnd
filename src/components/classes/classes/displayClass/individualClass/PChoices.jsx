import React from 'react'
import { Link } from 'react-router-dom'
import "../../../../../css/individualclass.css"
const PChoices = ({ name, classIndex }) => {
  return (
    <Link to={`/skills/${classIndex}`} style={{ textDecoration: 'none' }}>
      <h4 className="fix-h1-h2-h3-h4-name">{name}</h4>
    </Link>
  )
}

export default PChoices
