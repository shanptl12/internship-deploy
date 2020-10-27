import { createStore } from 'redux'
import getRootReducer from './reducers'

var store;

export const getStore = () => store

export default async function createReduxStore(initialState = {}) {

  store = createStore(
    getRootReducer(),
    initialState
  )

  window._STORE = store
  return store
}
