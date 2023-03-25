import { Container, Nav, Navbar,Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const AccessCard = ({ user, onLoggedOut }) => {
  return (
    <Navbar
     
      bg='light'
      
     
    >
      <Container>
        
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            {!user && (
              <>
                <Nav.Link as={Link} to='/login'>
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to='/signup'>
                  Sign up
                </Nav.Link>
              </>
            )}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};