import {
  ADD_MESSAGE,
  ADD_USER,
  MESSAGE_RECEIVED,
  USERS_LIST,
} from "constants/actionTypes"

let nextMessageId = 0
let nextUserId = 0

export const addMessage = (message, author) => ({
  author,
  id: nextMessageId++,
  message,
  type: ADD_MESSAGE,
})

export const addUser = name => ({
  id: nextUserId++,
  name,
  type: ADD_USER,
})

export const messageReceived = (message, author) => ({
  author,
  id: nextMessageId++,
  message,
  type: MESSAGE_RECEIVED,
})

export const populateUsersList = users => ({
  type: USERS_LIST,
  users
})
