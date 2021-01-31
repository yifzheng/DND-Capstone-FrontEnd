import React from 'react'


import PChoices from './PChoices'
import '../../../../../css/individualclass.css'
const Choices = ({ choose, from }) => {
  return (
    <div>
      <h3 className="fix-h1-h2-h3-h4">Choose {choose} from:</h3>
      <div id="p-choices">
        {from.map((item, index) => {
          return (
            <PChoices key={index} name={item.name} classIndex={item.index} />
          )
        })}
      </div>
    </div>
  )
}

export default Choices
