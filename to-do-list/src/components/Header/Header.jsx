import PropTypes from "prop-types";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import UserIdentification from "../UserIdentification/UserIdentification";

import "./Header.css";

function Header({ children, title }) {
  return (
    <header className="div-header">
      <Navbar>
        <Container fluid>
          <Navbar.Brand href="/">{title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Nav>
            <Nav.Link as={Link} to="/tarefas">
              Criar Tarefas
            </Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <UserIdentification>{children}</UserIdentification>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.string,
  title: PropTypes.string,
};

export default Header;
