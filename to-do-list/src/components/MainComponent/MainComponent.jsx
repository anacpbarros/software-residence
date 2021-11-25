import { useState } from "react";
import { Route, Redirect, Switch } from "react-router";

import Header from "../Header/Header";
import HomePage from "../HomePage/HomePage";
import ActionBar from "../ActionBar/ActionBar";
import CardsList from "../CardsList/CardsList";
import DetailedCards from "../DetailedCards/DetailedCards";

import {
  DEFAULT_LIST_CARDS_TEXT,
  HEADER_TITLE,
  USER_NAME,
} from "../../constants/constants";

import "bootstrap/dist/css/bootstrap.min.css";
import "./MainComponent.css";

function MainComponent() {
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [tasksList, setTasksList] = useState([]);

  const onChangeTitleTaskHandler = (event) => {
    setTitleValue(event.target.value);
  };

  const onChangeDescriptionTaskHandler = (event) => {
    setDescriptionValue(event.target.value);
  };

  const createTaskValue = (newTitleValue, newDescriptionValue) => {
    setTasksList((prevState) => {
      return [...prevState, { task: newTitleValue, description: newDescriptionValue, checked: false }];
    });
  };

  const blankSpace = titleValue.trim().length === 0;
  const isInvalid = titleValue === "" || titleValue === undefined || blankSpace ? true : false;

  const clearFields = (event) => {
    Array.from(event.target).forEach((e) => (e.value = ""));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    createTaskValue(titleValue, descriptionValue);

    clearFields(event);
    setTitleValue("");
    setDescriptionValue("");
  };
  console.log('descriptionValue: ', descriptionValue);
  console.log('titleValue: ', titleValue);

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
      titleValue={titleValue}
      onChangeTitleValueHandler={onChangeTitleTaskHandler}
      onSubmit={onSubmitHandler}
      descriptionValue={descriptionValue}
      onChangeDescriptionValueHandler={onChangeDescriptionTaskHandler}
      isInvalid={isInvalid}
    />
  );
  let cardsList = <CardsList titleValue={tasksList} onCheckChangeHandler={onCheckHandler} />;
  let detailedCards = <DetailedCards titleValue={titleValue} descriptionValue={descriptionValue} />;

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
          <div className="detailed-cards">{detailedCards}</div>
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
