import PropTypes from "prop-types";

import { ListGroup } from "react-bootstrap";

import Tasks from "../Tasks/Tasks";

import "./CardsList.css";

function CardsList({ onCheckChangeHandler, titleValue }) {
  const cards = titleValue.map((t, index) =>
    !t.checked ? (
      <ListGroup>
        <Tasks
          checked={t.checked}
          item={t.title}
          id={index}
          onChange={() => onCheckChangeHandler(index)}
        />
      </ListGroup>
    ) : null
  );

  return <div className="cards">{cards}</div>;
}

CardsList.propTypes = {
  onCheckChangeHandler: PropTypes.func,
  titleValue: PropTypes.array,
};

export default CardsList;
