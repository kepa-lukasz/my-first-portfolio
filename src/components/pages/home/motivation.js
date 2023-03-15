import React, { useEffect, useState } from "react"
import Axios from "axios";
import { Spinner, Alert, Container, Col } from "react-bootstrap"

const Motivation = () => {
    const spinner = <Container><Spinner className="m-auto d-flex" animation="border" /></Container>
    const [quote, setQuote] = useState(spinner)
    const [author, setAuthor] = useState("")
    useEffect(() => {
        // set query options
        const options = {
            method: 'GET',
            url: 'https://random-quote-generator2.p.rapidapi.com/randomQuote',
            headers: {
                'X-RapidAPI-Key': '24cd410a5emsh3a1378cf7ba509dp141ab9jsn8463b7646711',
                'X-RapidAPI-Host': 'random-quote-generator2.p.rapidapi.com'
            }
        };
        //get quote from api => set state
        Axios.request(options).then((res)=>{
            setQuote(res.data[0].Quote)
            setAuthor(res.data[0].Author)
        }).catch(()=>{
            setQuote("Nie udało się pobrać cytatu :(")
            setAuthor("")
        });
    }, [])

    return (
        <Container fluid className="d-flex justify-content-center m-0 p-0">
            <Col className="col-11 col-sm-10 ">
                <Alert variant="dark">
                    <Alert.Heading>Smart quote for You: </Alert.Heading>
                    <p className="fs-5">{quote}</p>
                    <hr/>
                    <p className="text-end fs-6">{author}</p>
                </Alert>
            </Col>
        </Container>
    )
}

export default Motivation