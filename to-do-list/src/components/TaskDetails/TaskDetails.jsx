import PropTypes from "prop-types";

import { useHistory, useParams } from "react-router-dom";

import { Button } from 'react-bootstrap';

import "./TaskDetails.css";

function DetailedCards({ cardValue }) {
  const history = useHistory();

  const onClickHandler = () => {
    history.push("/tarefas");
  };

  const { id } = useParams();
  const task = cardValue.find((_, index) => index.toString() === id);

  return (
    <div className="main-container-details">
      <div className="container-back-button">
      <Button variant="primary"  onClick={onClickHandler}>Voltar</Button>
      </div>
      <div className="container-details">
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <div className="buttons">
        <Button variant="primary">Concluir Tarefa</Button>
        <Button variant="primary">Cancelar Tarefa</Button>
        </div>
      </div>
    </div>
  );
}

DetailedCards.propTypes = {
  cardValue: PropTypes.array,
  descriptionValue: PropTypes.string,
};

export default DetailedCards;
