import { Container, Navbar, NavbarBrand } from "react-bootstrap"

export const Footer = () => {
    return (
        <footer className="fixed-bottom">
            <Navbar bg="light" expand="lg">
                <Container> 
                    <NavbarBrand>Copyright© 2022</NavbarBrand>
                </Container>
            </Navbar>
        </footer>
    )
}