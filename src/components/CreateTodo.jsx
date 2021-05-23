import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './../actions/todoActions'
import { FormControl,InputLabel,Input,FormHelperText,Button } from '@material-ui/core';


const CreateTodo = () => {
  const dispatch = useDispatch()
  const [todo, setTodo] = useState({ title: '', completed: false  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo))
    setTodo({...todo , title: e.target.value, completed: false });

  }
  return (
    <>
      <form noValidate onSubmit={(e) => handleSubmit(e)}>
        <InputLabel htmlFor="todo">Todo</InputLabel>
        <Input 
          name="todo" 
          id="todo" 
          aria-describedby="todo-helper-text" 
          onChange={(e) => setTodo({...todo, title: e.target.value })}
        />
        <FormHelperText id="todo-helper-text">What's going to do today.</FormHelperText>
        <Button variant="contained" color="primary" type="submit">Add Todo</Button>
      </form>
    </>
  )
}

export default CreateTodo
