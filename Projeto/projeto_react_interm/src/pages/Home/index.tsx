import { useState } from "react";
import { Container } from "../../containers";
import { Cliente } from "../../types/cliente";
import { Row, Col, Button } from "react-bootstrap";
import { usePost } from "../../hooks/customHooks";
import LoginHooks from "../../hooks/loginHooks";
import './home.css';
import { Landing } from "../../components/Landing";
import { SignInUpModal } from "../../components/Modal";

export const Home = () => {
  const { apiPost } = usePost("/clientes");
  const [showModal, setShowModal] = useState<boolean>(false);

  const [clientes, setClientes] = useState<Cliente[]>([]);
  console.log("clientes", clientes);

  const cadastrarCliente = async (cliente: Cliente) => {
    console.log("Cliente cadastrado");
    await apiPost(cliente);
    setClientes([...clientes, cliente]);
  };
  
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);


  return (
    <div className="landing-page">
      <Container>
        <SignInUpModal show={showModal} handleClose={handleClose} onCadastroCliente={cadastrarCliente}/>
        <Row>
          <Col>
            <Landing />
            <div className="d-grid gap-2 d-md-flex justify-content-md-evenly">
              <Button>Entrar</Button>
              <Button onClick={handleShow}>Cadastrar</Button>
            </div>
            <LoginHooks />
          </Col>
          <Col>
            <div className="pt-4">
              
            </div>
            <br />
          </Col>
        </Row>
        <div>Conteúdo</div>
      </Container>
    </div>

  );
};
