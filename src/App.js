import { Component } from 'react';

import { WindowSizeTracker } from './components/WindowSizeTracker/WindowSizeTracker';
import { TimerComponent } from './components/TimerComponent/TimerComponent';
import { ScrollTracker } from './components/ScrollTracker/ScrollTracker';

import { UserStatusMonitor } from './components/UserStatusMonitor/UserStatusMonitor';

import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isOnline: null };
  }

  toggleStatus = () => {
    this.setState((prevState) => ({ isOnline: !prevState.isOnline }))
  }

  render() {
    return (
      <div className="App">
        <WindowSizeTracker />
        <TimerComponent />
        <ScrollTracker />
        <UserStatusMonitor isOnline={this.state.isOnline}/>
        <button onClick={this.toggleStatus}>Перемкнути статус</button>
      </div>
    );
  }
}

