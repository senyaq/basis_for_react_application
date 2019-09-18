import { combineReducers } from 'redux'
import posts_reduser from './posts_reduser'

const rootReducer = combineReducers({
  posts: posts_reduser,
})

export default rootReducer
