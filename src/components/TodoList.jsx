import React, {useEffect, useState} from 'react'
import { useDispatch , useSelector } from 'react-redux'
import {Card, CardActions, CardContent,Typography, Button} from '@material-ui/core';

import { getTodos } from './../actions/todoActions';

const TodoList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch])
  const { todos } = state.todos;

  const renderCard = (todo) => {
    return (
    <Card key={todo.id} style={{ marginTop: '5px', marginBottom: '5px'}}>
      <CardContent>
        <Typography variant="body2" component="p">
          {todo.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Complete</Button>
        <Button size="small">Delete</Button>
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
