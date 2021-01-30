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
  LOGGED_OUT_USER,
  UPDATED_CHARACTER,
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
  currentUpdatedCharacter: '',
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
      const response = await axios.post(
        'https://dnd-capstone-backend.herokuapp.com/user/login',
        {
          username: loginInfo.username,
          password: loginInfo.password,
          email: loginInfo.email,
        }
      )
      dispatch(loggedInUser(response.data))
    } catch (error) {
      console.error(error)
    }
  }
}
// log out user
const loggedOutUser = () => {
  return {
    type: LOGGED_OUT_USER,
  }
}
export const logoutUser = () => {
  return async (dispatch) => {
    try {
      dispatch(loggedOutUser())
    } catch (error) {
      console.error(error)
    }
  }
}
// Dynamic API calls
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
        `https://dnd-capstone-backend.herokuapp.com/api/dndapi/${searchApi}`
      )
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

export const createCharacter = (characterInfo, userToken) => {
  return async (dispatch) => {
    try {
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
          personalityTraits: characterInfo.personalityTraits,
          flaws: characterInfo.flaws,
          ideals: characterInfo.ideals,
          userId: characterInfo.userId,
        },
        { headers: { Authorization: `Bearer ${userToken}` } }
      )
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
//https://dnd-capstone-backend.herokuapp.com/user/sign-up
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
      dispatch(createdUser(response.data))
    } catch (error) {
      console.error(error)
    }
  }
}

// PUT -> Update Character
const updatedCharacter = (data) => {
  return {
    type: UPDATED_CHARACTER,
    data,
  }
}

export const updateCharacter = (characterInfo, updatingCharacterId) => {
  return async (dispatch) => {
    try {
      // cannot pass array as data type while keeping sanity
      const skill1 = characterInfo.skills[0]
      const skill2 = characterInfo.skills[1]
      const skill3 = characterInfo.skills[2]
      const skill4 = characterInfo.skills[3]

      const response = await axios.put(
        `https://dnd-capstone-backend.herokuapp.com/api/characters/${updatingCharacterId}`,
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
          personalityTraits: characterInfo.personalityTraits,
          flaws: characterInfo.flaws,
          ideals: characterInfo.ideals,
          userId: characterInfo.userId,
        }
      )
      dispatch(updatedCharacter(response.data))
    } catch (error) {
      console.error(error)
    }
  }
}

const rootReducer = (state = initialState, action) => {
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
    case LOGGED_OUT_USER:
      return {
        ...state,
        currentLoggedInUserInfo: '',
        characters: [],
      }
    case UPDATED_CHARACTER:
      return {
        ...state,
        currentUpdatedCharacter: action.data,
      }
    default:
      return state
  }
}

export default rootReducer
