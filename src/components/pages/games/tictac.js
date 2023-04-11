import React, { useEffect, useState } from "react";
import { Row, Col, Button, Container, Offcanvas } from "react-bootstrap";
import { BsJustify, BsCircle, BsXLg, BsHeartFill } from "react-icons/bs"



const TicTac = () => {
  let point;
  const [winner, setWinner] = useState("")
  const iconSize = 50;
  //change button after click
  let counter = 0;
  let points = [0, 0, 0, 0, 0, 0, 0, 0]
  const change = (idx) => {
    //change index in background tab into new icon
    fieldsGenerator[idx] =
      <Col key={idx} className="col-4 d-flex justify-content-center">
        <Button disabled className="bg-success border border-dark m-1 p-2" onClick={change.bind(this, idx)}>
          {(counter % 2 === 0) ? <BsCircle size={iconSize} /> : <BsXLg size={iconSize} />}
        </Button>
      </Col>
    //change state tab
    setFields([...fieldsGenerator])
    counter++

    point = (counter % 2 === 0) ? 1 : -1
    //tab indexes means : [row1, row2, row3, col1, col2, col3, diagonal1, diagonal2]

    //rows
    if (idx === 0 || idx === 1 || idx === 2) {
      points[0] += point
    }
    else if (idx === 3 || idx === 4 || idx === 5) {
      points[1] += point
    }
    else {
      points[2] += point
    }
    //columns
    if (idx === 0 || idx === 3 || idx === 6) {
      points[3] += point
    }
    else if (idx === 1 || idx === 4 || idx === 7) {
      points[4] += point
    }
    else {
      points[5] += point
    }
    //diagonals
    if (idx === 0 || idx === 4 || idx === 8) {
      points[6] += point
    }
    if (idx === 2 || idx === 4 || idx === 6) {
      points[7] += point
    }

    //check, if sbd wins or there is a draw
    if (points.indexOf(-3) !== -1 && winner !== "Wygrywa krzyżyk") {
      setWinner("Wygrywa kółko")
    }
    else if (points.indexOf(3) !== -1) {
      setWinner("Wygrywa krzyżyk")
    }
    else if (counter === 9) {
      setWinner("Remis!")
    }
  }

  //generate 9 index tab with tictactoe fields
  let fieldsGenerator = []
  const newGame = () => {
    setWinner("")
    fieldsGenerator = []
    for (let i = 0; i < 9; i++) {
      fieldsGenerator.push(
        <Col key={i} className="col-4 d-flex justify-content-center">
          <Button className="bg-success border border-light m-1 p-2" onClick={change.bind(this, i)}>
            <BsJustify size={iconSize} />
          </Button>
        </Col>
      )
    }
    setFields([...fieldsGenerator])
  }
  //start a new game
  useEffect(() => {
    newGame()
  }, [])

  //state tab declaration
  const [fields, setFields] = useState(fieldsGenerator);

  return (
    <Container fluid className="justify-content-center d-flex p-0">
      {/*offcanvas with info about game results*/}
      <Offcanvas style={{ height: "max-content" }} className="text-center justify-content-center d-flex" placement="top" show={(winner !== "")}>
        <Offcanvas.Header>
          <Offcanvas.Title>Koniec gry</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p><BsHeartFill /> Moje gratulacje! <BsHeartFill /></p>
          <h3>{winner}</h3>
          <Button onClick={newGame} variant="outline-success fs-3 my-3">Zagraj jeszcze raz</Button><br />
          <Button onClick={() => { setWinner("") }} variant="outline-danger fs-3 my-3">Wyjdź</Button>
        </Offcanvas.Body>
      </Offcanvas>

      {/* game fields */}
      <Container fluid className="p-0 m-0 col-11 col-sm-10">
      <Container className=" p-0 rounded border-success border " >
        <Container className="col-12 col-md-9 d-flex justify-content-center">
        <Row className="col-12 col-md-10 col-xl-8 py-3" >
        {fields}
        </Row >
        </Container>

      <hr className="mt-3 border border-success border-1" />

      <Button onClick={newGame} variant="danger fs-3 m-3">Wyczyść pola</Button>
      </Container>
    </Container>
      </Container>
  )
}
export default TicTac;