// import Button from '@restart/ui/esm/Button';
import React, {useState, useEffect} from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { memberSchema } from '../../validations/ValidationSchema';
import { createMember } from "../../api/memberService"
// import { getMemberById, createMember, updateMember } from "../../api/memberService"



const MemberForm = ({history, match}) => {

    const {id} = match.params;
    const isAddMode =  !id;
    const [member, setMember] = useState({})

    

        // object destructuring
    const { register, handleSubmit, reset, setValue, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(memberSchema)
    });

    const submitForm = (data) => {
        return isAddMode ? insert(data) : update(id, data);
    }

    const insert = (data) => {
        return createMember(data)
          .then(resonse => {
              history.push('.')
          })
    }

    const update = (id, data) => {
        // return updateMember(id, data)
        //   .then(response => {
        //       history.push('..')
        //   })
    }

    useEffect(() => {
        if(!isAddMode) {
            // getMemberById(id)
            //   .then((response) => {
            //       let member = response.data;
            //       const fields = [
            //           'title',
            //           'description',
            //           'year',
            //           'pages',
            //           'language',
            //           'publisher',
            //           'price',
            //           'purchaseAmount',
            //           'stock'
            //       ];
            //       fields.forEach(field => setValue(field, member[field]));
            //       setMember(member);
            //   })
        }
    }, [])

    return (
        <Row>
            <Col>
            <Form onSubmit={handleSubmit(submitForm)} onReset={reset}>
            <h3 className="mb-5">Member Form</h3>
                <div style={{ textAlign: "left"}} className="mb-5">
                
                <Form.Group className="mb-3" controlId="formaBasicTitle">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter member's first name" name="firstName" 
                    {...register("firstName")} className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}/>
                    <div className="invalid-feedback">{errors.firstName?.message}</div>
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formaBasicDescription">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter member's last name" name="lastName" 
                    {...register("lastName")} className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}/>
                    <div className="invalid-feedback">{errors.lastName?.message}</div>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formaBasicPublisher">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter member's email" name="email" 
                    {...register("email")} className={`form-control ${errors.email ? 'is-invalid' : ''}`}/>
                    <div className="invalid-feedback">{errors.email?.message}</div>
                </Form.Group>    
                
                <Form.Group className="mb-3" controlId="formaBasicPublisher">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter member password" name="password" 
                    {...register("password")} className={`form-control ${errors.password ? 'is-invalid' : ''}`}/>
                    <div className="invalid-feedback">{errors.password?.message}</div>
                </Form.Group>      
                
                <Form.Group className="mb-3" controlId="formaBasicPublisher">
                    {/* <Form.Label>Status</Form.Label> */}
                    <Form.Control hidden type="integer" placeholder="" name="status" value={1}
                    {...register("status")} className={`form-control ${errors.status ? 'is-invalid' : ''}`}/>
                    <div className="invalid-feedback">{errors.status?.message}</div>
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