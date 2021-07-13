import React, { useState,createContext } from "react";
export const AppContext = createContext()
const AppContextProvider = (props) => {
    const [income,setIncome] = useState(0)
    const [country, setCountry] = useState("Australia")
    const [incomeYear, setIncomeYear] = useState("2020-2021")
    return(
        <AppContext.Provider value = {{income,setIncome,country,setCountry,incomeYear,setIncomeYear}}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider