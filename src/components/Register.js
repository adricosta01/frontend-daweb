import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import "../stylesheets/Register.css"


function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Register attempted with:', { username, password });
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
          <h2 className="text-center mb-4">Registro</h2>
          <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicFullName">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Introduce tu nombre"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </Form.Group>


              {/* Campo Email */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Introduce tu correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              {/* Campo Fecha de Nacimiento */}
              <Form.Group className="mb-3" controlId="formBasicBirthday">
                <Form.Label>Fecha de Nacimiento</Form.Label>
                <Form.Control
                  type="date"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                  required
                />
              </Form.Group>

              {/* Campo Usuario */}
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Introduce tu nombre de usuario"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formRepeatPassword">
              <Form.Label>Repetir contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Registrar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;