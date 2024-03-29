import React, { useEffect, useState } from "react";
import Axios from 'axios';
import { Container, Spinner } from "react-bootstrap"

const Day = () => {
    // seting loading info
    const spinner = <div><Spinner animation="border" /><p>Ładowanie Dni</p></div>
    const [days, setDays] = useState(spinner)
    const [dateInfo, setDateInfo] = useState(spinner);
    useEffect(() => {
        let dayList;
        //getting date
        const date = new Date()
        const today = date.getDate();
        const thisMonth = date.getMonth() + 1;
        const year = date.getFullYear()
        setDateInfo(`${today}.${thisMonth}.${year}`)
        //get data api
        Axios.get(`https://pniedzwiedzinski.github.io/kalendarz-swiat-nietypowych/${thisMonth}/${today}.json`)
            .then(res => {
                //create list with elements from list 
                dayList = <ol>{
                    res.data.map((el, idx) => {
                        return (<li key={idx}>{el.name}</li>)
                    })
                }</ol>
                //setting state to new list
                setDays(dayList)
            })
            //
            .catch(err => {
                // if error occured, this will be displayed
                setDays(<p>Wystąpiły problemy</p>)
            })
    }, [])
    return (
        <Container className="py-3 fs-3">
            <Container className="border border-success rounded-3 p-0">

                <h1 className="m-2 ">Data : {dateInfo}</h1>
                <hr className="mt-2 border border-success border-1" />
                <Container>

                    <h2>Święta nietypowe na dziś:</h2>
                    {days}
                </Container>
            </Container>
        </Container>
    )
}
export default Day;