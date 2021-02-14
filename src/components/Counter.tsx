import React, { ReactNode } from 'react'

interface Props {
  number: number
}

// type PropsWithChildren<Props> = Readonly<Props> & Readonly<{
//   children?: ReactNode
// }>

// type ComponentProps = PropsWithChildren <Props>

export default class Counter extends React.Component<Props> {
  render () {
    const { number, children } = this.props
    return (
      <div>
        <p>{ number }</p>
      </div>
    )
  }
}