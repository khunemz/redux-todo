import axios from 'axios';
import { GET_TODO, GET_TODOS, UPDATE_TODO ,DELETE_TODO} from './types';

const url = 'https://jsonplaceholder.typicode.com/todos';

export const addTodo = (payload) => {
  return (dispatch , getState) => {
    axios.post(`${url}`, payload)
    .then(todo => {
      dispatch({
        type: 'ADD_TODO',
        payload: todo.data
      })
    })
    .catch((err) => console.log(err));
  }
};


export const getTodos = () => async (dispatch) => {
  const res = await axios.get(`${url}`);
  dispatch({
    type: GET_TODOS,
    payload: res.data,
  });
};


export const getTodo = (id) => async (dispatch) => {
  const res = await axios.get(`${url}/${id}`);
  dispatch({
    type: GET_TODO,
    payload: res.data,
  });
};


export const updateTodo = (todo) => async (dispatch) => {
  const res = await axios.put(
    `${url}/${todo.id}`,
    todo
  );
  dispatch({
    type: UPDATE_TODO,
    payload: res.data,
  });
};


export const deleteTodo = (id) => async (dispatch) => {
  await axios.delete(`${url}/${id}`);
  dispatch({
    type: DELETE_TODO,
    payload: id,
  });
};
