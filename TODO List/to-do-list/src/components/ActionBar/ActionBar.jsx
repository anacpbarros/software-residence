import PropTypes from "prop-types";

import { Button, Form } from "react-bootstrap";

import "./ActionBar.css";

function ActionBar({
  onChangeTitleHandler,
  onSubmit,
  onChangeDescriptionHandler,
  isInvalid,
}) {
  return (
    <Form className="input-action-bar" onSubmit={onSubmit}>
      <div className="container-invalid">
        <Form.Control
          required
          isInvalid={isInvalid}
          onChange={onChangeTitleHandler}
          placeholder="Insira uma tarefa..."
          type="text"
        />
        <Form.Control.Feedback type="invalid">
          Por favor, adicione um título para a sua tarefa.
        </Form.Control.Feedback>
      </div>
      <Form.Control
        as="textarea"
        placeholder="Adicione uma descrição para a sua tarefa..."
        onChange={onChangeDescriptionHandler}
      />
      <Button className="input-button" type="submit" disabled={isInvalid}>
        Criar tarefa
      </Button>
    </Form>
  );
}

ActionBar.propTypes = {
  onChangeTitleHandler: PropTypes.func,
  onChangeDescriptionHandler: PropTypes.func,
  onSubmit: PropTypes.func,
  isInvalid: PropTypes.bool,
};

export default ActionBar;
