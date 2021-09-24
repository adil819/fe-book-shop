// import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { bookSchema } from '../../validations/ValidationSchema';

const BookForm = (props) => {

    // object destructuring
  const { register, handleSubmit, reset, setValue, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(bookSchema)
  });

  const submitForm = (data) => {
    console.log(data);
  }

    return (
        <Row>
            <Col>
            <Form onSubmit={handleSubmit(submitForm)}>
            <h3 className="mb-5">New Book Form</h3>
                <div style={{ textAlign: "left"}} className="mb-5">
                <Form.Group className="mb-3" controlId="formaBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter book title" name="title" 
                    {...register("title")} className={`form-control ${errors.title ? 'is-invalid' : ''}`}/>
                    <div className="invalid-feedback">{errors.title?.message}</div>
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formaBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter book description" name="description" 
                    {...register("description")} className={`form-control ${errors.description? 'is-invalid' : ''}`}/>
                    <div className="invalid-feedback">{errors.description?.message}</div>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formaBasicPublisher">
                    <Form.Label>Publisher</Form.Label>
                    <Form.Control type="text" placeholder="Enter book publisher" name="publisher" 
                    {...register("publisher")} className={`form-control ${errors.publisher? 'is-invalid' : ''}`}/>
                    <div className="invalid-feedback">{errors.publisher?.message}</div>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formaBasicYear">
                    <Form.Label>Year</Form.Label>
                    <Form.Control type="integer" placeholder="Enter book year" name="year" 
                    {...register("year")} className={`form-control ${errors.year ? 'is-invalid' : ''}`}/>
                    <div className="invalid-feedback">{errors.year?.message}</div>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formaBasicPage">
                    <Form.Label>Page</Form.Label>
                    <Form.Control type="integer" placeholder="Enter book page" name="page" 
                    {...register("page")} className={`form-control ${errors.page ? 'is-invalid' : ''}`}/>
                    <div className="invalid-feedback">{errors.page?.message}</div>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formaBasicLanguage">
                    <Form.Label>Language</Form.Label>
                    <Form.Control type="text" placeholder="Enter book language" name="language" 
                    {...register("language")} className={`form-control ${errors.language ? 'is-invalid' : ''}`}/>
                    <div className="invalid-feedback">{errors.language?.message}</div>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formaBasicStock">
                    <Form.Label>Stock</Form.Label>
                    <Form.Control type="integer" placeholder="Enter book stock" name="stock" 
                    {...register("stock")} className={`form-control ${errors.stock ? 'is-invalid' : ''}`}/>
                    <div className="invalid-feedback">{errors.stock?.message}</div>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formaBasicPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="integer" placeholder="Enter book price" name="price" 
                    {...register("price")} className={`form-control ${errors.price ? 'is-invalid' : ''}`}/>
                    <div className="invalid-feedback">{errors.price?.message}</div>
                </Form.Group>
                
                </div>                
                <Button variant="success" type="submit">Save</Button>                
            </Form>
        
            </Col>
        </Row>
    )
}

export default BookForm;