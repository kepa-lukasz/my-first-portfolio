import { Alert, Badge, Button, Form, InputGroup, Container, Row } from "react-bootstrap";
import React, { useState } from "react";
import { cities, wos } from "./lists"
import { checkCity, } from "./checkCity";
import { BsPlayFill } from "react-icons/bs"


const MiastleGame = () => {
    //randomize new city
    const changeCity = () => {
        stopGame(false)
        setCity(cities[Math.floor(Math.random() * cities.length)])
        setResults([])
        setTries(1)
    }
    //states
    const [city, setCity] = useState(cities[Math.floor(Math.random() * cities.length)])
    const [tries, setTries] = useState(1)
    const [results, setResults] = useState([])
    const [isEnded, stopGame] = useState(false)




    let check = (event) => {
        if (event.target[0].value.length > 0) {

            setTries(tries + 1)
            //change results state
            let resultstmp = [...results]
            let newResult = checkCity(event.target[0].value, city.wos, tries)
            resultstmp.unshift(newResult.element)
            //if game ended add button to new game
            event.target[0].value = ""
            if (newResult.isEnded) {
                resultstmp.unshift(
                    <Alert key="koniec_gry" variant="success" className='justify-content-center text-center' >
                        <Button variant="outline-danger" onClick={changeCity}>
                            Nowa gra <BsPlayFill />
                        </Button>
                    </Alert >
                )
                stopGame(true)
            }
            setResults(resultstmp)
        }
        event.preventdefault();
    }



    //load wos hints
    const options = Object.keys(wos).map((el) => { return (<option key={el}>{el}</option>) })
    //check if suggested wos is correct



    return (
        <Container>
            <Container className="py-3 fs-3">
                <Container className="border border-success rounded-3 p-0">


                    <Container className="p-0">

                        <h3 className="p-3 pb-0" >Twoje miasto: <Badge bg="success">{city.city}</Badge></h3>

                        <hr className="mt-2 border border-success border-1" />
                        <Button onClick={changeCity} variant="danger mx-3 mb-3">Zmień Miasto</Button>

                    </Container>
                </Container>
            </Container>
            {/* info alert */}
            <Container className="d-flex justify-content-center mx-1">
                <Container variant="border border-success d-flex justify-content-between col-10">

                </Container>
            </Container>

            {/* input area */}
            <Container>

                <Container fluid className=" border border-success d-flex justify-content-center p-0 rounded-3">
                    <Form onSubmit={check} className="p-0 w-100">

                        <InputGroup className="p-3">
                            <Form.Control placeholder="Wpisz nazwę województwa" className="col-10 col-md-7 fs-5" list="data" />
                        </InputGroup>
                        <hr className="mt-3 border border-success border-1" />
                        <Button disabled={isEnded} type="submit" variant="success fs-5 m-3 mt-0">Sprawdź</Button>

                        <datalist id="data">
                            {options}
                        </datalist>
                    </Form>
                </Container>
            </Container>

            {/* results */}
            <Row className="d-flex justify-content-center col-10 m-auto">
                {results}
            </Row>
        </Container>
    )
}
export default MiastleGame