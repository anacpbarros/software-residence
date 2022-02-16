import { useState } from "react";
import { Container } from "../../containers";
import { Cliente } from "../../types/cliente";
import { Row, Col, Button } from "react-bootstrap";
import { CadastroClientes } from "../../components/CadastroClientes";
import { usePost } from "../../hooks/customHooks";
import LoginHooks from "../../hooks/loginHooks";
import './home.css';

export const Home = () => {
  const { apiPost } = usePost("/clientes");

  const [clientes, setClientes] = useState<Cliente[]>([]);
  console.log("clientes", clientes);

  const cadastrarCliente = async (cliente: Cliente) => {
    console.log("Cliente cadastrado");
    await apiPost(cliente);
    setClientes([...clientes, cliente]);
  };

  return (
    <Container>
      <Row>
        <Col>
         <div>Conteudoh</div>
        </Col>
        <Col>
          <div className="pt-4">
            <LoginHooks />
            <CadastroClientes onCadastroCliente={cadastrarCliente} />
          </div>
          <br />
        </Col>
      </Row>
      <div>Conteúdo</div>
    </Container>
  );
};
