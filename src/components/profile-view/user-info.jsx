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
        <span className='fw-bolder'>{user.Username}</span>
      </div>
      <div>
        <span>Email: </span>
        <span className='fw-bolder'>{user.Email}</span>
      </div>
      <div>
        <span>Birthday: </span>
        <span className='fw-bolder'>{userBirthday}</span>
      </div>
    </Row>
  );
};