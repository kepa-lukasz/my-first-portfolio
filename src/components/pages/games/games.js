import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Container, Col, Row, Button, Card, ListGroup } from "react-bootstrap";
import { GiTicTacToe } from "react-icons/gi"
import { BsFillPinMapFill } from "react-icons/bs"
import { MdOutlineAccountTree } from "react-icons/md"
import miastleimg from "./miastle.jpg"
import tictacjpg from "./tictac.jpg"
import sortjpg from "./sort.jpg"
const Games = () => {
    return (
        <Container fluid className="p-0">
            {/* here the game will be  displayed */}
            <Outlet />
            <Container fluid className=" mb-3">
                <hr className="mt-4 border border-success border-1" />
                <Container className="d-flex justify-content-evenly flex-wrap">

                    <Link to="/games/tictac" className="shadow col-6 col-md-4 col-lg-3 col-xl-2 text-decoration-none m-3">
                        <Card >
                            <Card.Img variant="top" src={tictacjpg} />
                            <Card.Body>
                                <Card.Title>Kółko-krzyżyk</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                    <Link to="/games/miastle" className="shadow col-6 col-md-4 col-lg-3 col-xl-2 text-decoration-none m-3">
                        <Card >
                            <Card.Img variant="top" src={miastleimg} />
                            <Card.Body>
                                <Card.Title>Miastle</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                    <Link to="/games/sort" className="shadow col-6 col-md-4 col-lg-3 col-xl-2 text-decoration-none m-3">
                        <Card >
                            <Card.Img variant="top" src={sortjpg} />
                            <Card.Body>
                                <Card.Title>Sortowanie</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>


                </Container>
                <hr className="mt-4 border border-success border-1" />
            </Container>

            {/* here the game will be  displayed*/}
        </Container>
    )
}
export default Games;