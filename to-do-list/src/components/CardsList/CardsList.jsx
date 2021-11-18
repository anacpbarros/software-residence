import PropTypes from "prop-types";

import { ListGroup } from "react-bootstrap";

import Tasks from "../Tasks/Tasks";

import "./CardsList.css";

function CardsList({ onChange, value }) {
  const cards = value.map((t, index) =>
    !t.checked ? (
      <ListGroup>
        <Tasks
          checked={t.checked}
          item={t.task}
          key={index}
          onChange={() => onChange(index)}
        />
      </ListGroup>
    ) : null
  );

  return <div className="cards">{cards}</div>;
}

CardsList.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.array,
};

export default CardsList;
