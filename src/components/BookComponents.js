import React from "react";
import { Card, Button } from 'react-bootstrap'

const BookComponent = (props) => {

    const imgUrl = 'https://avatars.githubusercontent.com/u/90153758?s=200&v=4';

    return (

            <div className="col-lg-3">
            <Card className="mt-5">
                <Card.Img variant="top" src={imgUrl} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Button variant="primary">Apply</Button>
                </Card.Body>
            </Card>
            </div>
        

    )

}

export default BookComponent;