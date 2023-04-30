import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsSearch } from "react-icons/bs";
import Table from 'react-bootstrap/Table';

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className='container'>
            <Container fluid>
                <Navbar.Brand href="#">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >]
                        <Nav.Link href="#action2">POPULAR VENDORS</Nav.Link>
                        <NavDropdown title="POPULAR VENDORS" id="navbarScrollingDropdown">
                            <Table hover variant="dark" >
                                
                                <tbody>
                                    <tr>
                                        <td>HP</td>
                                        <td>PeopleCert</td>
                                        <td>Fortinet</td>
                                        <td>Palo Alt Network</td>
                                        <td>Dell</td>
                                    </tr>
                                </tbody>
                            </Table>
                           

                        </NavDropdown>
                        <Nav.Link href="#">
                            DISCOUNT DEALS
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <BsSearch style={{ color: 'white' }} />

                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;