import { GET_TODOS,ADD_TODO } from './../actions/types'
const initialState = {
  todos: [],
  todo: {}
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
  case GET_TODOS:
    return { ...state, todos: action.payload }
  case ADD_TODO:
    return { ...state, todos: [...state.todos ,action.payload] }
  default:
    return state
  }
}

export default todoReducer;