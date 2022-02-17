import { useState } from "react";
import { Container } from "../../containers";
import { Cliente } from "../../types/cliente";
import { Row, Col, Button } from "react-bootstrap";
import { usePost } from "../../hooks/customHooks";
// import LoginHooks from "../../hooks/loginHooks";
import './home.scss';
import { Landing } from "../../components/Landing";
import { SignInUpModal } from "../../components/Modal";
import { ShowModalInterface } from "../../types/modal";

export const Home = () => {
  const { apiPost } = usePost("/clientes");
  const [showModal, setShowModal] = useState<ShowModalInterface>({
    show: false,
    type: undefined
  });

  const [clientes, setClientes] = useState<Cliente[]>([]);
  console.log("clientes", clientes);

  const cadastrarCliente = async (cliente: Cliente) => {
    console.log("Cliente cadastrado");
    await apiPost(cliente);
    setClientes([...clientes, cliente]);
  };
  
  const handleClose = () => setShowModal({
    show: false,
    type: undefined
  });
  const handleShow = (type: "up" | "in" | undefined) => setShowModal({
    show: true,
    type: type
  });


  return (
    <div className="landing-page">
      <Container>
        <SignInUpModal show={showModal} handleClose={handleClose} onCadastroCliente={cadastrarCliente}/>
        <Row className="banner">
          <Col>
            <Landing />
            <div className="d-grid gap-2 d-md-flex justify-content-md-evenly">
              <Button onClick={() => handleShow("in")}>Entrar</Button>
              <Button onClick={() => handleShow("up")}>Cadastrar</Button>
            </div>
          </Col>
          <Col></Col>
        </Row>
        <Row>
        <div>Conteudo</div>
        </Row>
      </Container>
    </div>

  );
};
