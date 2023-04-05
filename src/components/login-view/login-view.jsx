import { useState } from "react";
import { Card, CardGroup, Col, Container, Row, Button, Form} from "react-bootstrap";


export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
    };

    fetch("https://pureriverfilms.herokuapp.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Login response: ", data);

        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.token);
          onLoggedIn(data.user, data.token);
        } else {
          alert("No such user");
        }
      })
      .catch((e) => {
        alert("Something went wrong");
      });
  };

  return (
    <Container >
      <Row>
        <Col>
        <CardGroup>
        <Card 
     className="p-4 rounded-4 shadow-lg m-auto"
     style={{ width: "17rem",backgroundColor: " #3A473D",opacity:"70%",border:"1px solid #D8E4FA ",maxWidth:"300px" }}
        >

    <Form
     style={{ color:" white" }}
     onSubmit={handleSubmit}>
      <Form.Group controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          minLength="3" 
          style={{ color:"white"}}
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label
         style={{ margin:"0px", marginTop:"10px"}}
        >Password:</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ color:"white"}}
          
        />
      </Form.Group>

      <Button 
      className=" d-block w-100 mb-3"
      type="submit"
      style={{ marginTop:"40px"}}
       >
        Log in
      </Button>
    </Form>
    

    </Card>
    </CardGroup>
    </Col>
    </Row>
    </Container >
  );
};