import React, { useEffect, useState } from "react"
import Axios from "axios";
import { Spinner, Alert, Container } from "react-bootstrap"

const Motivation = () => {
    const spinner = <Container><Spinner className="m-auto d-flex" animation="border" /></Container>
    const [quote, setQuote] = useState(spinner)
    useEffect(() => {

        const options = {
            method: 'POST',
            url: 'https://motivational-quotes1.p.rapidapi.com/motivation',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '24cd410a5emsh3a1378cf7ba509dp141ab9jsn8463b7646711',
                'X-RapidAPI-Host': 'motivational-quotes1.p.rapidapi.com'
            },
            data: '{"key1":"value"}'
        };
        Axios.request(options).then((res) => {
            setQuote(res.data)
        }).catch((err) => {
            setQuote("Nie udało się załadować tekstu :(")
        })
    }, [])

    return (
        <Container fluid className="d-flex justify-content-center">
        <Alert variant="dark" style={{width : "fit-content"}}>
            {quote}
        </Alert>
        </Container>
    )
}

export default Motivation