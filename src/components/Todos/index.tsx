import React, { ReactNode } from 'react'
import { Todo } from '@/models'
import TodoInput from './TodoInput'
import TodoItem from './Todoitem'

interface Props {}

interface State {
  todos: Array<Todo>
}

export default class Todos extends React.Component<Props, State> {
  state = {
    todos: [] as Array<Todo>
  }

  addTodo = (todo: Todo) => {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render () {
    return (
      <div>
        <TodoInput addTodo={this.addTodo}/>
        <ul>
          {
            this.state.todos.map(todo => (
              <TodoItem todo={ todo } key={todo.id}/>
            ))
          }
        </ul>
      </div>
    )
  }
}