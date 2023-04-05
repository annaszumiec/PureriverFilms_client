import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const SearchBox = (props) => {
	return (
		<div className='col col-sm-4'>
			<input
				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Type to search...'
			></input>
		</div>
	);
};


export const NavigationBar = ({ user, onLoggedOut }) => {
  return (
    <Navbar
      collapseOnSelect
      style={{ background:" #3A473D"}}
      expand='md'
    >
      <Container>
        <Navbar.Brand as={Link} to='/'  >
        <h2  style={{ fontFamily: "Cormorant",fontWeight:"600", color:"#D8E4FA" }} > Pureriver Films</h2>  
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto' >
          
            {user && (
              <>
                <Nav.Link
                 style={{color:"A8ADA4" }}
                 as={Link} to='/'>
                  Movies
                </Nav.Link>
                <Nav.Link 
                style={{color:"#A8ADA4" }}
                as={Link} to={`/users/${user.Username}`}>
                  Profile
                </Nav.Link>
                <Nav.Link onClick={onLoggedOut}
                style={{color:"#A8ADA4" }}
                >Log out</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};