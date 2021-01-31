import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { getApiData } from '../../../../../redux/reducers'
import '../../../../../css/displayproficiencies.css'
class DisplayProficiencies extends React.Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    
    let url = `/proficiencies/${this.props.match.params.index}`
    await this.props.getApiData(url)
    //const {data} = await axios.get(`https://www.dnd5eapi.co/api/equipment/${this.props.prof.references.index}`)
  }
  render() {
    
    /* if (!this.props.prof.name) {
      return <h1 id="disp-h1">Loading</h1>
    } */
    return (
      <div id = "prof-container-container">
        <div id="prof-container">
        <h1 id="disp-h1">{this.props.prof.name}</h1>
        <div className="prof-classes">
          <h2 className="prof-classes">--Classes--</h2>
          <div>
            {this.props.prof.classes ? (
              <div id="pof-classes">
                {this.props.prof.classes.map((item, index) => {
                  return (
                    <Link
                      to={`/class/${item.index}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <p key = {index} id = "prof-class-name">{item.name}</p>
                    </Link>
                  )
                })}
              </div>
            ) : (
              <div>
                <h3 className="prof-classes">
                  This Skill Is Not Tied To Any Class
                </h3>
              </div>
            )}
          </div>
        </div>
        <div className="prof-races">
          <h2 className="prof-races">--Races--</h2>
          {this.props.prof.races !== undefined ? (
            <div id="pof-races">
              {this.props.prof.races.map((item, index) => {
                return (
                  <Link
                    to={`/race/${item.index}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <p key = {index} id = "prof-race-name">{item.name}</p>
                  </Link>
                )
              })}
            </div>
          ) : (
            <div>
              <h3 className="fix-h1-h2-h3-h4">
                This Skill Is Not Tied To Any Race
              </h3>
            </div>
          )}
        </div>
        {/* {this.props.prof.references !== undefined && (
          <div id="references">
            <h2 className="fix-h1-h2-h3-h4">--References--</h2>
            {this.props.prof.references.map((item, index) => {
              return (
                  <p id = "prof-reference-p" key={index}>{item.name}</p>
              )
            })}
          </div>
        )} */}
      </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  
  return {
    prof: state.dndData,
  }
}

const mapDispatchToProps = (dispatch) => {
  
  return {
    getApiData: (url) => dispatch(getApiData(url)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayProficiencies)
