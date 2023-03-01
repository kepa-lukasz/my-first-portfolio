import React, { useEffect, useState } from "react"
import Axios from "axios";
import { Spinner, Alert, Container, Col } from "react-bootstrap"

const Motivation = () => {
    const spinner = <Container><Spinner className="m-auto d-flex" animation="border" /></Container>
    const [quote, setQuote] = useState(spinner)
    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'https://motivational-content.p.rapidapi.com/quotes/4',
            headers: {
                'X-RapidAPI-Key': '24cd410a5emsh3a1378cf7ba509dp141ab9jsn8463b7646711',
                'X-RapidAPI-Host': 'motivational-content.p.rapidapi.com'
            }
        };
        Axios.request(options).then((res)=>{
           setQuote(res.data.quote)
        }).catch(()=>{
            setQuote("nie udało się załadować tekstu :(")
        });
    }, [])

    return (
        <Container fluid className="d-flex justify-content-center m-0 p-0">
            <Col className="col-11 col-sm-10">
                <Alert variant="dark">
                    {quote}
                </Alert>
            </Col>
        </Container>
    )
}

export default Motivation