import axios from 'axios'
import {
  GOT_ALL_CHARACTERS,
  GOT_ALL_CLASSES,
  GOT_API_DATA,
  GOT_ALL_CLASSES,
} from './actionTypes'

const initialState = {
  characters: [],
  dndData: [],
  classes: [],
  // subclasses: [],
  // races: [],
}

const gotAllCharacters = (data) => {
  return {
    type: GOT_ALL_CHARACTERS,
    data,
  }
}

export const getAllCharacters = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:8080/api/characters')
      console.log('getAllCharacters axios response:', response)
      dispatch(gotAllCharacters(response.data))
    } catch (error) {
      console.error(error)
    }
  }
}

// Dynamic API calss
const gotApiData = (data) => {
  return {
    type: GOT_API_DATA,
    data,
  }
}

export const getApiData = (searchApi) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/dndapi/${searchApi}`
      )
      console.log('getApiData axios response:', response.data.response) // returns raw data from api
      dispatch(gotApiData(response.data.response))
    } catch (error) {
      console.error(error)
    }
  }
}

// Classes API Call
const gotAllClasses = (data) => {
  return {
    type: GOT_ALL_CLASSES,
    data,
  }
}

export const getAllClasses = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/dndapi/classes`
      )
      console.log('getAllClasses axios response:', response.data.response)
      dispatch(gotAllClasses(response.data.response))
    } catch (error) {
      console.error(error)
    }
  }
}

const rootReducer = (state = initialState, action) => {
  console.log('action in rootReducer:', action)
  switch (action.type) {
    case GOT_ALL_CHARACTERS:
      return {
        ...state,
        characters: action.data,
      }
    case GOT_API_DATA:
      return {
        ...state,
        dndData: action.data,
      }
    case GOT_ALL_CLASSES:
      return {
        ...state,
        classes: action.data,
      }
    default:
      return state
  }
}

export default rootReducer
