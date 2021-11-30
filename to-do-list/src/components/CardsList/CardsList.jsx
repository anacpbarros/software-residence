import PropTypes from "prop-types";

import Tasks from "../Tasks/Tasks";

import { ListGroup } from "react-bootstrap";

function CardsList({ titleValue }) {
  const cards = titleValue.map((t) => (
    <Tasks key={t.id} defaultChecked={false} item={t.title} task={t} />
  ));

  return (
    <div className="cards">
      <ListGroup>{cards}</ListGroup>
    </div>
  );
}

CardsList.propTypes = {
  titleValue: PropTypes.array,
};

export default CardsList;
