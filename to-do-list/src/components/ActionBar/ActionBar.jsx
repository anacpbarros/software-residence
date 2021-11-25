import PropTypes from "prop-types";

import { Button, Form } from "react-bootstrap";

import "./ActionBar.css";

function ActionBar({
  onChangeTitleValueHandler,
  onSubmit,
  titleValue,
  descriptionValue,
  onChangeDescriptionValueHandler,
  isInvalid
}) {
  return (
    <Form
      className="input-action-bar"
      onSubmit={onSubmit}
    >
      <div className="container-invalid">
        <Form.Control
          required
          isInvalid={isInvalid}
          onChange={onChangeTitleValueHandler}
          placeholder="Insira uma tarefa..."
          type="text"
          titleValue={titleValue}
        />

        <Form.Control.Feedback type="invalid">
          Por favor, adicione um título para a sua tarefa.
        </Form.Control.Feedback>
      </div>
      <Form.Control
        as="textarea"
        placeholder="Adicione uma descrição para a sua tarefa..."
        descriptionValue={descriptionValue}
        onChange={onChangeDescriptionValueHandler}
      />
      <Button className="input-button" type="submit" disabled={isInvalid} >
        Criar tarefa
      </Button>
    </Form>
  );
}

ActionBar.propTypes = {
  onChangeTitleValueHandler: PropTypes.func,
  onChangeDescriptionValueHandler: PropTypes.func,
  onSubmit: PropTypes.func,
  titleValue: PropTypes.string,
  descriptionValue: PropTypes.string,
  isInvalid: PropTypes.bool
};

export default ActionBar;
