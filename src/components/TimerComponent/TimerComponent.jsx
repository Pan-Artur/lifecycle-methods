import { Component } from "react";

export class TimerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
    this.timer = null;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({ seconds: prevState.seconds + 1 }));
    }, 1000);
  }

//   componentDidUpdate() {
//     if (this.state.seconds >= 60) {
//       clearInterval(this.timer);
//     }
//   }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { seconds } = this.state;

    return (
      <div>
        <p>Пройшло секунд: {seconds}</p>
      </div>
    );
  }
}
