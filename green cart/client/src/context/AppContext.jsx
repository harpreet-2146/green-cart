import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext=createContext();

export const AppContextProvider=({children})=>{
    
    const navigate=useNavigate();
    const [user,setuser]=useState(null)
    const [isSeller,setIsSeller]=useState(false)

    const value={navigate,user,setuser,setIsSeller, isSeller}

    return <AppContext.Provider>
        {children}
    </AppContext.Provider>
}
export const useAppContext=()=>{
    return useContext(AppContext)
}