import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../css/races.css'
import dragonborn from './dnd race images/dragonborn.png'
import dwarf from './dnd race images/dwarf.png'
import elf from './dnd race images/elf.png'
import gnome from './dnd race images/gnome.png'
import halfElf from './dnd race images/half-elf.png'
import halfling from './dnd race images/halfling.png'
import halfOrc from './dnd race images/half-orc.png'
import human from './dnd race images/human.png'
import tiefling from './dnd race images/tiefling.png'

class DisplayRace extends Component {
  render() {
    const { index, name } = this.props
    let bkgImage
    index === 'dragonborn'
      ? (bkgImage = dragonborn)
      : index === 'dwarf'
      ? (bkgImage = dwarf)
      : index === 'elf'
      ? (bkgImage = elf)
      : index === 'gnome'
      ? (bkgImage = gnome)
      : index === 'half-elf'
      ? (bkgImage = halfElf)
      : index === 'halfling'
      ? (bkgImage = halfling)
      : index === 'half-orc'
      ? (bkgImage = halfOrc)
      : index === 'human'
      ? (bkgImage = human)
      : index === 'tiefling'
      ? (bkgImage = tiefling)
      : (bkgImage = '')

    return (
      <div className="race-preview">
        <div>
          <img src={bkgImage} alt="race-image" height="600px" width="420px" />
        </div>
        <Link to={`/races/${index}`}>{name}</Link>
      </div>
    )
  }
}

export default DisplayRace
