import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import "../stylesheets/Register.css"
import { useNavigate } from 'react-router-dom';


function Register() {
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('')
  const navigate = useNavigate('')

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Register attempted with:', { id, password });
    // Here you would typically send a request to your server
    if (id && password && email && nombreCompleto && birthday && repeatPassword && repeatPassword === password) {

      const url = "http://localhost:8070/auth/register";

      // Datos del formulario
      const formData = new FormData();
      formData.append("id", id);
      formData.append("nombre", nombre);
      formData.append("nombreCompleto", nombreCompleto);
      formData.append("password", password);

      try {
        const response = await fetch(url, {
          method: "POST",
          body: formData, // Cuerpo en formato URL-encoded
        });
        
        if(response.ok)
          navigate("/")
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
            <Form.Group className="mb-3" controlId="formBasicNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Introduce tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNombreCompleto">
              <Form.Label>Nombre Completo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Introduce tu nombre"
                value={nombreCompleto}
                onChange={(e) => setNombreCompleto(e.target.value)}
                required
              />
            </Form.Group>
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

            <div className="mb-3">
              <div className="row">
                <Form.Group className="col-md-6" controlId="formBasicBirthday">
                  <Form.Label>Fecha de Nacimiento</Form.Label>
                  <Form.Control
                    type="date"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="col-md-6">
                  <Form.Label>DNI</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Introduce tu dni"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    required
                  />
                </Form.Group>
              </div>
            </div>
            <div class="mb-3">
              <div class="row">
                <Form.Group className="col-md-6" controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="col-md-6" controlId="formBasicRepeatPassword">
                  <Form.Label>Repetir contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                    required
                  />
                </Form.Group>
              </div>
            </div>
            <Button variant="primary" type="submit" className="w-100">
              Registrar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container >
  );
}

export default Register;