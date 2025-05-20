import { Component } from "react";

export class UserStatusMonitor extends Component {
  constructor(props) {
    super(props);
    this.state = { status: props.isOnline ? "online" : "offline", tick: 0 };
    this.tickTimer = null;
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const nextStatus = nextProps.isOnline ? "online" : "offline";

    if (nextStatus !== prevState.status) {
      return {
        status: nextStatus,
        tick: 0,
      };
    }

    return null;
  }

  componentDidMount() {
    if (this.state.status === "online") {
      this.startTimer();
    }

    console.log("Запит до сервера...");
  }

  shouldComponentUpdate(nextProps, nextState) {
    // if (this.props === nextProps && this.state === nextState) {
    //     return true;
    // } else {
    //     return false;
    // }

    return nextState.tick % 5 === 0 || this.state.status !== nextState.status;
  }

  getSnapshotBeforeUpdate() {
    return new Date().toLocaleDateString();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.status !== this.state.status) {
      if (this.state.status === "online") {
        this.startTimer();
      } else {
        this.stopTimer();
      }
    }

    console.log(`Було: ${prevState.status}`);
    console.log(`Стало: ${this.state.status}`);
    console.log(`Оновлено в ${snapshot}`);
  }

  componentWillUnmount() {
    this.stopTimer();
    console.log("Компонент видалено!");
  }

  startTimer = () => {
    this.tickTimer = setInterval(() => {
      this.setState((prevState) => ({
        tick: prevState.tick + 1
      }));
    }, 1000);
  }

  stopTimer = () => {
    clearInterval(this.tickTimer);
    this.tickTimer = null;
  };

  render() {
    const { status, tick } = this.state;

    return (
      <div>
        <p>Статус користувача: {status}</p>
        <p>Час онлайну: {status === "online" ? tick : 0}</p>
      </div>
    );
  }
}
