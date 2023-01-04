import React from "react";
import { Container, Card, Form, Button, FloatingLabel } from "react-bootstrap";
import Motivation from './motivation';
import Cv from "./cv"

const Home = () => {
    return (
      <Container>
        <Motivation/>
        <Cv/>
      </Container>
    )
}
export default Home;