import React from 'react'
import ReactDOM from 'react-dom'
import Todos from './components/Todos'
import Counter from './components/Counter'

ReactDOM.render(
  <div>
    <Counter number={100}/>
    <hr/>
    <Todos/>
  </div>,
  document.getElementById('root')
)