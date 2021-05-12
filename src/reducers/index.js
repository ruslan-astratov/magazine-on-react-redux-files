import { combineReducers } from 'redux'
import { magazineReducer } from './magazine'


export const rootReducer = combineReducers({
  magazine: magazineReducer
})
