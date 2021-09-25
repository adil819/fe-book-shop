import React from "react";
import { Card, Button, ButtonGroup, Col } from 'react-bootstrap'
import './MemberComponent.css'
import { Link } from 'react-router-dom'
// import { tmpImage } from '../../api/MemberApi'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
// npm install react-confirm-alert --save

// const MemberComponent = ( title, description) => { // kalau gini dibawahnya langsung title gausah props.title
const MemberComponent = (props) => {
    

   const confirmDelete = () => {
        confirmAlert({
          title: 'Confirm to delete',
          message: 'Are you sure? The member will disappear.',
          buttons: [
            {
              label: 'Yes',
              onClick: () => props.handleDelete(props.memberId)
            },
            {
              label: 'No',
            //   onClick: () => alert('Click No')
            }
          ]
        });
      };
    

    return (
  
        <Col lg={3} md={6}>
            
            <Card bg="light" className="membercard  mt-5 mb-3" style={{width:"16rem", height:"90%"}}>
                {/* <Card.Img variant="top" className="member-img" src={props.image} /> */}
                <Card.Body className="member-body">
                    <Card.Img variant="top" className="member-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-3djJitD87HAlInUtedfJ0N5dyqxytDgubg&usqp=CAU" />
                    <Card.Text/>
                    <Card.Title style={{fontSize:20}} class="text-titlecase text-center"><b>{props.firstName}  {props.lastName}</b></Card.Title>
                    <Card.Text>
                        {/* {props.description} */}
                    </Card.Text>
                    <Card.Text style={{width:"15rem"}} class="text-lowercase text-center"><i>{props.email}</i> </Card.Text>
                    
                    {/* <Card.Text> Tahun Terbit : <i>{props.year}</i> </Card.Text> */}
                    
                    <div className="d-flex justify-content-between align-items-center">
                        <ButtonGroup aria-label="Basic example">
                            {/* <Link to={`/members/${props.memberId}`} className="btn btn-outline-primary" style={{marginLeft:10}}>Detail</Link> */}
                            <Link to={`/members/edit/${props.memberId}`} className="btn btn-outline-warning" style={{marginLeft:45}}>Update</Link>
                            {
                                props.status == 0 ?                                    
                                    <button onClick={() => props.handleDelete(props.memberId)} className="btn btn-sm btn-outline-danger" disabled={true}>
                                    Unactivate
                                    </button>
                                :
                                    <button onClick={confirmDelete} className="btn btn-sm btn-outline-danger">
                                    Delete
                                    </button>
                            }
                        </ButtonGroup>
                    </div>
                </Card.Body>
            </Card>
            
        </Col>
    )

}

export default MemberComponent;