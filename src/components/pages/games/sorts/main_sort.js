import React from "react";
import Tabcontainer from "./tab_container";
import { useState } from "react";
import { Alert, Button, Container} from "react-bootstrap";

//icons
import { BsLightning, BsExclamationTriangle, BsArrowDownSquare, BsReply, BsGeoAlt } from "react-icons/bs"
import { TbChartBubble } from "react-icons/tb"
import { AiOutlineAim } from "react-icons/ai"
import { RiEmotionSadLine } from "react-icons/ri"
const Mainsort = () => {
    
    //set states 

    const [tab, setTab] = useState([9, 1, 4, 2, 11, 7, 3, 8, 5, 12, 6, 10])
    const [info, setInfo] = useState(<p>Wybierz algorytm, lub wymieszaj listę</p>)
    const [isSorting, chIsSorting] = useState(false)
    const [isSorted, chSorted] = useState(false)
    const [show, setShow] = useState(true);
    const [howalert, setalert] = useState()

//info display
    const showalert = (info, color) => {
        setShow(true)
        setalert(
            <Alert variant={color} onClose={() => { setShow(false) }} dismissible>
                <Alert.Heading>{info}</Alert.Heading>
            </Alert>
        )
    }
//wait to show how sorting function step work
    const sleep = (ms) => {
        return new Promise(res => setTimeout(res, ms))
    }
//randomize array
    const mix = () => {
        if (isSorting) return
        let sortedTab = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        let idx
        let tabtmp = []
        for (let i = 0; i < 13; i++) {
            idx = Math.floor(Math.random() * sortedTab.length)
            tabtmp.push(sortedTab[idx])
            sortedTab.splice(idx, 1)
        }
        setTab(tabtmp)
        chSorted(false)
    }
//sorting functions
    const jsSort = () => {
        if (isSorting || isSorted) return
        setInfo(<p>Język programowania javascript(w nim aplikacja jest napisana) uznaje liczby w tablicy (typ number) za słowa/ciągi znaków.
            <br />Chodzi w tym o to, że funkcja array.sort() potrafi sortować słowa (np. [kot, pies, borsuk] &rarr; [borsuk, kot, pies])
            <br /> Ale z liczbami za to nie działa, bo liczba 10 jest przed liczbą 2, (1 jest w słowniku przed 2 więc 10 też jest szybciej niż 2)
        </p>)
        chIsSorting(true)
        let tabtmp = tab;
        tabtmp.sort()
        setTab([...tabtmp])
        chIsSorting(false)
        showalert("prawie posortowano!", "warning")
        return
    }
    async function bubbleSort() {
        if (isSorting || isSorted) return

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
                    await sleep(400)
                    setTab([...tabtmp])
                }
            }
        }
        chSorted(true)
        chIsSorting(false)
        showalert("Posortowano!", "success")
        return
    }
    async function insertSort() {
        if (isSorting || isSorted) return
        chIsSorting(true)

        setInfo(<p>Algorytm wybiera po kolei każdą liczbę a następnie sprawdza, czy wybrana liczba jest większa od następnej.
            <br />Jeżeli nie jest, liczba jest wstawiana w to miejsce, czyli przed liczbą większą od wybranej.
            <br />Jeżeli jest, algorytm sprawdza następną liczbę z kolei.
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
            await sleep(400)
            tabtmp[j] = tmp
            setTab([...tabtmp])
        }
        setTab([...tabtmp])
        chIsSorting(false)
        chSorted(true)
        showalert("Posortowano!", "success")
        return
    }
    async function bogoSort() {
        if (isSorting) return
        chIsSorting(true)
        setInfo(<p><span className="fs-5 text-danger">Bogo sort nie jest algorytmem sortującym!</span><br />
            Jest to rodzaj żartu polegającego na losowaniu kolejności tak długo, aż tablica nie będzie posortowana.<br />
            Na potrzeby jego zaprezentowania skróciłem liczbę elementów tablicy, bo nigdy by nie posortowało ;)
        </p>)
        setTab([5, 1, 7, 3])
        let sortedTab = [1, 3, 5, 7]

        let loop = true
        let idx

        for (let j = 0; j < 20; j++) {
            let sorted = true;
            let tabtmp = []
            if (!loop) {
                break
            }
            await sleep(400)

            for (let i = 0; i < 5; i++) {
                idx = Math.floor(Math.random() * sortedTab.length)
                tabtmp.push(sortedTab[idx])
                sortedTab.splice(idx, 1)
            }
            sortedTab = [1, 3, 5, 7]
            setTab(tabtmp)
            for (let i = 0; i < sortedTab.length; i++)
                if (tabtmp[i] != sortedTab[i]) {
                    sorted = false;
                    break;
                }
            loop = !sorted
        }
        (loop) ?
            showalert("Nie udało się posortowac tablicy przy 20 podejściach, więc przerwano działanie kodu!", "danger")
            : showalert("Udało się!", "success")
        chIsSorting(false)
        chSorted(true)
        return
    }
    return (
        <Container>
            {(show) ? howalert : null}
            <Container className="px-3 py-3 mb-3 border border-success rounded-3">
                <p className="p-0 m-0">{info}</p>
            </Container>
            <Container className="px-3 py-3 border border-success rounded-3">


                <Tabcontainer key={tab} tab={tab} />

                <hr className="mt-4 border border-success border-1" />

                <Container className="d-flex justify-content-evenly flex-wrap">
                    <Button disabled={isSorted} variant="outline-warning fs-5 d-flex align-items-center my-2 mx-1" onClick={jsSort}>
                        <RiEmotionSadLine />&nbsp;sortowanie javascript
                    </Button>

                    <button type="button" className="opacity-25 fs-5 py-0 btn btn-outline-primary position-relative my-2 mx-1">
                        <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-secondary">
                            wkrótce dostępne
                        </span>
                        <span className="p-0"> <BsLightning />&nbsp;sortowanie szybkie</span>

                    </button>

                    <Button disabled={isSorted} variant="outline-success fs-5 d-flex align-items-center my-2 mx-1" onClick={bubbleSort}>
                        <TbChartBubble />&nbsp;sortowanie bąbelkowe
                    </Button>
                    <Button disabled={isSorted} variant="outline-success fs-5 d-flex align-items-center my-2 mx-1" onClick={insertSort}>
                        <BsArrowDownSquare />&nbsp;sortowanie przez wstawianie
                    </Button>
                    <button type="button" className="opacity-25 fs-5 py-0 btn btn-outline-success position-relative my-2 mx-1">
                        <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-secondary">
                            wkrótce dostępne
                        </span>
                        <span className="p-0"> <AiOutlineAim />&nbsp;sortowanie przez wybór</span>

                    </button>
                    <button type="button" className="opacity-25 fs-5 py-0 btn btn-outline-success position-relative my-2 mx-1">
                        <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-secondary">
                            wkrótce dostępne
                        </span>
                        <span className="p-0"> <BsGeoAlt />&nbsp;sortowanie szybkie</span>

                    </button>
                    <Button variant="outline-danger fs-5 d-flex align-items-center my-2 mx-1" onClick={bogoSort}>
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