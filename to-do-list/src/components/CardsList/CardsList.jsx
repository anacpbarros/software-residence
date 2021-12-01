import PropTypes from "prop-types";

import Tasks from "../Tasks/Tasks";

import { ListGroup } from "react-bootstrap";

import './CardsList.css';

function CardsList({ titleValue, onCheckHandler }) {
  const cards = titleValue.map((t) => (
    <Tasks key={t.id} item={t.title} task={t} checked={t.completed} onChange={() =>onCheckHandler(t.id)} className={t.completed ? "checked" : " "}
    />
  ));

  return (
    <div className="cards">
      <ListGroup>{cards}</ListGroup>
    </div>
  );
}

CardsList.propTypes = {
  titleValue: PropTypes.array,
  onCheckHandler: PropTypes.func,
};

export default CardsList;
