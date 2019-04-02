import React from 'react'
import AddTdo from './components/AddTodo'
import TodoList from './components/TodoList'
import "./styles.css";

export default function TodoApp() {
  return (
    <div>
      <h1>Todo List</h1>
      <AddTdo />
      <TodoList />
    </div>
  )
}
