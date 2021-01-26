import axios from 'axios'
import { GOT_ALL_CHARACTERS, GOT_API_DATA } from './actionTypes'

const initialState = {
  characters: [],
  dndData: {},
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
      console.log('getApiData axios response:', response.data.response.results) // returns raw data from api
      dispatch(gotApiData(response.data.response.results))
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
    default:
      return state
  }
}

export default rootReducer
