import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Menu() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>EstudoApp Site</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/sobre">
              <Nav.Link>Sobre</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/funcionalidades">
              <Nav.Link>Funcionalidades</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contato">
              <Nav.Link>Contato</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Admin" id="basic-nav-dropdown">
              <LinkContainer to="/admin/sobre">
                <NavDropdown.Item>Editar Sobre nós</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/admin/funcionalidades">
                <NavDropdown.Item>Adicionar Funcionalidades</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
