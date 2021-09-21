import React from "react";
import { Card, Button } from 'react-bootstrap'

const BookComponent = () => {

    const imgUrl = '';

    return (

        <div>
            <Card style={{ width: '18rem '}}>
                <Card.Img variant="top" src={imgUrl} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text tob  uild on the card
                        make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>

    )

}

export default BookComponent;