import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import miastlepng from "./miastle.png"
import tictacpng from "./tictac.png"
import sortpng from "./sort.png"
function Tilts() {
    const options = {
        scale : 1.1,
        speed : 1000,
        max : 20
    }
    const tilt1 = useRef(null);
    const tilt2 = useRef(null);
    const tilt3 = useRef(null);

    useEffect(() => {
        VanillaTilt.init(tilt1.current, options);
        VanillaTilt.init(tilt2.current, options);
        VanillaTilt.init(tilt3.current, options);
    }, [options]);

    return (
        <Container className=" d-flex justify-content-evenly flex-wrap">
                    <Link
                    ref={tilt1} options={{options}}
                        to="/games/tictac"
                        className="border border-success rounded-3 col-6 col-md-4 col-lg-3 col-xl-2 m-3 text-decoration-none"
                        style={{ backgroundImage: `url(${tictacpng})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", minHeight: "200px" }}
                    >
                        <Container className="h-100 d-flex justify-content-center align-items-center p-0">
                            <Container className="p-2  text-center w-100 "
                                style={{ backgroundColor: "rgba(25, 135, 84, 0.75)" }}
                            >
                                <p className="fs-4 my-auto py-1 text-black">Kółko-Krzyżyk</p>
                            </Container>
                        </Container>

                    </Link>

                    <Link
                    ref={tilt2} options={{options}}
                        to="/games/miastle"
                        className="border border-success rounded-3 col-6 col-md-4 col-lg-3 col-xl-2 m-3 text-decoration-none"
                        style={{ backgroundImage: `url(${miastlepng})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", minHeight: "200px" }}
                    >
                        <Container className="h-100 d-flex justify-content-center align-items-center p-0">
                            <Container className="p-2  text-center w-100 "
                                style={{ backgroundColor: "rgba(25, 135, 84, 0.75)" }}
                            >
                                <p className="fs-4 my-auto py-1 text-black">Miastle</p>
                            </Container>
                        </Container>

                    </Link>

                    <Link
                    ref={tilt3} options={{options}}
                        to="/games/sort"
                        className="border border-success rounded-3 col-6 col-md-4 col-lg-3 col-xl-2 m-3 text-decoration-none"
                        style={{ backgroundImage: `url(${sortpng})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", minHeight: "200px" }}
                    >
                        <Container className="h-100 d-flex justify-content-center align-items-center p-0">
                            <Container className="p-2  text-center w-100 "
                                style={{ backgroundColor: "rgba(25, 135, 84, 0.75)" }}
                            >
                                <p className="fs-4 my-auto py-1 text-black">Sortowanie listy</p>
                            </Container>
                        </Container>

                    </Link>








                </Container>
      )
}
export default Tilts;