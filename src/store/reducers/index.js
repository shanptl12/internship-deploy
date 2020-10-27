import { combineReducers } from 'redux'
import runtime from './runtime'


export default function getRootReducer() {
  return combineReducers({
    runtime
  })
}
