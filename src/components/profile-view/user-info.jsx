import React from 'react';
import { Row, Col } from 'react-bootstrap';
import moment from 'moment';

export const UserInfo = ({ user }) => {
  let userBirthday = moment.utc(user.Birthday).format('DD/MM/YYYY');

  return (
    <Row 
    style={{color:"#A8ADA4" }}
    className='d-flex flex-column flex-lg-row ms-2  mt-lg-3 mt-3'>
      <div>
        <span>Username: </span>
        <span
          style={{  color:"#D8E4FA", fontSize:"20px"}}>
            {user.Username}</span>
      </div>
      <div>
        <span>Email: </span>
        <span
         style={{  color:"#D8E4FA", fontSize:"20px"}}
         >{user.Email}</span>
      </div>
      <div
       style={{ marginBottom:"30px" }}
      >
        <span> Birthday: </span>
        <span 
          style={{  color:"#D8E4FA",fontSize:"20px"}}
          >{userBirthday}</span>
      </div>
    </Row>
  );
};