import React from "react";
import { Container, Spinner } from "react-bootstrap";

const Loading = ()=>{
    return(
        <Container className="d-flex justify-content-center py-4">
            <Spinner className="m-0 p-0 text-success" animation="border" />
        </Container>
    )
}

export default Loading