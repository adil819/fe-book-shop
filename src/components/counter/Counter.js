import React from 'react'
import { Col } from 'react-bootstrap'

export const Counter = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (
    <Col className="mt-5">
        <h1>{count}</h3>
        <button onClick={increment} className="btn btn-outline btn-info mt-3"></button>
        <button onClick={decrement} className="btn btn-outline btn-info mt-3"></button>
    </Col>
    )
}
