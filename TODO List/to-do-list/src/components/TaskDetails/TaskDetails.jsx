import PropTypes from "prop-types";

import { useHistory, useParams } from "react-router-dom";

import { Button } from "react-bootstrap";

import "./TaskDetails.css";

function DetailedCards({ cardValue, onClickTaskIsDoneHandler, fetchTasksHandler, onClickCancelTaskHandler }) {
  const history = useHistory();

  const onClickHandler = () => {
    history.push("/tarefas");
    fetchTasksHandler();
  };

  const params = useParams();
  const task = cardValue.find((c) => c.id.toString() === params.id);

  const disabledButton = task.completed ? true : false;

  return (
    <div className="main-container-details">
      <div className="container-back-button">
        <Button variant="primary" onClick={onClickHandler}>
          Voltar
        </Button>
      </div>
      <div className="container-details">
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <div className="buttons">
          <Button variant="primary" onClick={() => onClickTaskIsDoneHandler(task.id)} disabled={disabledButton}>Concluir Tarefa</Button>
          <Button variant="primary" onClick={() => onClickCancelTaskHandler(task.id)} >Cancelar Tarefa</Button>
        </div>
      </div>
    </div>
  );
}

DetailedCards.propTypes = {
  cardValue: PropTypes.array,
  onClickTaskIsDoneHandler: PropTypes.func,
  fetchTasksHandler: PropTypes.func,
  onClickCancelTaskHandler: PropTypes.func,
};

export default DetailedCards;
