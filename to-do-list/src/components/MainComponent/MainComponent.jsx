import { useState } from "react";
import { Route, Redirect, Switch } from "react-router";

import Header from "../Header/Header";
import HomePage from "../HomePage/HomePage";
import ActionBar from "../ActionBar/ActionBar";
import CardsList from "../CardsList/CardsList";
import TaskDetails from "../TaskDetails/TaskDetails";

import {
  DEFAULT_LIST_CARDS_TEXT,
  HEADER_TITLE,
  USER_NAME,
} from "../../constants/constants";

import "bootstrap/dist/css/bootstrap.min.css";
import "./MainComponent.css";

function MainComponent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasksList, setTasksList] = useState([]);

  const onChangeTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const onChangeDescriptionHandler = (event) => {
    setDescription(event.target.value);
  };

  const createTaskValue = (newTitleValue, newDescriptionValue) => {
    setTasksList((prevState) => {
      return [...prevState, { title: newTitleValue, description: newDescriptionValue, checked: false }];
    });
  };

  const blankSpace = title.trim().length === 0;
  const isInvalid = title === "" || title === undefined || blankSpace ? true : false;

  const clearFields = (event) => {
    Array.from(event.target).forEach((e) => (e.value = ""));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    createTaskValue(title, description);

    clearFields(event);
    setTitle("");
    setDescription("");
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
      })
    );
  };

  let header = <Header title={HEADER_TITLE} children={USER_NAME} />;
  let home = <HomePage />;
  let actionBar = (
    <ActionBar
      title={title}
      onChangeTitleHandler={onChangeTitleHandler}
      onSubmit={onSubmitHandler}
      onChangeDescriptionHandler={onChangeDescriptionHandler}
      isInvalid={isInvalid}
    />
  );
  let cardsList = <CardsList titleValue={tasksList} onCheckChangeHandler={onCheckHandler} />;
  let taskDetails = <TaskDetails cardValue={tasksList} />;

  return (
    <div className="container">
      <div className="header">{header}</div>
      <Switch>
      <Route path="/" exact>{home}</Route>
      <Route path="/tarefas" exact>
        <div className="action-bar">{actionBar}</div>
        {tasksList.length > 0 ? (
          <div className="list-cards">{cardsList}</div>
        ) : (
          <p className="list-cards">{DEFAULT_LIST_CARDS_TEXT}</p>
        )}
      </Route>
      <Route path="/tarefas/:id">
        {tasksList.length > 0 ? (
          <div className="detailed-cards">{taskDetails}</div>
        ) : (
          <p className="list-cards">{DEFAULT_LIST_CARDS_TEXT}</p>
        )}
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
      </Switch>
    </div>
  );
}

export default MainComponent;
