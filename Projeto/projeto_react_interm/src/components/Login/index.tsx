import { Col, Form, Row } from "react-bootstrap";

const Login = () => {
    return (
        <div className="pt-4">
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    name="email"
                    type="text"
                    placeholder="Email"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="senha">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control
                    required
                    name="senha"
                    type="password"
                    placeholder="Senha"
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </div>
      );
}

export default Login;
