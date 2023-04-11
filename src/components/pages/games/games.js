import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Container, Col, Row, Button, Card, ListGroup } from "react-bootstrap";
import { GiTicTacToe } from "react-icons/gi"
import { BsFillPinMapFill } from "react-icons/bs"
import { MdOutlineAccountTree } from "react-icons/md"
import miastlepng from "./miastle.png"
import tictacpng from "./tictac.png"
import sortpng from "./sort.png"
const Games = () => {
    return (
        <Container fluid className="p-0">
            {/* here the game will be  displayed */}
            <Outlet />
            <Container fluid className=" mb-3">
                <hr className="mt-4 border border-success border-1" />
                <Container className=" d-flex justify-content-evenly flex-wrap">
                        <Link 
                        to="/games/tictac" 
                        className="border border-success rounded-3 col-6 col-md-4 col-lg-3 col-xl-2 m-3 text-decoration-none"
                        style={{backgroundImage : `url(${tictacpng})`,backgroundRepeat : "no-repeat", backgroundPosition : "center" , minHeight : "200px"}}
                        >
                                <Container className="h-100 d-flex justify-content-center align-items-center p-0">
                                    <Container className="p-2  text-center w-100 "
                                    style={{backgroundColor : "rgba(25, 135, 84, 0.75)"}}
                                    >
                                        <p className="fs-4 my-auto py-1 text-black">Kółko-Krzyżyk</p>
                                    </Container>
                                </Container>
                            
                        </Link>
                       
                        <Link 
                        to="/games/miastle" 
                        className="border border-success rounded-3 col-6 col-md-4 col-lg-3 col-xl-2 m-3 text-decoration-none"
                        style={{backgroundImage : `url(${miastlepng})`,backgroundRepeat : "no-repeat", backgroundPosition : "center" , minHeight : "200px"}}
                        >
                                <Container className="h-100 d-flex justify-content-center align-items-center p-0">
                                    <Container className="p-2  text-center w-100 "
                                    style={{backgroundColor : "rgba(25, 135, 84, 0.75)"}}
                                    >
                                        <p className="fs-4 my-auto py-1 text-black">Miastle</p>
                                    </Container>
                                </Container>
                            
                        </Link>

                        <Link 
                        to="/games/sort" 
                        className="border border-success rounded-3 col-6 col-md-4 col-lg-3 col-xl-2 m-3 text-decoration-none"
                        style={{backgroundImage : `url(${sortpng})`,backgroundRepeat : "no-repeat", backgroundPosition : "center" , minHeight : "200px"}}
                        >
                                <Container className="h-100 d-flex justify-content-center align-items-center p-0">
                                    <Container className="p-2  text-center w-100 "
                                    style={{backgroundColor : "rgba(25, 135, 84, 0.75)"}}
                                    >
                                        <p className="fs-4 my-auto py-1 text-black">Sortowanie list</p>
                                    </Container>
                                </Container>
                            
                        </Link>
                    


                </Container>
                <hr className="mt-4 border border-success border-1" />
            </Container>

            {/* here the game will be  displayed*/}
        </Container>
    )
}
export default Games;