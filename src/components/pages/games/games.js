import React, { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { Container, Col, Row, Button, Card, ListGroup } from "react-bootstrap";
import Tilts from "./tilt"
const Games = () => {
    return (
        <Container fluid className="p-0">

            

            {/* here the game will be  displayed */}
            <Outlet />
            <Container fluid className=" mb-3">
                <hr className="mt-4 border border-success border-1" />
                <Tilts/>
                <hr className="mt-4 border border-success border-1" />
            </Container>

        </Container>
    )
}
export default Games;