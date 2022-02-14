import { ChangeEvent, FormEvent, useReducer, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Cliente } from "../../types/cliente";

const emailReducer = (state: { value: string}, action: { type: string, value: string}) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.value,
      isValid: action.value.includes("@"),
    };
  }

  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.includes("@"),
    };
  }

  if (action.type === "FORM_CLEANUP") {
    return {
      value: '',
      isValid: false,
    };
  }

  return { value: "", isValid: false };
};

// Fazer validações para senha
const senhaReducer = (state: { value: string}, action: { type: string, value: string}) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.value,
      isValid: action.value.trim().length > 8,
    };
  }

  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.trim().length > 8,
    };
  }

  if (action.type === "FORM_CLEANUP") {
    return {
      value: '',
      isValid: false,
    };
  }

  return { value: "", isValid: false };
};

interface ClienteProps {
  onCadastroCliente: (cliente: Cliente) => void;
}

export const CadastroClientes = (props: ClienteProps) => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });
  const [senhaState, dispatchSenha] = useReducer(senhaReducer, {
    value: "",
    isValid: false,
  });

  const nomeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value);
  };

  const sobrenomeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSobrenome(event.target.value);
  };

  const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatchEmail({ type: "USER_INPUT", value: event.target.value});
  };

  const senhaChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatchSenha({ type: "USER_INPUT", value: event.target.value});
  };

  const validateSenhaHandler = () => {
      dispatchSenha({ type: 'INPUT_BLUR', value: ''})
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR', value: ''})
  }

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const cliente = {
        nome: nome,
        sobrenome: sobrenome,
        email: emailState.value,
        senha: senhaState.value,
    }
    props.onCadastroCliente(cliente);
  }

  return (
    <div className="pt-4">
      <h5>Cadastro de usuário</h5>
      <Form onSubmit={submitHandler}>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="nome">
              <Form.Label>Nome</Form.Label>
              <Form.Control required value={nome} name="nome" onChange={nomeChangeHandler} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="sobrenome">
              <Form.Label>Sobrenome</Form.Label>
              <Form.Control
                required
                value={sobrenome}
                name="idade"
                onChange={sobrenomeChangeHandler}
                type="text"
                placeholder="Sobrenome"
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
                value={senhaState.value}
                name="senha"
                onChange={senhaChangeHandler}
                isValid={senhaState.isValid}
                type="text"
                placeholder="Senha"
                onBlur={validateSenhaHandler}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                value={emailState.value}
                name="email"
                onChange={emailChangeHandler}
                isValid={emailState.isValid}
                type="text"
                placeholder="Email"
                onBlur={validateEmailHandler}
              />
            </Form.Group>
          </Col>
        </Row>
        <Col>
        <Button>
          Cadastrar
        </Button>
        </Col>
      </Form>
    </div>
  );
};
