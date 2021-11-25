import PropTypes from "prop-types";

import { useHistory } from "react-router";

import { ListGroup } from "react-bootstrap";

import "./Tasks.css";
function Tasks({ checked, id, item, onChange }) {
  const history = useHistory();
  
  const onClickHandler = () => {
    history.push(`/tarefas/${id}`);
    };
  return (
    <ListGroup.Item variant="primary">
      <p onClick={onClickHandler}>{item}</p>
      <input type="checkbox" checked={checked} onChange={onChange} />
    </ListGroup.Item>
  );
}

Tasks.propTypes = {
  checked: PropTypes.bool,
  id: PropTypes.number,
  item: PropTypes.string,
  onChange: PropTypes.func,
};

export default Tasks;
