import PropTypes from "prop-types";

import { Button, Form } from "react-bootstrap";

import "./ActionBar.css";

function ActionBar({ onChange, onSubmit, value }) {
  const blankSpace = value && value.trim().length === 0;
  const disableButton =
    value === "" || value === undefined || blankSpace ? true : false;

  return (
    <Form className="input-action-bar" onSubmit={onSubmit}>
      <Form.Control
        onChange={onChange}
        placeholder="Insira uma tarefa..."
        type="text"
        value={value}
      />
      <Button className="input-button" type="submit" disabled={disableButton}>
        Criar tarefa
      </Button>
    </Form>
  );
}

ActionBar.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  value: PropTypes.string,
};

export default ActionBar;
