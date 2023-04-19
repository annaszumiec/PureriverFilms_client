import { useState } from "react";
import {
  Card,
  CardGroup,
  Col,
  Container,
  Row,
  Button,
  Form,
} from "react-bootstrap";

export const SignupView = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday,
    };

    fetch("https://pureriverfilms.herokuapp.com/users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        alert("Signup successful");
        window.location.reload();
      } else {
        alert("Signup failed");
      }
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <CardGroup>
            <Card
              className="p-4 rounded-4 shadow-lg m-auto"
              style={{
                width: "17rem",
                backgroundColor: " #3A473D",
                opacity: "70%",
                border: "1px solid #D8E4FA ",
                maxWidth: "300px",
              }}
            >
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formUsername">
                  <Form.Label style={{ margin: "0px", color: "white" }}>
                    Username:
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    minLength="3"
                    style={{ color: "white" }}
                  />
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Label
                    style={{ margin: "0px", marginTop: "10px", color: "white" }}
                  >
                    Password:
                  </Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ color: "white" }}
                  />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label
                    style={{ margin: "0px", marginTop: "10px", color: "white" }}
                  >
                    Email:
                  </Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ color: "white" }}
                  />
                </Form.Group>

                <Form.Group controlId="formBirthday">
                  <Form.Label
                    style={{ margin: "0px", marginTop: "10px", color: "white" }}
                  >
                    Birthday:
                  </Form.Label>
                  <Form.Control
                    type="birthday"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    required
                    style={{ color: "white" }}
                  />
                </Form.Group>
                <Button
                  className="btn-primary d-block w-100 mb-3"
                  type="submit"
                  style={{ marginTop: "40px" }}
                >
                  Sign up
                </Button>
              </Form>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
};
