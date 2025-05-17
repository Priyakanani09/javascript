import React from 'react'
import './Navigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Navigation() {
    return (
        <>
        <Row>
            <Col xs={12}>
                <Navbar fixed="top" bg="light" expand="md">
                    <Container>
                        <Col xs={4} md={2}>
                            <img src={require('./img/j1.png')} className="logo" />
                        </Col>

                        <Col xs={12} md={7}>
                            <Navbar.Toggle aria-controls="navbar-nav" />
                            <Navbar.Collapse id="navbar-nav">
                                <Nav className="menu justify-content-center">
                                    <Nav.Link href="#Home">Home</Nav.Link>
                                    <Nav.Link href="#Category">Category</Nav.Link>
                                    <Nav.Link href="#Product">Product</Nav.Link>
                                    <Nav.Link href="#Review">Review</Nav.Link>
                                    <Nav.Link href="#Follow">Follow us</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Col>

                        <Col xs={8} md={3} className="d-flex align-items-center justify-content-end">
                            <FontAwesomeIcon icon={faPhone} className="icon me-2" />
                            <h4 className="m-0">+01 999 334 126</h4>
                        </Col>
                    </Container>
                </Navbar>
            </Col>
        </Row>
        </>
    )
}
export default Navigation;
