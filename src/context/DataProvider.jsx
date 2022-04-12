import { useState } from "react";
import { dataContext } from "./dataContext"

export default function DataProvider({ children }) {

    const [data, setData] = useState({
        Study: [
            {name: "Fare ceci", date: "13/04/22", checked: false},
            {name: "Fare cela", date: "13/04/22", checked: false},
        ],
        Development: [
            {name: "Fare si", date: "13/04/22", checked: false},
            {name: "Fare ça", date: "13/04/22", checked: false},
        ],
    })

    return (

        <dataContext.Provider value={{data, setData}}>
            { children }
        </dataContext.Provider>

    )

}