import { ChangeEvent, useEffect, useReducer, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { TemporaryClientState } from "../../types/cliente";
import { useTranslation } from "react-i18next";

const emailReducer = (
  state: { value: string },
  action: { type: string; value: string }
) => {
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
      value: "",
      isValid: false,
    };
  }

  return { value: "", isValid: false };
};

// Fazer validações para senha
const senhaReducer = (
  state: { value: string },
  action: { type: string; value: string }
) => {
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
      value: "",
      isValid: false,
    };
  }

  return { value: "", isValid: false };
};

export interface ClienteProps {
  handleClose: () => void;
  setCliente: (props: TemporaryClientState) => void;
}

export const CadastroClientes = (props: ClienteProps) => {
  const { t } = useTranslation();

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

  const [confirmaSenhaState, dispatchConfirmaSenha] = useReducer(senhaReducer, {
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
    dispatchEmail({ type: "USER_INPUT", value: event.target.value });
  };

  const senhaChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatchSenha({ type: "USER_INPUT", value: event.target.value });
  };

  const validateSenhaHandler = () => {
    dispatchSenha({ type: "INPUT_BLUR", value: "" });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR", value: "" });
  };

  const cleanForm = () => {
    setNome("");
    setSobrenome("");
    dispatchEmail({ type: "FORM_CLEANUP", value: "" });
    dispatchSenha({ type: "FORM_CLEANUP", value: "" });
  };

  useEffect(() => {
    cleanForm();
  }, []);

  useEffect(() => {
    props.setCliente({
      nome: nome,
      sobrenome: sobrenome,
      email: {
        value: emailState.value,
        isValid: emailState.isValid,
      },
      senha: {
        value: senhaState.value,
        isValid: senhaState.isValid,
      },
    });
  }, [nome, sobrenome, emailState, senhaState]);

  return (
    <div className="pt-4">
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="nome">
              <Form.Label>{t('cadastro.nome')}</Form.Label>
              <Form.Control
                required
                value={nome}
                name="nome"
                onChange={nomeChangeHandler}
                placeholder={t('cadastro.nome')}
                type="text"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="sobrenome">
              <Form.Label>{t('cadastro.sobrenome')}</Form.Label>
              <Form.Control
                required
                value={sobrenome}
                name="sobrenome"
                onChange={sobrenomeChangeHandler}
                type="text"
                placeholder={t('cadastro.sobrenome')}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="senha">
              <Form.Label>{t('cadastro.senha')}</Form.Label>
              <Form.Control
                required
                value={senhaState.value}
                name="senha"
                onChange={senhaChangeHandler}
                isValid={senhaState.isValid}
                type="password"
                placeholder={t('cadastro.senha')}
                onBlur={validateSenhaHandler}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>{t('cadastro.email')}</Form.Label>
              <Form.Control
                required
                value={emailState.value}
                name="email"
                onChange={emailChangeHandler}
                isValid={emailState.isValid}
                type="text"
                placeholder={t('cadastro.email')}
                onBlur={validateEmailHandler}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
