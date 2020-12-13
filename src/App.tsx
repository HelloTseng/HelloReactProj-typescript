import React from 'react';
import Hello from './components/Hello'
import List from './pages/List'
import './App.css';

import * as actions from './actions/index';
import { IStoreState } from "./types/index";
import { connect } from 'react-redux';

export interface IProps {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

class App extends React.Component<IProps,any>{
  handleSendMsg = (msg: string) => {
    console.log('app send ' + msg)
  }
  render() {
    const { name,enthusiasmLevel,onIncrement,onDecrement } = this.props;
    return (
      <div className="App">
        <Hello title="Kevin" age={23} onSend={this.handleSendMsg}/>
        <List />
        <div>
          <p>{ name }</p>
          <p>{ enthusiasmLevel }</p>
          <button onClick={onDecrement}>-</button>
          <button onClick={onIncrement}>+</button>
        </div>
      </div>
    );
  }
}

export function mapStateToProps({ enthusiasmLevel, languageName }: IStoreState) {
  return {
    enthusiasmLevel,
    name: languageName,
  }
}

export function mapDispatchToProps(dispatch:any) {
  return {
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    onIncrement: () => dispatch(actions.incrementEnthusiasm())
  }
}

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
