import PropTypes from "prop-types";

import { ListGroup } from "react-bootstrap";

import "./Tasks.css";
function Tasks({ checked, item, onChange }) {
  return (
    <ListGroup.Item variant="primary">
      <p>{item}</p>
      <input type="checkbox" checked={checked} onChange={onChange} />
    </ListGroup.Item>
  );
}

Tasks.propTypes = {
  checked: PropTypes.bool,
  item: PropTypes.string,
  onChange: PropTypes.func,
};

export default Tasks;
