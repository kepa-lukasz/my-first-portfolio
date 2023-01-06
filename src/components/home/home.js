import React from "react";
import { Container, Card, Form, Button, FloatingLabel } from "react-bootstrap";
import Motivation from './motivation';
import Cv from "./cv"

const Home = () => {
    return (
      <Container fluid className="m-0 p-0 ">
        <Motivation/>
        <Cv/>
      </Container>
    )
}
export default Home;