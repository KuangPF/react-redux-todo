/* reducer 的作用就是定义 state 改变的规则，store 收到 action后，必须给出新的 state，这种 state 的计算过程就叫做 reducer */
/* 一个 reducer 就是一个纯函数，接受两个参数 state 和 action */

/*
 * 此时 state 为：
 * {todos: {...}, visibilityFilter: ''}
 */
import { combineReducers } from 'redux'

import visibilityFilter from './visibilityFilter'
import todos from './todos'

export default combineReducers({ todos, visibilityFilter })
