# react-redux-todo

本仓库主要是是利用 `react-redux` 实现一个 `to-do-list` 的效果，代码来自于[Todo App with Redux](https://codesandbox.io/s/9on71rvnyo?from-embed)，在这里主要是讲解这个过程的实现。

## 什么是 react-redux
在了解 `react-redux` 之前首先要了解下 `Redux`，`Redux` 是 `JavaScript` 状态容器，提供可预测化的状态管理，用最简单的话来说就是来管理数据的。更多关于 Redux 的解释可以参考[官方文档](https://www.redux.org.cn/) 或者 [理解 React，但不理解 Redux，该如何通俗易懂的理解 Redux？](https://www.zhihu.com/question/41312576)。那么什么又是 `react-redux` 呢，`react-redux` 可以理解为是为了在 `react` 中方便使用 `redux` 而提供的一个插件，起到一个辅助的作用，但不是用来代替 `redux` 的，对应的是 `react-redux` 把 `react` 的 `state` 集成到 `redux` 的 `store` 上，让 `redux` 来管理 `react` 组件的状态。

## redux 三大核心
* **Store**：是个对象，贯穿整个应用的数据都存储在这里。
* **Action**： 是个对象，必须包含type这个属性，reducer 将根据这个属性值来对 store 进行相应的处理。除此之外的属性，就是进行这个操作需要的数据。
* **Reducer**：是个函数。接受两个参数：要修改的数据(state) 和 action对象。根据 action.type 来决定采用的操作，对 state 进行修改，最后返回新的 state。

他们三者之间的关系如下：
![redux](https://user-images.githubusercontent.com/20694238/55489471-8d5e5a00-5664-11e9-8ec9-25a13f9bdeae.png)

## to-do-list 实现

#### 创建一个 store
利用 `redux` 的 `createStore` 函数实现
``` js
import { createStore } from 'redux'
import rootReducer from './reducers'
export default createStore(rootReducer)
```
`createStore` 第一个参数传入 `state`，即上面提到的 `Reducer`，在 to-do-list 中，主要有两个组件在 `state` 发生改变时会在 UI 层显示出来：
* TodoList
* VisibilityFilters
因此会利用 `combineReducers` 函数将着两个 `reduer` 合并称一个 `state`（redux 中的 store）返回。

```js
import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter'
import todos from './todos'

export default combineReducers({ todos, visibilityFilter })
```