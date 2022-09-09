import React, { Component } from "react";

class CounterClass extends React.Component {
    constructor() {
        super();
        this.increment = this.increment.bind(this)
        this.state = {
            number: 0
        }
    }

    increment() {
        this.setState({
            number: ++this.state.number
        })
    }

    render() {
        return(
            <div>
                <h3>Classbase Component</h3>
                <h2>Counter = {this.state.number}</h2>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }
}

export default CounterClass;