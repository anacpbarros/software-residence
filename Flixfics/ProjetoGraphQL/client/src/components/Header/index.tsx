import { Container, Navbar, NavbarBrand } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import './header.scss';

export const Header = () => {
  const { t } = useTranslation();
  return (
    <Navbar expand="lg">
      <Container>
        <NavbarBrand href="/">{t('pagina_inicial.titulo')}</NavbarBrand>
        <NavbarBrand href="/clientes">{t('pagina_inicial.clientes')}</NavbarBrand>
      </Container>
    </Navbar>
  )
};
