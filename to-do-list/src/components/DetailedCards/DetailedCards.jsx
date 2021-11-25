import PropTypes from "prop-types";

import { useHistory, useParams } from 'react-router-dom';

import './DetailedCards.css';

function DetailedCards ({ tasksList }) {
    const history = useHistory();
    const onClickHandler = () => {
        history.push('/tarefas');
    }
    
    const { id } = useParams();
    const task = tasksList.filter((t, index) => index === id ? t : null );

    /* const cards = titleValue.map((t, index) =>
     (
      <ListGroup>
        <Tasks
          checked={t.checked}
          item={t.task}
          key={index}
          id={index}
          onChange={() => onCheckChangeHandler(index)}
        />
      </ListGroup>
    ) : null);
    ( */
        return (
        <div className="main-container-details">
            <div className="container-back-button">
            <button onClick={onClickHandler}>
                Voltar
            </button>
            </div>
            <div className="container-details">
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <div className="buttons">
            <button>Concluir Tarefa</button>
            <button>Cancelar Tarefa</button>
            </div>
            </div>
        </div>
    )
}

DetailedCards.propTypes = {
    titleValue: PropTypes.string,
    descriptionValue: PropTypes.string,
};

export default DetailedCards;
