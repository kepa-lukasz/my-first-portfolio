import { Alert, Badge, Button, Form, InputGroup, Col, Container, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { cities, wos } from "./lists"
const MiastleGame = () => {
    const [city, setCity] = useState({})
    //load wos hints
    const options = Object.keys(wos).map((el) => { return (<option key={el}>{el}</option>) })
    //check if suggested wos is correct
    const checkCity = (ev) => {
        console.log(city.wos);
        console.log(ev.target[0].value)
        ev.preventDefault();
    }
    //randomize new city



    const changeCity = () => {
        const citytmp = cities[Math.floor(Math.random() * cities.length)]
        setCity(citytmp)
    }

    useEffect(() => {
        changeCity()
    }, [])
    return (
        <Container>
            {/* info alert */}
            <Row className="d-flex justify-content-center mx-1">
                <Alert variant="warning d-flex justify-content-between col-10">
                    <h3 >Twoje miasto: <Badge bg="success">{city.city}</Badge></h3>

                    <Button onClick={changeCity} variant="danger mx-2">Zmień</Button>
                </Alert>
            </Row>

            {/* input area */}

            <Row className="d-flex justify-content-center col-10 m-auto">
                <Form onSubmit={checkCity} className="p-0">

                    <InputGroup className="p-0 mt-1 ">
                        <InputGroup.Text className="fs-5">Wpisz nazwę województwa</InputGroup.Text>
                        <Form.Control className="fs-5" list="data" />
                    </InputGroup>
                    <Button type="submit" variant="success mt-1 fs-5">Sprawdź</Button>

                    <datalist id="data">
                        {options}
                    </datalist>
                </Form>
            </Row>

            {/* results */}

        </Container>
    )
}
export default MiastleGame;