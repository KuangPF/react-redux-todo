# react-redux-todo

本仓库主要是是利用 `react-redux` 实现一个 `to-do-list` 的效果，代码来自于[Todo App with Redux](https://codesandbox.io/s/9on71rvnyo?from-embed)，在这里主要是讲解这个过程的实现。

## 目录
[什么是 react-redux](#什么是-react-redux)

[redux 三大核心](#redux-三大核心)

[to-do-list-实现](#to-do-list-实现)
* [创建 store，action，reducer](#创建-storeactionreducer)
  * 创建一个 store
  * action
  * reducer
* [过程](#过程)

## 什么是 react-redux
在了解 react-redux 之前首先要了解下 Redux，Redux 是 JavaScript 状态容器，提供可预测化的状态管理，用最简单的话来说就是来管理数据的。更多关于 Redux 的解释可以参考[官方文档](https://www.redux.org.cn/) 或者 [理解 React，但不理解 Redux，该如何通俗易懂的理解 Redux？](https://www.zhihu.com/question/41312576)。那么什么又是 react-redux 呢，react-redux 可以理解为是为了在 react 中方便使用 redux 而提供的一个插件，起到一个辅助的作用，但不是用来代替 redux 的，对应的是 react-redux 把 react` 的 state 集成到 `redux` 的 store 上，让 redux 来管理 react 组件的状态。

## redux 三大核心
* **Store**：是个对象，贯穿整个应用的数据都存储在这里。
* **Action**： 是个对象，必须包含 type 这个属性，reducer 将根据这个属性值来对 store 进行相应的处理。除此之外的属性，就是进行这个操作需要的数据。
* **Reducer**：是个函数。接受两个参数：要修改的数据(state) 和 action对象。根据 action.type 来决定采用的操作，对 state 进行修改，最后返回新的 state。

他们三者之间的关系如下：

![redux](https://user-images.githubusercontent.com/20694238/55489471-8d5e5a00-5664-11e9-8ec9-25a13f9bdeae.png)

## to-do-list 实现

### 创建 store，action，reducer

#### 创建一个 store
利用 redux 的 createStore 函数实现
``` js
import { createStore } from 'redux'
import rootReducer from './reducers'
export default createStore(rootReducer)
```
`createStore` 第一个参数传入 state，即上面提到的 Reducer，在 to-do-list 中，主要有两个组件在 state 发生改变时会在 UI 层显示出来：
* TodoList
* VisibilityFilters

因此会利用 `combineReducers` 函数将着两个 reduer 合并称一个 state（redux 中的 store）返回。

```js
import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter'
import todos from './todos'

export default combineReducers({ todos, visibilityFilter })
```

#### action

action 对应代码如下：
``` js
export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
})

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } })
```
可以看出有三个 action，每个 action 都会有对应的 type，然后添加了 payload 属性，里面包含一些数据。

* **addTodo**：添加 todo
* **toggleTodo**：切换 todo 的状态，`completed` || `incomplete`
* **setFilter**：设置 todo 的过滤条件，

#### reducer

本例子中有两个 reducers ，各自有着自己的 state，利用 `combineReducers` 合并成了一个 store，此时 store 的数据结构如下：

``` js
{
  todos: { ... }
  visibilityFilter: 'all'
}
```
由于 `TodoList` 和 `VisibilityFilters` 两个组件订阅了 store，因此当 store 的值发生改变时，组件也会更新自己的视图。

### 过程
1. 当点击 Add Todo 按钮的时候，AddTodo 组件会派发（dispatch）一个 addTodo 的 action 给 store
2. reducer 会根据 action 的 type 做对应的处理，并返回新的 state，当 type 为 ADD_TODO 的时候，会将 payload 中 id 和 content 添加到 todo 中
3. todoList 组件订阅了 store，当 store 发生改变时，会调用 getTodosByVisibilityFilter 获取 todos
4. 切换 VisibilityFilters 导航栏过程类似。
