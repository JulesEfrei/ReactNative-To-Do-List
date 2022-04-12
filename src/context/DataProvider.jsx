import { useState } from "react";
import { dataContext } from "./dataContext"

export default function DataProvider({ children }) {

    const [data, setData] = useState({
        Study: [
            {name: "Fare ceci", date: "13/04/22", checked: true},
            {name: "Fare cela", date: "13/04/22", checked: false},
        ],
        Development: [
            {name: "Fare si", date: "13/04/22", checked: false},
            {name: "Fare ça", date: "13/04/22", checked: true},
            {name: "Fare jsp", date: "13/04/22", checked: true},
            {name: "Fare jsp", date: "13/04/22", checked: true},
        ],
        a: [
            {name: "Fare ceci", date: "13/04/22", checked: true},
            {name: "Fare cela", date: "13/04/22", checked: false},
        ],
        b: [
            {name: "Fare si", date: "13/04/22", checked: false},
            {name: "Fare ça", date: "13/04/22", checked: true},
            {name: "Fare jsp", date: "13/04/22", checked: true},
            {name: "Fare jsp", date: "13/04/22", checked: true},
        ],
        c: [
            {name: "Fare ceci", date: "13/04/22", checked: true},
            {name: "Fare cela", date: "13/04/22", checked: false},
        ],
        s: [
            {name: "Fare si", date: "13/04/22", checked: false},
            {name: "Fare ça", date: "13/04/22", checked: true},
            {name: "Fare jsp", date: "13/04/22", checked: true},
            {name: "Fare jsp", date: "13/04/22", checked: true},
        ],
        e: [
            {name: "Fare ceci", date: "13/04/22", checked: true},
            {name: "Fare cela", date: "13/04/22", checked: false},
        ],
        sf: [
            {name: "Fare si", date: "13/04/22", checked: false},
            {name: "Fare ça", date: "13/04/22", checked: true},
            {name: "Fare jsp", date: "13/04/22", checked: true},
            {name: "Fare jsp", date: "13/04/22", checked: true},
        ],
    })

    return (

        <dataContext.Provider value={{data, setData}}>
            { children }
        </dataContext.Provider>

    )

}