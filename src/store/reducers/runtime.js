import { getStore } from '../create'

const initialState = {
  sidebarOpen: false
}


const SET_RUNTIME = 'SET_RUNTIME'
const setRuntime = (props) => {
  const { dispatch } = getStore()
  return dispatch({
    type: SET_RUNTIME,
    props
  })
}

const openSidebar = () => setRuntime({ sidebarOpen: true })
const closeSidebar = () => setRuntime({ sidebarOpen: false })

export const actions = {
  setRuntime,
  openSidebar,
  closeSidebar
}

export default function RuntimeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_RUNTIME:
      return {
        ...state, ...action.props
      }
    default:
      return state
  }
}
