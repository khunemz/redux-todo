import { GET_TODOS,ADD_TODO, UPDATE_TODO, DELETE_TODO } from './../actions/types'
const initialState = {
  todos: [],
  todo: {}
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
  case GET_TODOS:
    return { ...state, todos: action.payload }
  case ADD_TODO:
    return { ...state, todos: [...state.todos ,action.payload].reverse() }
  case UPDATE_TODO:
    return {
      ...state,
      todos: state.todos.map(todo => todo.id === action.payload.id ? (todo = action.payload) : todo),
    };
  case DELETE_TODO:
    return {
      ...state,
      todos: state.todos.filter(
        (todo) => todo.id !== action.payload
      ),
    };

  default:
    return state
  }
}

export default todoReducer;