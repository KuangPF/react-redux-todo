/* 合并 reducer */
/* 一个 reducer 就是一个纯函数，接受两个参数 state 和 action */

import { combineReducers } from 'redux'

import visibilityFilter from './visibilityFilter'
import todos from './todos'

export default combineReducers({ todos, visibilityFilter })
