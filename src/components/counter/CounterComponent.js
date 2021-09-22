import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import CounterButton from './CounterButton'

class CounterComponent extends Component {

    constructor(props) {
        super(props);
        console.log('Constructor called');
    }

    state = {
        count: 0
    }

    handleChange = (newValue) => {
        this.setState({
            count: this.state.count + newValue
        })
    }

    componenDidMount() {
        console.log('ComponentDidMount called');
    }

    componentDidUpdate() {
        console.log('ComponentDidUpdate called');
    }

    render() {
        console.log('Render called');
        return (
            <Col className="mt-5">
                <h3>{this.state.count}</h3>
                <CounterButton onHandleChange={(value) => this.handleChange(value)}/>
            </Col>
        )
    }
}

export default CounterComponent;