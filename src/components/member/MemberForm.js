// import Button from '@restart/ui/esm/Button';
import React, {useState, useEffect} from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { memberSchema } from '../../validations/ValidationSchema';
import { createMember } from "../../api/memberService"



const MemberForm = ({history, match}) => {

    const {id} = match.params;
    // const isAddMode =  !id;
    const [member, setMember] = useState({})

    

        // object destructuring
    const { register, handleSubmit, reset, setValue, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(memberSchema)
    });

    const submitForm = (data) => {
        // return isAddMode ? insert(data) : update(id, data);
        return insert(data);
    }

    const insert = (data) => {
        return createMember(data)
          .then(resonse => {
              history.push('.')
          })
    }

    // const update = (id, data) => {
    //     return updateMember(id, data)
    //       .then(response => {
    //           history.push('..')
    //       })
    // }

    useEffect(() => {
        // if(!isAddMode) {
        //     getMemberById(id)
        //       .then((response) => {
        //           let member = response.data;
        //           const fields = [
        //               'title',
        //               'description',
        //               'year',
        //               'pages',
        //               'language',
        //               'publisher',
        //               'price',
        //               'purchaseAmount',
        //               'stock'
        //           ];
        //           fields.forEach(field => setValue(field, member[field]));
        //           setMember(member);
        //       })
        // }
    }, [])

    return (
        <Row>
            <Col>
            <Form onSubmit={handleSubmit(submitForm)} onReset={reset}>
            <h3 className="mb-5">Member Form</h3>
                <div style={{ textAlign: "left"}} className="mb-5">
                <Form.Group className="mb-3" controlId="formaBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter member title" name="title" 
                    {...register("title")} className={`form-control ${errors.title ? 'is-invalid' : ''}`}/>
                    <div className="invalid-feedback">{errors.title?.message}</div>
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formaBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter member description" name="description" 
                    {...register("description")} className={`form-control ${errors.description ? 'is-invalid' : ''}`}/>
                    <div className="invalid-feedback">{errors.description?.message}</div>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formaBasicPublisher">
                    <Form.Label>Publisher</Form.Label>
                    <Form.Control type="text" placeholder="Enter member publisher" name="publisher" 
                    {...register("publisher")} className={`form-control ${errors.publisher ? 'is-invalid' : ''}`}/>
                    <div className="invalid-feedback">{errors.publisher?.message}</div>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formaBasicYear">
                    <Form.Label>Year</Form.Label>
                    <Form.Control type="integer" placeholder="Enter member year" name="year" 
                    {...register("year")} className={`form-control ${errors.year ? 'is-invalid' : ''}`}/>
                    <div className="invalid-feedback">{errors.year?.message}</div>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formaBasics">
                    <Form.Label>Page</Form.Label>
                    <Form.Control type="integer" placeholder="Enter member page" name="pages" 
                    {...register("pages")} className={`form-control ${errors.pages ? 'is-invalid' : ''}`}/>
                    <div className="invalid-feedback">{errors.pages?.message}</div>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formaBasicLanguage">
                    <Form.Label>Language</Form.Label>
                    <Form.Control type="text" placeholder="Enter member language" name="language" 
                    {...register("language")} className={`form-control ${errors.language ? 'is-invalid' : ''}`}/>
                    <div className="invalid-feedback">{errors.language?.message}</div>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formaBasicStock">
                    <Form.Label>Stock</Form.Label>
                    <Form.Control type="integer" placeholder="Enter member stock" name="stock" 
                    {...register("stock")} className={`form-control ${errors.stock ? 'is-invalid' : ''}`}/>
                    <div className="invalid-feedback">{errors.stock?.message}</div>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formaBasicPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="integer" placeholder="Enter member price" name="price" 
                    {...register("price")} className={`form-control ${errors.price ? 'is-invalid' : ''}`}/>
                    <div className="invalid-feedback">{errors.price?.message}</div>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formaBasicPrice">
                    <Form.Label>Purchase Amount</Form.Label>
                    <Form.Control type="integer" placeholder="Enter member purchase amount" name="purchaseAmount" 
                    {...register("purchaseAmount")} className={`form-control ${errors.purchaseAmount ? 'is-invalid' : ''}`}/>
                    <div className="invalid-feedback">{errors.purchaseAmount?.message}</div>
                </Form.Group>
                
                
                
                </div>                
                <Button variant="success" type="submit">Save</Button>                
                <Button variant="danger" type="reset">Reset</Button>                
            </Form>
        
            </Col>
        </Row>
    )
}

export default MemberForm;