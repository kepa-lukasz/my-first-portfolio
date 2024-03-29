import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import {BsEnvelopeFill, BsAt} from "react-icons/bs"
const Footer = () => {
    return (
        <Container fluid className="m-0 p-0 pb-3 bg-secondary pt-3  fs-3">
            <Row className="d-flex w-100 justify-content-around m-0">
                <Col className="col-11 col-sm-5 col-md-4 p-0">
                    <ListGroup className="my-1 fs-5">
                        <ListGroup.Item className="text-break text-white bg-success m-0 p-0 ps-2">Wykorzystane Biblioteki: </ListGroup.Item>
                        <ListGroup.Item className="text-break m-0 p-0 ps-1" >Axios</ListGroup.Item>
                        <ListGroup.Item className="text-break m-0 p-0 ps-1" >Bootstrap</ListGroup.Item>
                        <ListGroup.Item className="text-break m-0 p-0 ps-1" >Vanilla-tilt</ListGroup.Item>
                        <ListGroup.Item className="text-break m-0 p-0 ps-1" >React-icons</ListGroup.Item>
                        <ListGroup.Item className="text-break m-0 p-0 ps-1" >React-cookie</ListGroup.Item>
                        <ListGroup.Item className="text-break m-0 p-0 ps-1" >React-bootstrap</ListGroup.Item>
                        <ListGroup.Item className="text-break m-0 p-0 ps-1" >React-router-dom</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col className="col-11 col-sm-6 col-md-4 p-0">
                    <ListGroup className="my-1 fs-5">
                        <ListGroup.Item className="text-break text-white bg-success m-0 p-0 ps-2">Wykorzystane api: </ListGroup.Item>
                        <ListGroup.Item className="text-break m-0 p-0 ps-2" > <a  href="https://rapidapi.com/dipinpjoseph/api/random-quote-generator2/">https://rapidapi.com/dipinpjoseph/api/random-quote-generator2/</a> </ListGroup.Item>
                        <ListGroup.Item className="text-break m-0 p-0 ps-2" > <a  href="https://github.com/pniedzwiedzinski">pniedzwiedzinski.github.io/kalendarz-swiat-nietypowych</a> </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col className="col-11  col-md-3 text-white p-0">
                    <p>Projekt opracował Łukasz Kępa&copy;</p>
                    <p>Jeżeli masz jakies pytania, skontaktuj się ze mną!<br/></p>
                     <a className="text-warning text-break" href="mailto:lukaszkepa03@gmail.com"><BsEnvelopeFill className="me-1"/>lukaszkepa03<wbr/>@gmail.com</a>
                </Col>
            </Row>
        </Container>
    );
}
export default Footer;