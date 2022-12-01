import React from 'react'

class LiveCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
    }

    tick() {
        this.setState(state => ({
            seconds: state.seconds + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="card react">
                <a>
                    <h2>
                        React
                        <span>&rarr;</span>
                    </h2>
                    <p className="flex justify-center items-center">
                        Has been counting for: {this.state.seconds} seconds.
                    </p>
                </a>
            </div>
        );
    }
}

export default LiveCounter;