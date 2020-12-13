import * as React from 'react'
import { Button } from 'antd';

interface IProps {
  title: string,
  age: number,
  work?: string,
  onSend: any
}

interface IState {
  count: number
}

export default class Hello extends React.Component<IProps, IState>{

  readonly state: Readonly<IState> = {
    count: 1000
  }

  handleBtnAdd = () => {
    const {count} = this.state
    this.setState({
      count: count+2000
    })
  }

  handleBtnSendMsg = () => {
    this.props.onSend("child msg")
  }

  render() {
    const {title, age} = this.props
    return (
      <div>
        Hello {title}, age {age}, count {this.state.count}
        <Button type="primary" onClick={this.handleBtnAdd}>增加</Button>
        <Button type="primary" onClick={this.handleBtnSendMsg}>send msg</Button>
      </div>
    );
  }
} 