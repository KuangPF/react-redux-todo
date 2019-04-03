# react-redux-todo

本仓库主要是是利用 `react-redux` 实现一个 `to-do-list` 的效果，代码来自于[Todo App with Redux](https://codesandbox.io/s/9on71rvnyo?from-embed)，在这里主要是讲解这个过程的实现。

## 什么是 react-redux
在了解 `react-redux` 之前首先要了解下 `Redux`，`Redux` 是 `JavaScript` 状态容器，提供可预测化的状态管理，用最简单的话来说就是来管理数据的。更多关于 Redux 的解释可以参考[官方文档](https://www.redux.org.cn/) 或者 [理解 React，但不理解 Redux，该如何通俗易懂的理解 Redux？](https://www.zhihu.com/question/41312576)。那么什么又是 `react-redux` 呢，`react-redux` 可以理解为是为了在 `react` 中方便使用 `redux` 而提供的一个插件，起到一个辅助的作用，但不是用来代替 `redux` 的，对应的是 `react-redux` 把 `react` 的 `state` 集成到 `redux` 的 `store` 上，让 `redux` 来管理 `react` 组件的状态。

### react-redux 
