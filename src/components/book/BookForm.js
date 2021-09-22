import Button from '@restart/ui/esm/Button';
import React from 'react'
import {Form} from 'react-bootstrap'

export const BookForm = () => {
    return (
        <div>
            <h3>BookForm Component</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formaBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formaBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter book description" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formaBasicImage">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="text" placeholder="Enter image url" />
                </Form.Group>
                
                <Button variant="success" type="submit">Save</Button>                
            </Form>
        </div>
    )
}

export default BookForm;