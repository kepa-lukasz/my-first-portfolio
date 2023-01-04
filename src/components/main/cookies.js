import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { RxCookie } from "react-icons/rx";
import { useCookies } from "react-cookie";

function Cookies() {
  const [cookie, setCookie] = useCookies('allowCookies');
  const [show, setShow] = useState(true);

  //hide info about cookies
  const handleClose = () => {
    setShow(false)
    setCookie("allowCookies", "1", {path : "/", expires: new Date(2023, 11, 31)})
  };
  useEffect(() => {
    //checking if cookies info should be displayed
    if (cookie.allowCookies === "1") {
      setShow(false);
    }
  }, [])
  return (

    <Offcanvas show={show} placement="bottom" style={{minHeight : "40vh"}}>
      <Offcanvas.Header className='pb-0'>
        <Offcanvas.Title className='fs-2'><RxCookie className='fs-1'/> Ciasteczka</Offcanvas.Title>
        <Button variant="success" className='fs-3' onClick={handleClose}>
          Akceptuj ciasteczka
        </Button>
      </Offcanvas.Header >
      <Offcanvas.Body className='pt-3'>
        <p className='fs-4'>
          Zaakceptuj ciasteczka, aby móc poprawnie korzystać ze strony.<br />
          Zebrane informacje służą tylko i wyłącznie Twojej wygodzie.
        </p>
      </Offcanvas.Body>
    </Offcanvas>

  );
}

export default (Cookies);