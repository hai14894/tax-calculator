import React, { useState,createContext } from "react";
export const AppContext = createContext()
const AppContextProvider = (props) => {
    const [income,setIncome] = useState(0)
    return(
        <AppContext.Provider value = {{income,setIncome}}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider