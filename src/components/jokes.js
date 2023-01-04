import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Spinner, Toast } from "react-bootstrap";
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
    Axios.get("https://api.jokes.one/jod")
    .then(res => {
      setJoke(<p>{res.data.contents.jokes[0].joke.text}</p>);
      
    })
    .catch(err => {
      setJoke(<p>Podczas ładowania żartu, wystąpił problem :(</p>)
    })
  }, [])
    //returning Toast with joke
  return (
    <Toast show={showToast} onClose={hide} className="w-75 m-auto my-3 p-0 fs-5">
      <Toast.Header className="w-100">
        <strong className="me-auto">Daily joke</strong>
      </Toast.Header>
      <Toast.Body className="text-dark py-1">{joke}</Toast.Body>
    </Toast>
  )
}
export default Jokes;