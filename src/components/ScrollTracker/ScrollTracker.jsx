import { Component } from "react";

export class ScrollTracker extends Component {
    constructor(props) {
        super(props);
        this.state = { scrollY: window.scrollY };
        this.onScroll = this.onScroll.bind(this);
    }

    onScroll() {
        this.setState({ scrollY: window.scrollY });
    }

    componentDidMount() {
        window.addEventListener("scroll", this.onScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll);
    }

    render() {
        const { scrollY } = this.state;

        const formattedScrollY = Math.floor(scrollY);

        return (
            <div>
                <p>Поточна позиція скролу: {formattedScrollY}</p>
            </div>
        );
    }
}