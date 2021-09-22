import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import CounterButton from './CounterButton'

class CounterComponent extends Component {

    state = {
        count: 0
    }

    handleChange = (newValue) => {
        this.setState({
            count: this.state.count + newValue
        })
        // let number;
        // if(this.state.count==0 && newValue==-1){
        //     number = 0;
        // } else {
        //     number = this.state.count + newValue;
        // }
        // this.setState({
        //     count: number
        // })
    }

    render() {
        return (
            <Col className="mt-5">
                <h3>{this.state.count}</h3>
                <CounterButton onHandleChange={(value) => this.handleChange(value)}/>
            </Col>
        )
    }
}

export default CounterComponent;