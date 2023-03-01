import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Spinner, Toast, Row, Col } from "react-bootstrap";
import {useCookies} from "react-cookie";

const Jokes = () => {

  const [cookies, setCookie] = useCookies(['showJoke']);
  // loading animation
  const spinner = <div><Spinner animation="border" /><p>Ładowanie żartu</p></div>;
  const [joke, setJoke] = useState(spinner);

  //toast close function, set cookie into 0
  const [showToast, setShowToast] = useState(true);
  const hide = () => {
    setShowToast(false);
    setCookie("showJoke", 0);
  }
  useEffect(()=>{
    // check if joke should be displayed
    setShowToast(!(cookies.showJoke === "0"))

    //get api joke
    const options = {
      method: 'GET',
      url: 'https://jokeapi-v2.p.rapidapi.com/joke/Any',
      params: {
        format: 'json',
        contains: 'C%23',
        idRange: '0-150',
        blacklistFlags: 'nsfw,racist'
      },
      headers: {
        'X-RapidAPI-Key': '24cd410a5emsh3a1378cf7ba509dp141ab9jsn8463b7646711',
        'X-RapidAPI-Host': 'jokeapi-v2.p.rapidapi.com'
      }
    };
    
    Axios.request(options).then((res)=>{
      setJoke(<span>{res.data.setup}<br/> {res.data.delivery}</span>);
    }).catch((err)=>{
      setJoke("wystąpił problem podczas ładowania żartu :(")
    });
  }, [cookies.showJoke])
    //returning Toast with joke
  return (
    <Row fluid className="d-flex justify-content-center m-0">
       <Col className="col-11 col-sm-10 p-0">
    <Toast fluid show={showToast} onClose={hide} className="w-100 my-3 p-0 fs-5">
      <Toast.Header >
        <strong className="me-auto">Daily joke</strong>
      </Toast.Header>
      <Toast.Body className="text-dark py-1 ">{joke}</Toast.Body>
    </Toast>
       </Col>
    </Row>
  )
}
export default Jokes;