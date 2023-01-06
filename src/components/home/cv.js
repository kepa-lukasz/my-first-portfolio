import React from "react";
import logo from "../logo.png"
import { Container, Col, Row } from "react-bootstrap";
import { BsAt, BsCompass, BsClipboardCheck, BsPuzzle, BsGear, BsCpu, BsPersonSquare, BsEnvelopeFill, BsGithub } from "react-icons/bs"

let Cv = () => {
    return (
        <Container fluid className="d-flex justify-content-center p-0">

        <Container fluid className=" justify-content-center mt-3 col-11 col-sm-10 p-0 m-0">
            <Container fluid className="mb-5 m-auto rounded p-0 border border-success" >
                <Container fluid className="bg-success">
                    <Row fluid>
                        <Col className="col-12 col-md-9 ps-4">
                            <h1 className="py-3 ps-3 m-0"><BsPersonSquare className="text-warning"/> Łukasz Kępa</h1>
                            <label className="fs-4">
                                <BsEnvelopeFill className="text-warning"/>&nbsp;email&nbsp;:&nbsp;<br/>
                                <a className="text-warning" href="mailto:lukaszkepa03@gmail.com">
                                     lukaszkepa03<BsAt/>gmail.com
                                </a>
                            </label>
                            <br/>
                            <label className="fs-4 mb-3">
                                <BsGithub className="text-warning"/>&nbsp;github&nbsp;:&nbsp;<br/>
                                <a className="text-warning" href="https://github.com/kepa-lukasz">
                                     https://github.com/kepa-lukasz
                                </a>
                            </label>
                            <p className="fs-5">Podawanie prywatnych informacji w internecie nie jest mądre, jeśli chcesz, skontaktuj się ze mną drogą mailową</p>
                        </Col>
                        <Col className="col-12 col-md-3 justify-content-end d-flex align-items-center p-0">
                            <img  src={logo}/>
                        </Col>
                    </Row>

                </Container>
                <Container fluid className="mb-3 p-0 col-12">
                    <Container fluid >
                        <label className="h3 fw-bold m-3 text-warning"><BsCpu /> Wykształcenie</label>
                        <p className="fs-5 m-2 ms-5">Aktualnie </p>
                        <p className="fs-5 m-3 ms-4">5 Publiczne Technikum Elektryczne im.Tadeusza Kościuszki w Opolu,<br /> Profil technik informatyk, klasa maturalna</p>
                    </Container>
                    <hr />
                    <Container fluid >
                        <label className="h3 fw-bold m-3 mb-2 text-warning"><BsGear /> Doświadczenie</label>
                        <p className="fs-5 m-3 ms-4">W terminie 04.10-30.10.2021 odbyłem praktyki zawodowe w RZPWE Opole, nauczyłem się tam podstaw Javascript, pracowałem z serwerami Ubuntu (ftp, postfix). Przygotowywałem stanowiska komputerowe do pracy biurowej.</p>
                        <p className="fs-5 m-3 ms-4 wrap">W październiku i listopadzie 2022r. w każdy piątek w godzinach 6:00-8:00 pracowałem w sklepie odzieżowym ZARA. Praca polegała na metkowaniu towaru.</p>
                    </Container>
                    <hr />
                    <Container fluid >
                        <label className="h3 fw-bold m-3 text-warning"><BsClipboardCheck /> Kursy</label>
                        <p className="fs-5 m-2 ms-5">Aktualnie </p>
                        <p className="fs-5 ms-4">Kurs kwalifikacji zawodowych technik programista</p><br />
                        <p className="fs-5 ms-4">Kwalifikacja technik informatyk</p><br />
                        <p className="fs-5 ms-4">Studium Talent PWr - matematyka</p><br />
                        <p className="fs-5 m-2 ms-5">Ukończone</p>
                        <p className="fs-5 ms-4">Cisco IT Essentials: PC Hardware and Software</p><br />
                        <p className="fs-5 ms-4">Cisco CCNAv7: Introduction to Networks</p><br />
                    </Container>
                    <hr />
                    <Container fluid >
                        <label className="h3 fw-bold m-3 text-warning"><BsPuzzle /> Umiejętności</label>
                        <p className="fs-5 m-3 ms-4">Znajomość React.js, HTML, CSS, Bootstrap</p>
                        <p className="fs-5 m-3 ms-4">Znajomość podstaw Node.js, Javascript, Php, Python</p>
                        <p className="fs-5 m-3 ms-4">Znajomość języka angielskiego na poziomie B2</p>
                        <p className="fs-5 m-3 ms-4">Prawo jazdy kat. B</p>
                        <p className="fs-5 m-3 ms-4">Praca w grupie</p>
                        <p className="fs-5 m-3 ms-4">Organizacja wydarzeń, akcji, imprez</p>
                    </Container>
                    <hr />
                    <Container fluid>
                        <label className="h3 fw-bold m-3 text-warning"><BsCompass /> Zainteresowania</label>
                        <p className="fs-5 m-3 ms-4">Harcerstwo (Instruktor ZHR)</p>
                        <p className="fs-5 m-3 ms-4">Sport</p>
                        <p className="fs-5 m-3 ms-4">Szachy</p>
                        <p className="fs-5 m-3 ms-4">Matematyka</p>
                    </Container>
                </Container>

            </Container>

        </Container>
        </Container>


    )
};


export default Cv;
