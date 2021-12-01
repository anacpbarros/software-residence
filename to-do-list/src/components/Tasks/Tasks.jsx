import PropTypes from "prop-types";

import { useHistory } from "react-router";

import { ListGroup } from "react-bootstrap";

import "./Tasks.css";
function Tasks({ checked, task, item, key, onChange, className }) {
  const history = useHistory();

  const onClickHandler = () => {
    history.push(`/tarefas/${task.id}`);
  };

  return (
    <>
      <ListGroup.Item variant="primary" key={key}>
        <p className={className} onClick={onClickHandler}>
          {item}
        </p>
        <input type="checkbox" checked={checked} onChange={onChange} />
      </ListGroup.Item>
    </>
  );
}

Tasks.propTypes = {
  task: PropTypes.object,
  item: PropTypes.string,
  onChange: PropTypes.func,
  key: PropTypes.number,
  className: PropTypes.string,
  checked: PropTypes.bool
};

export default Tasks;
