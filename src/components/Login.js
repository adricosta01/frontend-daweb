
// Login.js:
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import "../stylesheets/Login.css"


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Login attempted with:', { username, password });
    // Here you would typically send a request to your server
    if (username && password) {
      
        const url = "http://localhost:8070/auth/login";
      
        // Datos del formulario
        const data = new URLSearchParams();
        data.append("username", username);
        data.append("password", password);
      
        try {
          const response = await fetch(url, {
            mode: 'no-cors',
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded", // Tipo de contenido para formularios
            },
            body: data, // Cuerpo en formato URL-encoded
          });
      
          const result = await response.data(); // Procesa la respuesta como JSON
          console.log("Success:", result);
        } catch (error) {
          console.error("Error:", error);
        }
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6}>
          <h2 className="text-center mb-4">Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;