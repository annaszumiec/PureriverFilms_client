import React, { useState } from "react";
import { Button, Form, Row, Col, CardGroup, Card } from "react-bootstrap";

export const UpdateView = ({ storedToken, storedUser }) => {
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [user, setUser] = useState(storedUser ? storedUser : null);

  const [username, setUsername] = useState(user.Username);
  const [password, setPassword] = useState();
  const [email, setEmail] = useState(user.Email);
  const [birthday, setBirthday] = useState(user.Birthday);

  const updateUser = (username) => {
    fetch(`https://pureriverfilms.herokuapp.com/users/${username}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((updatedUser) => {
        if (updatedUser) {
          setUser(updatedUser);
          localStorage.setItem("user", JSON.stringify(updatedUser));
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday,
    };

    fetch(`https://pureriverfilms.herokuapp.com/users/${storedUser.Username}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Changes saved");
          updateUser(username);
        } else {
          alert("Something went wrong");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Row className="mt-2">
      <Col md={5}>
        <CardGroup>
          <Card className="border-0">
            <Card.Body style={{ backgroundColor: "#212529" }}>
              <div className="text-start h2 mb-0" style={{ color: "#A8ADA4" }}>
                Update user info
              </div>

              <Form onSubmit={handleSubmit}>
                <Form.Group
                  controlId="forUsername"
                  className="mt-2"
                  style={{ color: "#D8E4FA" }}
                >
                  {/* <Form.Label>Username:</Form.Label> */}
                  <Form.Control
                    style={{
                      border: "none",
                      color: "#212529",
                      backgroundColor: "#E8E9EC",
                    }}
                    type="text"
                    // value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    minLength="3"
                    pattern="^[A-Za-z0-9 .,'\-!?%&]+$"
                    title="Username should contain more than 3 characters, may only contain letters, numbers and special characters: .,'-!?%&"
                    placeholder="Enter your name"
                  />
                </Form.Group>
                <Form.Group controlId="forPassword" className="mt-2">
                  {/* <Form.Label>Password:</Form.Label> */}
                  <Form.Control
                    style={{
                      border: "none",
                      color: "#212529",
                      backgroundColor: "#E8E9EC",
                    }}
                    type="password"
                    // value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    pattern="^[A-Za-z0-9 .,'\-!?%&]+$"
                    title="Password may only contain letters, numbers and special characters: .,'-!?%&"
                    placeholder="Create a password"
                  />
                </Form.Group>
                <Form.Group controlId="forEmail" className="mt-2">
                  {/* <Form.Label>Email:</Form.Label> */}
                  <Form.Control
                    style={{
                      border: "none",
                      color: "#212529",
                      backgroundColor: "#E8E9EC",
                    }}
                    type="email"
                    // value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter email"
                  />
                </Form.Group>
                <Form.Group controlId="forBirthday" className="mt-2">
                  {/* <Form.Label>Birthday:</Form.Label> */}
                  <Form.Control
                    style={{
                      border: "none",
                      color: "#212529",
                      backgroundColor: "#E8E9EC",
                    }}
                    type="date"
                    // value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                  />
                </Form.Group>
                <Row>
                  <Col className="text-end">
                    <Button
                      type="submit"
                      className="mt-3"
                      style={{
                        backgroundColor: "#3A473D",
                        border: "none",
                        color: "#E8E9EC",
                      }}
                    >
                      Update
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </CardGroup>
      </Col>
    </Row>
  );
};
