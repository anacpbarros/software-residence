import { useState } from "react";
import { Container } from "../../containers";
import { Cliente } from "../../types/cliente";
import { Row, Col, Button } from "react-bootstrap";
import { usePost } from "../../hooks/customHooks";
import { ListUserReview } from "../../components/ListUserReview";
import { UserReviewProps } from "../../components/UserReview";
// import LoginHooks from "../../hooks/loginHooks";
import { Landing } from "../../components/Landing";
import { SignInUpModal } from "../../components/Modal";
import { ShowModalInterface } from "../../types/modal";
import { useTranslation } from "react-i18next";
import { useMutation } from "@apollo/client";
import { CREATE_CLIENTE_MUTATION } from "../../graphql/Mutations";
import './home.scss';

const Home = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState<ShowModalInterface>({
    show: false,
    type: undefined
  });

  const [clientes, setClientes] = useState<Cliente[]>([]);

  const [createCliente, { error }] = useMutation(CREATE_CLIENTE_MUTATION)

  const cadastrarCliente = (cliente: Cliente) => {
    createCliente({
      variables: {
        nome: cliente.nome,
        sobrenome: cliente.sobrenome,
        email: cliente.email,
        senha: cliente.senha
      }
    });
    setClientes([...clientes, cliente])
    if(error) {
      console.log(error)
    }
  }
  
  const handleClose = () => setShowModal({
    show: false,
    type: undefined
  });

  const handleShow = (type: "up" | "in" | undefined) => setShowModal({
    show: true,
    type: type
  });

  const loginCliente = () => {
    return alert("Cliente Logado!");
  }
  
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
    <div className="landing-page">
      <Container>
        <SignInUpModal show={showModal} handleClose={handleClose} onCadastroCliente={cadastrarCliente} onLoginCliente={loginCliente}/>
        <Row className="banner">
          <Col>
            <Landing />
            <div className="d-grid gap-2 d-md-flex justify-content-md-evenly">
              <Button onClick={() => handleShow("in")}>{t('login.entrar')}</Button>
              <Button onClick={() => handleShow("up")}>{t('login.cadastro')}</Button>
            </div>
          </Col>
          <Col></Col>
        </Row>
        <Row>
        <ListUserReview list={listUserReview}/>
        </Row>
      </Container>
    </div>

  );
};

export default Home;