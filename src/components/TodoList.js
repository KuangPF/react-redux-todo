import React from 'react'
import { connect } from 'react-redux'
import { getTodosByVisibilityFilter } from '../redux/selectors'
import Todo from './Todo'

const TodoList = ({ todos }) => (
  <ul>
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />
        })
      : 'No todos, yay!'}
  </ul>
)

const mapStateToProps = state => {
  const { visibilityFilter } = state
  console.log(state)
  const todos = getTodosByVisibilityFilter(state, visibilityFilter)
  console.log(todos)
  return { todos }
}

// connnect 第一个参数为 mapStateToProps， 这个函数允许我们将 store 中的数据作为 props 绑定到组件上。

export default connect(mapStateToProps)(TodoList)
