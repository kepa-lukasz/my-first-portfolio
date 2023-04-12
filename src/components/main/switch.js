import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap"
import { useCookies } from "react-cookie";
import { BsMoonStarsFill } from "react-icons/bs"

const SwitchElement = ({ handleClick }) => {
    //define cookies, set variable based on cookie
    const [cookie, setCookie] = useCookies(['darktheme'])
    let isDark = (cookie.darktheme === "1")

    //set label tag
    let themeHandler = <Container><BsMoonStarsFill /> motyw ciemny</Container>
    const [theme] = useState(themeHandler)

    //send default info about theme to App.js
    useEffect(() => {
        handleClick(isDark)
    }, [handleClick, isDark])

    //onClick change values
    const changetheme = (event) => {
        if (event.target.checked) {
           
            setCookie("darktheme", 1, { path: "/", expires: new Date(2023, 11, 31) })
            isDark = true
        }
        else {
           
            setCookie("darktheme", 0, { path: "/", expires: new Date(2023, 11, 31) })
            isDark = false
        }
        //send info to App.js 
        handleClick(isDark)
    }
    return (
        <Container fluid className=" p-0 pe-4 pt-1">
            <Form.Check
                reverse
                type="switch"
                label={theme}
                onChange={changetheme}
                checked={(cookie.darktheme === "1")}
            />
        </Container>
    )
}
export default SwitchElement