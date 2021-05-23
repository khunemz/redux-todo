import React, {useEffect, useState} from 'react'
import { useDispatch , useSelector } from 'react-redux'
import {Card, CardActions, CardContent,Typography, Button} from '@material-ui/core';

import { getTodos } from './../actions/todoActions';

const TodoList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log('todo: ' ,state);
  useEffect(() => {
    dispatch(getTodos())
  }, [])


  const renderCard = () => {
    return (
    <Card>
      <CardContent>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'Test text'}
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
        { renderCard() }
      </div>
    </>
  )
}

export default TodoList
