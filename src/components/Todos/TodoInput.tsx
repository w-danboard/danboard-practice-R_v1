import React, { PropsWithChildren, ReactElement } from 'react'
import { Todo } from '@/models'

// 默认属性
let defaultProps = {
  settings: {
    maxLength: 6,
    placeholder: '请输入待办事项'
  }
}

export type DefaultProps = Partial<typeof defaultProps>

// 同上
// type DefaultProps = {
//   settings?: {
//     maxLength: number,
//     placeholder: string
//   }
// }

interface Props {
  addTodo: (todo: Todo) => void
}

interface State {
  text: string
}

let id = 0

export default class TodoInput extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = { text: '' }
  }

  // 更新input值
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      text: event.target.value
    })
  }

  // 提交按钮
  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault() // 阻止默认事件
    let text = this.state.text.trim()
    if (!text) return
    this.props.addTodo({id: id++, text})
    this.setState({ text: '' })
  }

  public render () {
    const { text } = this.state
    const { handleChange, handleSubmit } = this
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={this.state.text} onChange={handleChange}/>
        <button type="submit">添加</button>
      </form>
    )
  }
}