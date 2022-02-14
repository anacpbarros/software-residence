import { Container, Navbar, NavbarBrand } from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavbarBrand>Produto</NavbarBrand>
      </Container>
    </Navbar>
  );
};
