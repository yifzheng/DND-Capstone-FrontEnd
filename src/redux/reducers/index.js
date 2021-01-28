import axios from 'axios'
import {
  GOT_ALL_CHARACTERS,
  GOT_ALL_USER_CHARACTERS,
  GOT_SINGLE_CHARACTER,
  GOT_ALL_CLASSES,
  GOT_API_DATA,
  GOT_ALL_RACES,
  GOT_ALL_SKILLS,
  GOT_ALL_USERS,
  CREATED_CHARACTER,
  CREATED_USER,
  LOGGED_IN_USER,
} from './actionTypes'

const initialState = {
  characters: [],
  userCharacters: [],
  character: [],
  users: [],
  dndData: {},
  allClasses: [],
  allRaces: [],
  allSkills: [],
  user: {
    username: '',
    password: '',
    email: '',
  },
  newCharacter: '',
  newUser: '',
  currentLoggedInUserInfo: '',
}

// GET -> Read all characters
const gotAllCharacters = (data) => {
  return {
    type: GOT_ALL_CHARACTERS,
    data,
  }
}

export const getAllCharacters = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        'https://dnd-capstone-backend.herokuapp.com/api/characters'
      )
      console.log('getAllCharacters axios response:', response)
      dispatch(gotAllCharacters(response.data))
    } catch (error) {
      console.error(error)
    }
  }
}

// GET -> Read all characters for users
const gotAllUserCharacters = (data) => {
  return {
    type: GOT_ALL_CHARACTERS,
    data,
  }
}

export const getAllUserCharacters = (userId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://dnd-capstone-backend.herokuapp.com/api/characters/user/${userId}`
      )
      console.log('getAllCharacters axios response:', response)
      dispatch(gotAllUserCharacters(response.data))
    } catch (error) {
      console.error(error)
    }
  }
}

// GET -> Find single character
const gotSingleCharacter = (data) => {
  return {
    type: GOT_SINGLE_CHARACTER,
    data,
  }
}

export const getSingleCharacter = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://dnd-capstone-backend.herokuapp.com/api/characters/${id}`
      )
      console.log('getAllCharacters axios response:', response)
      dispatch(gotSingleCharacter(response.data))
    } catch (error) {
      console.error(error)
    }
  }
}

// GET -> Read all users
const gotAllUsers = (data) => {
  return {
    type: GOT_ALL_USERS,
    data,
  }
}

export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        'https://dnd-capstone-backend.herokuapp.com/api/users'
      )
      console.log('getAllUsers axios response:', response)
      dispatch(gotAllUsers(response.data))
    } catch (error) {
      console.error(error)
    }
  }
}

// POST -> Login a user if their credentials match
const loggedInUser = (data) => {
  return {
    type: LOGGED_IN_USER,
    data,
  }
}

export const loginUser = (loginInfo) => {
  return async (dispatch) => {
    try {
      console.log('LOGIN INFO IN REDUX:', loginInfo)
      const response = await axios.post(
        'https://dnd-capstone-backend.herokuapp.com/user/login',
        {
          username: loginInfo.username,
          password: loginInfo.password,
          email: loginInfo.email,
        }
      )
      console.log('loginUser axios response:', response.data)
      dispatch(loggedInUser(response.data))
    } catch (error) {
      console.error(error)
    }
  }
}

// Dynamic API calls
const gotApiData = (data) => {
  console.log(`API DATA ACTION CREATOR`)
  return {
    type: GOT_API_DATA,
    data,
  }
}

export const getApiData = (searchApi) => {
  console.log(`API DATA ACTION THUNK`)
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://dnd-capstone-backend.herokuapp.com/api/dndapi/${searchApi}`
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
        `https://dnd-capstone-backend.herokuapp.com/api/dndapi/classes`
      )
      console.log('getAllClasses axios response:', response.data.response)
      dispatch(gotAllClasses(response.data.response.results))
    } catch (error) {
      console.error(error)
    }
  }
}

// Races API Call
const gotAllRaces = (data) => {
  return {
    type: GOT_ALL_RACES,
    data,
  }
}

export const getAllRaces = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        'https://dnd-capstone-backend.herokuapp.com/api/dndapi/races'
      )
      console.log('getAllRaces axios response:', response.data.response)
      dispatch(gotAllRaces(response.data.response.results))
    } catch (error) {
      console.error(error)
    }
  }
}

// Skills API Call
const gotAllSkills = (data) => {
  return {
    type: GOT_ALL_SKILLS,
    data,
  }
}

export const getAllSkills = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        'https://dnd-capstone-backend.herokuapp.com/api/dndapi/skills'
      )
      console.log('getAllSkills axios response:', response.data.response)
      dispatch(gotAllSkills(response.data.response.results))
    } catch (error) {
      console.error(error)
    }
  }
}

// POST -> Create character
const createdCharacter = (data) => {
  return {
    type: CREATED_CHARACTER,
    data,
  }
}

export const createCharacter = (characterInfo) => {
  return async (dispatch) => {
    try {
      console.log('user token:', userToken)
      // cannot pass array as data type while keeping sanity
      const skill1 = characterInfo.skills[0]
      const skill2 = characterInfo.skills[1]
      const skill3 = characterInfo.skills[2]
      const skill4 = characterInfo.skills[3]

      const response = await axios.post(
        'https://dnd-capstone-backend.herokuapp.com/api/characters',
        {
          name: characterInfo.characterName,
          class: characterInfo.class,
          race: characterInfo.race,
          gender: characterInfo.gender,
          armorClass: characterInfo.armorClass,
          speed: characterInfo.speed,
          skill1: skill1,
          skill2: skill2,
          skill3: skill3,
          skill4: skill4,
          str: characterInfo.str,
          dex: characterInfo.dex,
          con: characterInfo.con,
          int: characterInfo.int,
          wis: characterInfo.wis,
          cha: characterInfo.cha,
          userId: characterInfo.userId,
        },
        { headers: { Authorization: `Bearer ${userToken}` } }
      )
      console.log('createCharacter axios post response:', response)
      dispatch(createdCharacter(response.data))
    } catch (error) {
      console.error(error)
    }
  }
}

// POST -> Create user
const createdUser = (data) => {
  return {
    type: CREATED_USER,
    data,
  }
}
// http://localhost:8080/user/sign-up
export const createUser = (userInfo) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        'https://dnd-capstone-backend.herokuapp.com/user/sign-up',
        {
          username: userInfo.username,
          email: userInfo.email,
          password: userInfo.password,
        }
      )
      console.log('createUser axios post response:', response)
      dispatch(createdUser(response.data))
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
    case GOT_ALL_USER_CHARACTERS:
      return {
        ...state,
        userCharacters: action.data,
      }
    case GOT_SINGLE_CHARACTER:
      return {
        ...state,
        character: action.data,
      }
    case GOT_API_DATA:
      return {
        ...state,
        dndData: action.data,
      }
    case GOT_ALL_CLASSES:
      return {
        ...state,
        allClasses: action.data,
      }
    case GOT_ALL_RACES:
      return {
        ...state,
        allRaces: action.data,
      }
    case GOT_ALL_SKILLS:
      return {
        ...state,
        allSkills: action.data,
      }
    case CREATED_CHARACTER:
      return {
        ...state,
        newCharacter: action.data,
      }
    case CREATED_USER:
      return {
        ...state,
        newUser: action.data,
      }
    case GOT_ALL_USERS:
      return {
        ...state,
        users: action.data,
      }
    case LOGGED_IN_USER:
      return {
        ...state,
        currentLoggedInUserInfo: action.data,
      }
    default:
      return state
  }
}

export default rootReducer
