import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap"
import { useCookies } from "react-cookie";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs"

const SwitchElement = ({ handleClick }) => {
    //define cookies, set variable based on cookie
    const [cookie, setCookie] = useCookies(['darktheme'])
    let isDark = (cookie.darktheme === "1")

    //set label tag defined by cookie
    let themeHandler = (isDark) ? <Container><BsSunFill /> motyw jasny</Container> : <Container><BsMoonStarsFill /> motyw ciemny</Container>
    const [theme, setTheme] = useState(themeHandler)

    //send default info about theme to App.js
    useEffect(() => {
        handleClick(isDark)
    }, [])

    //onClick change values
    const changetheme = (event) => {
        if (event.target.checked) {
            themeHandler = <Container><BsSunFill /> motyw jasny</Container>
            setCookie("darktheme", 1, { path: "/", expires: new Date(2023, 11, 31) })
            isDark = true
        }
        else {
            themeHandler = <Container><BsMoonStarsFill /> motyw ciemmy</Container>
            setCookie("darktheme", 0, { path: "/", expires: new Date(2023, 11, 31) })
            isDark = false
        }
        //send info to App.js set label tag
        handleClick(isDark)
        setTheme(themeHandler)
    }
    return (
        <Container fluid className="pe-4 pt-1 border-bottom border-success">
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