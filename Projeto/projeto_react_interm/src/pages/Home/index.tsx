import { useState } from "react";
import { Container } from "../../containers";
import { Cliente } from "../../types/cliente";
import { Row, Col, Button } from "react-bootstrap";
import { CadastroClientes } from "../../components/CadastroClientes";
import { usePost } from "../../hooks/customHooks";
import LoginHooks from "../../hooks/loginHooks";
import './home.css';
import { ListUserReview } from "../../components/ListUserReview";
import { UserReviewProps } from "../../components/UserReview";

export const Home = () => {
  const { apiPost } = usePost("/clientes");

  const [clientes, setClientes] = useState<Cliente[]>([]);
  console.log("clientes", clientes);

  const cadastrarCliente = async (cliente: Cliente) => {
    console.log("Cliente cadastrado");
    await apiPost(cliente);
    setClientes([...clientes, cliente]);
  };

  
  const listUserReview: UserReviewProps[] = [{
    profile: "https://avatars.githubusercontent.com/academicodan",
    comment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    name: "Daniel"
  }, {
    profile: "https://avatars.githubusercontent.com/anacpbarros",
    comment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    name: "Ana"
  },
  {
    profile: "https://avatars.githubusercontent.com/GigioR",
    comment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    name: "Giovanni"
  }]

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
      <ListUserReview list={listUserReview}/>
    </Container>
  );
};
