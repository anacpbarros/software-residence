import PropTypes from "prop-types";

import { useHistory } from "react-router";

import { ListGroup } from "react-bootstrap";

import "./Tasks.css";
function Tasks({ checked, task, item, key,onChange }) {
  const history = useHistory();
  
  const onClickHandler = () => {
    history.push(`/tarefas/${task.id}`);
    };
  return (
    <ListGroup.Item variant="primary" key={key}>
      <p onClick={onClickHandler}>{item}</p>
      <input type="checkbox" checked={checked} onChange={onChange} />
    </ListGroup.Item>
  );
}

Tasks.propTypes = {
  checked: PropTypes.bool,
  task: PropTypes.object,
  item: PropTypes.string,
  onChange: PropTypes.func,
  key: PropTypes.number
};

export default Tasks;
