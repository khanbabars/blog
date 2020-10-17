import { combineReducers } from 'redux'
import textReducer from './textReducers'

export default combineReducers({
  about: textReducer
})