import {  Nav, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const AccessCard = ({ user }) => {
  return (

          <Nav
           className="  m-auto"
           style={{ width: "17rem",maxWidth:"300px",paddingTop:"100px" }}
          >
            {!user && (
              <>
                <NavLink 
              style={{ fontWeight:"300", fontSize:"28",fontFamily: "Cormorant",marginBottom:"20px"}}
                as={Link} to='/login'>
                  Login 
                </NavLink>
                <NavLink
                  style={{ fontWeight:"300", fontSize:"28",fontFamily: "Cormorant"}}
                   as={Link} to='/signup'>
                  Sign up
                </NavLink>
              </>
            )}
            
          </Nav>
       
    

  );
};