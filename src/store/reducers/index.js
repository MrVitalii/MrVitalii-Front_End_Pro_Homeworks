import { combineReducers } from 'redux'
import contactReducer from './contactReducer'

export const rootReducer = combineReducers({
  contact: contactReducer
})