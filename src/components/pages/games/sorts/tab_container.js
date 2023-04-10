import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { BsLightningFill } from "react-icons/bs"
const Tabcontainer = (props) => {

    const [showDivs, setShowDivs] = useState([])

    useEffect(() => {

        let divs = [
            <div key="d0" className="bg-dark m-1 border border-success bg-black" style={{ height: "30px", width: "20px" }}></div>,
            <div key="d1" className="bg-dark m-1 border border-success bg-black" style={{ height: "60px", width: "20px" }}></div>,
            <div key="d2" className="bg-dark m-1 border border-success bg-black" style={{ height: "120px", width: "20px" }}></div>,
            <div key="d3" className="bg-dark m-1 border border-success bg-black" style={{ height: "180px", width: "20px" }}></div>,
            <div key="d4" className="bg-dark m-1 border border-success bg-black" style={{ height: "210px", width: "20px" }}></div>,
            <div key="d5" className="bg-dark m-1 border border-success bg-black" style={{ height: "240px", width: "20px" }}></div>,
            <div key="d6" className="bg-dark m-1 border border-success bg-black" style={{ height: "270px", width: "20px" }}></div>,
            <div key="d7" className="bg-dark m-1 border border-success bg-black" style={{ height: "300px", width: "20px" }}></div>,
            <div key="d8" className="bg-dark m-1 border border-success bg-black" style={{ height: "330px", width: "20px" }}></div>,
            <div key="d9" className="bg-dark m-1 border border-success bg-black" style={{ height: "360px", width: "20px" }}></div>,
            <div key="d10"  className="bg-dark m-1 border border-success bg-black" style={{ height: "390px", width: "20px" }}></div>,
            <div key="d11"  className="bg-dark m-1 border border-success bg-black" style={{ height: "420px", width: "20px" }}></div>,
            <div key="d12"  className="bg-dark m-1 border border-success bg-black" style={{ height: "450px", width: "20px" }}></div>
        ]
        let divstmp = []
        props.tab.forEach(element => {
            divstmp.push(divs[element])
        });
        setShowDivs(divstmp)

    }, [props.tab])
    return (
        <Container key={props.tab} >
            <Container className="d-flex justify-content-evenly align-items-end ">
                {showDivs}
            </Container>
        </Container>
    )
}
export default Tabcontainer