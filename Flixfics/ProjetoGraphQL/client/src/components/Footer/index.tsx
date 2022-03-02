import { Container, Navbar, NavbarBrand } from "react-bootstrap"
import { useTranslation } from "react-i18next"

export const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="fixed-bottom">
            <Navbar bg="light" expand="lg">
                <Container> 
                    <NavbarBrand>{t('copyright')}</NavbarBrand>
                </Container>
            </Navbar>
        </footer>
    )
}