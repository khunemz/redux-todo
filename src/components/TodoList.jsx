import React, {useEffect, useState} from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import './TodoList.module.css'
import {Card, CardActions, CardContent,Typography, Button} from '@material-ui/core';

import { getTodos , updateTodo , deleteTodo} from './../actions/todoActions';

const TodoList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch])
  const { todos } = state.todos;

  const completeTodo = (todo) => {
    const { id, title , completed } = todo;
    const updTodo = {
      id: todo.id, title: todo.title , completed: !todo.completed,
    }
    dispatch(updateTodo(updTodo))
  }

  const removeTodo = (id) => {
    dispatch(deleteTodo(id))
  }

  const renderCard = (todo) => {
    return (
    <Card key={uuidv4()} style={{ marginTop: '5px', marginBottom: '5px'}} className={ todo.completed ? "completed" : ""}>
      <CardContent>
        <Typography variant="body2" component="p">
          {todo.title } {'[Completed ? ' } { todo.completed ? 'TRUE' : 'FALSE'} {']'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => completeTodo(todo)}>Complete</Button>
        <Button size="small" onClick={() => removeTodo(todo.id)}>Delete</Button>
      </CardActions>
    </Card>
    );
  }
  return (
    <>
      <div>
        { todos.length > 0 ?  todos.map(todo => renderCard(todo)) : 'No data to display '}
      </div>
    </>
  )
}

export default TodoList
