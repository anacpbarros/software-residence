import { useCallback, useEffect, useState } from "react";
import { Route, Redirect, Switch } from "react-router";
import { Button, Spinner, Modal } from "react-bootstrap";

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
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(true);

  const fetchTasksHandler = useCallback(() => {
    setIsLoading(true);
    fetch("http://localhost:3001/tarefas", {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) throw new Error("Algum erro aconteceu!");
        return response.json();
      })
      .then((data) => {
        setTasks(data);
      })
      .catch((error) => {
        setError(error);
      });
    setIsLoading(false);
  }, []);

   const fetchSingleTasksHandler = useCallback(() => {
    setIsLoading(true);
    fetch("http://localhost:3001/tarefas:id", {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) throw new Error("Algum erro aconteceu!");
        return response.json();
      })
      .then((data) => {
        setTasks(data);
      })
      .catch((error) => {
        setError(error);
      });
    setIsLoading(false);
  }, []);

  const onChangeTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const onChangeDescriptionHandler = (event) => {
    setDescription(event.target.value);
  };

  const createTask = async (newTask) => {
    await fetch("http://localhost:3001/tarefas", {
      method: "POST",
      body: JSON.stringify(newTask),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const blankSpace = title.trim().length === 0;
  const isInvalid =
    title === "" || title === undefined || blankSpace ? true : false;

  const clearFields = (event) => {
    Array.from(event.target).forEach((e) => (e.value = ""));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    createTask({ title, description });

    clearFields(event);
    setTitle("");
    setDescription("");
  };

  const handleClose = () => {
    setShow(false);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTasksHandler();
  }, [fetchTasksHandler]);

  let header = <Header title={HEADER_TITLE} children={USER_NAME} />;
  let home = <HomePage />;
  let actionBar = (
    <ActionBar
      onChangeTitleHandler={onChangeTitleHandler}
      onSubmit={onSubmitHandler}
      onChangeDescriptionHandler={onChangeDescriptionHandler}
      isInvalid={isInvalid}
    />
  );
  let cardsList = <CardsList titleValue={tasks} />;
  console.log("tasks: ", tasks);
  let taskDetails = <TaskDetails cardValue={tasks} />;

  const loading = (
    <div className="loading">
      <p>Carregando...</p>
      <Spinner animation="border" variant="primary" />
    </div>
  );

  return (
    <div className="container">
      <div className="header">{header}</div>
      <Button onClick={fetchTasksHandler}>Ver minha Lista</Button>
      {!isLoading && !error && (
        <Switch>
          <Route path="/" exact>
            {home}
          </Route>
          <Route path="/tarefas" exact>
            <div className="action-bar">{actionBar}</div>
            {tasks.length > 0 ? (
              <div className="list-cards">{cardsList}</div>
            ) : (
              <p className="list-cards">{DEFAULT_LIST_CARDS_TEXT}</p>
            )}
          </Route>
          <Route path="/tarefas/:id">
            {tasks.length > 0 ? (
              <div className="detailed-cards">{taskDetails}</div>
            ) : (
              <p className="list-cards">{DEFAULT_LIST_CARDS_TEXT}</p>
            )}
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      )}
      {isLoading && { loading }}
      {isLoading && error && (
        <>
        {loading}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton onclose={handleClose} />
          <Modal.Body>Ocorreu um erro</Modal.Body>
        </Modal>
        </>
      )}
    </div>
  );
}

export default MainComponent;
