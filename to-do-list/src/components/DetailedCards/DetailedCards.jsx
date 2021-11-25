import PropTypes from "prop-types";
import { useHistory } from 'react-router-dom';

import './DetailedCards.css';

function DetailedCards ({ titleValue, descriptionValue }) {
    const history = useHistory();
    const onClickHandler = () => {
        history.push('/tarefas');
    }

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
            <h1>Title</h1>
            <p>Description</p>
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
