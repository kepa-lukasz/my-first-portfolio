import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Container, Col, Row, Button } from "react-bootstrap";
import { GiTicTacToe } from "react-icons/gi"
import { BsFillPinMapFill, } from "react-icons/bs"
const Games = () => {
    return (
        <Container fluid className="p-0">
            <Row className="d-flex mx-5 mb-3">
                <Col className="d-flex justify-content-center ">

                    <Link to="/games/tictac" className="text-decoration-none">
                        <Button variant="outline-success fs-5 m-2 d-flex align-items-center flex-nowrap">
                            <GiTicTacToe />&nbsp;Kółko&#8209;krzyżyk
                        </Button>
                    </Link>

                    <Link to="/games/miastle" className="text-decoration-none">
                        <Button variant="outline-success fs-5 m-2 d-flex align-items-center ">
                            <BsFillPinMapFill />&nbsp;Miastle
                        </Button>
                    </Link>


                </Col>
                <hr className="mt-4 border border-success border-1" />
            </Row>
            {/* here the game will be  displayed */}
            <Outlet />
            {/* here the game will be  displayed*/}
        </Container>
    )
}
export default Games;