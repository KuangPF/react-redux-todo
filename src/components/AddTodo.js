import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'

class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { input: '' }
  }
  updateInput = input => {
    this.setState({
      input: input
    })
  }

  handleAddTodo = () => {
    this.props.addTodo(this.state.input)
    this.setState({ input: '' })
  }
  render() {
    return (
      <div>
        <input onChange={e => this.updateInput(e.target.value)} value={this.state.input} />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    )
  }
}

// connect 第二个参数 mapDispatchToProps ，作用为将 action 作为 props 绑定在组件上
// 例如下面就是将 addTodo action 绑定在 props 上，当点击添加时调用
export default connect(
  null,
  { addTodo }
)(AddTodo)
