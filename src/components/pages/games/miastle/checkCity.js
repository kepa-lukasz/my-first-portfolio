import { Alert, Button } from "react-bootstrap"
import { wos, emotes } from "./lists"
import React from "react"
import { BsHeartFill } from "react-icons/bs"

const checkCity = (expectedWos, realWos, number) => {
    //common returns (win and error)
    if (!Object.keys(wos).includes(expectedWos)) return (responseAlert("error", number))
    if (expectedWos == realWos) return (responseAlert("success", number))


    const expectedCords = wos[expectedWos];
    const realCords = wos[realWos];

    //math behind arrows
    let dX = realCords[0] - expectedCords[0]
    let dY = realCords[1] - expectedCords[1]
    let arX = (dY == 0) ? "" : (dY < 0) ? "left" : "right"
    let arY = (dX == 0) ? "" : (dX < 0) ? "down" : "up"

    return (responseAlert(`${arY}${arX}`, number))


}
const responseAlert = (info, number) => {
    let elementinfo, color;
    let isWinned = false;
    switch (info) {
        case "error":
            color = "danger"
            elementinfo = "Takie województwo nie istnieje!"
            break;
        case "success":
            isWinned = true;
            color = "success"
            elementinfo = <div>
                <h2><BsHeartFill />Brawo!!!<BsHeartFill /></h2>
            </div>

            break;
        default:
            console.log(info)
            color = "info"
            elementinfo = <h2>{emotes[info]} Bardziej w tę stronę! {emotes[info]}</h2>
            break;
    }
    return (
        {
            element:
                <Alert key={number} variant={color} className='justify-content-center text-center'>
                    <span>Liczba prób: {number}</span>
                    <hr className="m-1" />
                    {elementinfo}
                </Alert>,
            isEnded : isWinned
        }

    )
}

export { checkCity }