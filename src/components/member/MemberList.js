import React, {useState, useEffect} from 'react'
import MemberComponent from "./MemberComponents";
// import {members} from "../../api/members";
import { Link } from 'react-router-dom'
import { Row, Container, Modal } from "react-bootstrap"
// import memberService, { deleteMember } from "../../api/memberService"
import memberService from "../../api/memberService"
import { getListMember } from "../../api/memberService"
import ModalComponent from '../modal/ModalComponent';

const MemberList = ({match}) => {

  const { path } = "member";
  // const { path } = match;
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getListMember()
      loadData();
  }, [])

  const loadData = () => {
    getListMember()
      .then((response) => {
        console.log(response.data)
        setMembers(response.data) 
      })
  }

  const memberDelete = (id) => {
    // return deleteMember(id) 
    //   .then(response => {
    //     loadData();
    //   })
  }

  const handleDeleteTrue = () => {
    // if (modalShow.show && modalShow.id){
    //   memberDelete(modalShow.id)
    //   setModalShow({
    //     show:false,
    //     id:null
    //   })
    // }
  }

  

    return (    
      <Container>
        <h3>Member Page</h3>
        <Link to="member/add" className="btn btn-success mb-3 text-uppercase">Add Member</Link>
        <Row className="mt-5">
            {
                members.map(member => 
                  <MemberComponent 
                  firstName={member.firstName}
                  lastName={member.lastName}
                  email={member.email}
                  key={member.id}
                  memberId={member.id}
                  status={member.status}
                    // // image={tmpImage}
                    // path={path}
                    handleDelete={memberDelete}
                    variant="primary"/>
                  )
            }
            {
              members && !members.length && <h4>No Member Display</h4>
            }
        </Row>
      </Container>
      
    );
}

export default MemberList;

