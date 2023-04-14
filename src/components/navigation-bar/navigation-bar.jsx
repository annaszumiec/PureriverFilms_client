import { Container, Form, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


export const NavigationBar = ({ user, onLoggedOut,  handleSearchInput  }) => {
  return (
    <Navbar collapseOnSelect style={{ background: " #3A473D" }} expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <h2
            style={{
              fontFamily: "Cormorant",
              fontWeight: "600",
              color: "#D8E4FA",
            }}
          >
            {" "}
            Pureriver Films
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{ float: "right" }}>
            {user && (
              <>
                <Nav.Link style={{ color: "A8ADA4" }} as={Link} to="/">
                  Movies
                </Nav.Link>
                <Nav.Link
                  style={{ color: "#A8ADA4" }}
                  as={Link}
                  to={`/users/${user.Username}`}
                >
                  Profile
                </Nav.Link>
                <Nav.Link onClick={onLoggedOut} style={{ color: "#A8ADA4" }}>
                  Log out
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>

        {user && (
          <>
            <Form className="d-flex ">
              <Form.Control
                className=" me-2"
                style={{
                  color: "light gray",
                  border: "none",
                  color: "#212529",
                  backgroundColor: "#E8E9EC",
                  marginTop: "15px",
                }}
                type="text"
                placeholder="Search by title"
                onChange={handleSearchInput}
              />

              {/* <Link to={"/"}>
                <Button
                  style={{
                    color: "#E8E9EC",
                    backgroundColor: "#3A473D",
                    borderColor: "gray",
                    marginTop: "15px",
                  }}
                  onClick={() => {
                    onSearch();
                  }}
                >
                  search
                </Button>
              </Link> */}
            </Form>
          </>
        )}
      </Container>
    </Navbar>
  );
};
