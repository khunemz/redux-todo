import { GET_TODOS } from './../actions/types'
const initialState = {

}

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case GET_TODOS:
    return { ...state, ...payload }

  default:
    return state
  }
}

export default todoReducer;