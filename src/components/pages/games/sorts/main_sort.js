import React from "react";
import Tabcontainer from "./tab_container";
import { useState } from "react";
import { Button, Container} from "react-bootstrap";
import { BsLightning, BsExclamationTriangle, BsArrowDownSquare, BsReply } from "react-icons/bs"
import { TbChartBubble } from "react-icons/tb"
import {AiOutlineAim} from "react-icons/ai"
import {RiEmotionSadLine} from "react-icons/ri"
const Mainsort = () => {
    const [tab, setTab] = useState([9, 1, 4, 2, 11, 7, 3, 8, 5, 12, 6, 10])
    const [info, setInfo] = useState(<p>Wybierz algorytm, lub wymieszaj listę</p>)
    const [isSorting, chIsSorting] = useState(false)
    const [isSorted, chSorted] = useState(false)
    const sleep = () => {
        return new Promise(res => setTimeout(res, 400))
    }
    const mix = () =>{
        if(isSorting) return
        setTab([9, 1, 4, 2, 11, 7, 3, 8, 5, 12, 6, 10])
        chSorted(false)
    }
    const jsSort = () => {
        if(isSorting) return
        setInfo(<p>Język programowania javascript(w nim aplikacja jest napisana) uznaje liczby w tablicy (typ number) za słowa/ciągi znaków.
            <br/>Chodzi w tym o to, że funkcja array.sort() potrafi sortować słowa (np. [kot, pies, borsuk] &rarr; [borsuk, kot, pies])
            <br/> Ale z liczbami za to nie działa, bo liczba 10 jest przed liczbą 2, (1 jest w słowniku przed 2 więc 10 też jest szybciej niż 2) 
        </p>)
        chIsSorting(true)
        setTab([9, 1, 4, 2, 11, 7, 3, 8, 5, 12, 6, 10])
        let tabtmp = tab;
        tabtmp.sort()
        setTab([...tabtmp])
        chIsSorting(false)
        return
    }
    async function bubble() {
        if(isSorting || isSorted) return
        chIsSorting(true)
        setTab([9, 1, 4, 2, 11, 7, 3, 8, 5, 12, 6, 10])
        setInfo(<p>Algorytm wybiera po kolei pary liczb, które są obok siebie, 
            następnie porównanuje je i jeżeli liczba z lewej strony jest większa, 
            zamienia ja miejscami.</p>)
        let tmp
        let tabtmp = tab
        for (let i = 0; i < tabtmp.length - 1; i++) {
            for (let j = 0; j < tabtmp.length - 1; j++) {
                if (tabtmp[j] > tabtmp[j + 1]) {
                    tmp = tabtmp[j + 1]
                    tabtmp[j + 1] = tabtmp[j]
                    tabtmp[j] = tmp
                    await sleep()
                    setTab([...tabtmp])
                }
            }
        }
        chSorted(true)
        chIsSorting(false)
        return
    }
    async function insert() {
        if(isSorting || isSorted) return
        chIsSorting(true)
        
        setInfo(<p>Algorytm wybiera po kolei każdą liczbę a następnie sprawdza, czy wybrana liczba jest większa od następnej.
            <br/>Jeżeli nie jest, liczba jest wstawiana w to miejsce, czyli przed liczbą większą od wybranej.
            <br/>Jeżeli jest, algorytm sprawdza następną liczbę z kolei.
        </p>)
        let tmp
        let tabtmp = tab
        for (let i = 1; i < tabtmp.length; i++) {
            tmp = tabtmp[i]
            let j = i - 1
            while (j >= 0 && tabtmp[j] > tmp) {
                tabtmp[j + 1] = tabtmp[j]
                j = j - 1
            }
            j++
            await sleep()
            tabtmp[j] = tmp
            setTab([...tabtmp])
        }
        setTab([...tabtmp])
        chIsSorting(false)
        chSorted(true)
        return
    }
    async function choose() {}
    return (
        <Container>
            <Container className="px-3 py-3 mb-3 border border-success rounded-3">
                <p className="p-0 m-0">{info}</p>
            </Container>
            <Container className="px-3 py-3 border border-success rounded-3">


                <Tabcontainer key={tab} tab={tab} />

                <hr className="mt-4 border border-success border-1" />

                <Container className="d-flex justify-content-evenly flex-wrap">
                    <Button  variant="outline-warning fs-5 d-flex align-items-center my-2 mx-1" onClick={jsSort}>
                        <RiEmotionSadLine />&nbsp;sortowanie javascript
                    </Button>
                    <Button disabled variant="outline-primary fs-5 d-flex align-items-center my-2 mx-1" onClick={()=>{console.log("ok-sortowanie")}}>
                        <BsLightning />&nbsp;sortowanie szybkie
                    </Button>
                    <Button variant="outline-success fs-5 d-flex align-items-center my-2 mx-1" onClick={bubble}>
                        <TbChartBubble />&nbsp;sortowanie bąbelkowe
                    </Button>
                    <Button variant="outline-success fs-5 d-flex align-items-center my-2 mx-1" onClick={insert}>
                        <BsArrowDownSquare />&nbsp;sortowanie przez wstawianie
                    </Button>
                    <Button disabled variant="outline-success fs-5 d-flex align-items-center my-2 mx-1" onClick={choose}>
                        <AiOutlineAim />&nbsp;sortowanie przez wybór
                    </Button>
                    <Button disabled variant="outline-danger fs-5 d-flex align-items-center my-2 mx-1" onClick={() => console.log("Primary")}>
                        <BsExclamationTriangle />&nbsp;Bogo
                    </Button>
                    <Button variant="success fs-5 d-flex align-items-center my-2 mx-1" onClick={mix}>
                        <BsReply />&nbsp; wylosuj kolejność
                    </Button>
                </Container>
            </Container>
        </Container>
    )
}
export default Mainsort