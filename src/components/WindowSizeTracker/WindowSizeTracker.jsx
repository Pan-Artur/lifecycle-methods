import { Component } from "react";

export class WindowSizeTracker extends Component {
    constructor(props) {
        super(props);
        this.state = { width: window.innerWidth, height: window.innerHeight };
        this.onResize = this.onResize.bind(this);
    }

    onResize() {
        this.setState({ width: window.innerWidth, height: window.innerHeight })
    }

    componentDidMount() {
        window.addEventListener("resize", this.onResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.onResize);
    }

    render() {
        const { width, height } = this.state;

        return (
            <p>Розмір вікна: {width} x {height}</p>
        );
    }
}