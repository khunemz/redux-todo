import CreateTodo from './CreateTodo.jsx'
import React from 'react'
import TodoList from './TodoList.jsx'

const Home = () => {
  return (
    <>
      <CreateTodo />
      <TodoList />
    </>
  )
}

export default Home
