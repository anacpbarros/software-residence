import { useState } from "react";

import Header from "../Header/Header";
import ActionBar from "../ActionBar/ActionBar";
import CardsList from "../CardsList/CardsList";

import { DEFAULT_LIST_CARDS_TEXT, HEADER_TITLE, USER_NAME } from "../../constants/constants";

import "bootstrap/dist/css/bootstrap.min.css";
import "./MainComponent.css";

function MainComponent() {
  const [taskValue, setTaskValue] = useState();
  const [tasksList, setTasksList] = useState([]);

  const onChangeHandler = (event) => {
    setTaskValue(event.target.value);
  };

  const createTaskValue = (newTaskValue) => {
    setTasksList((prevState) => {
      return [...prevState, { task: newTaskValue, checked: false }];
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    createTaskValue(taskValue);

    setTaskValue("");
  };

  const onCheckHandler = (index) => {
    setTasksList(
      tasksList.map((t, i) => {
        if (i === index)
          return {
            ...t,
            checked: !t.checked,
          };
        return t;
      }),
    );
  };

  let header = <Header title={HEADER_TITLE} children={USER_NAME} />;
  let actionBar = (
    <ActionBar
      value={taskValue}
      onChange={onChangeHandler}
      onSubmit={onSubmitHandler}
    />
  );
  let cardsList = (
    <CardsList
      value={tasksList}
      onChange={onCheckHandler}
    />
  );

  return (
    <div className="container">
      <div className="header">{header}</div>
      <div className="action-bar">{actionBar}</div>
      {tasksList.length > 0 ? (
        <div className="list-cards">{cardsList}</div>
      ) : (
        <p className="list-cards">{DEFAULT_LIST_CARDS_TEXT}</p>
      )}
    </div>
  );
}

export default MainComponent;
