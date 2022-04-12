
import {createContext,useState} from "react";

export const AppContext = createContext();

export const AppContextProvider = ({children})=>{

    const [auth,setAuth] = useState(false);
    const [globalKey, setGlobalKey] = useState("");


    const handleAuth = ()=>{
        setAuth(!auth);
    }

    const handleGlobalKey = (key)=>{
        setGlobalKey(key);
    }

    return <AppContext.Provider
            value={{auth,globalKey, handleAuth, handleGlobalKey}}
        >{children}</AppContext.Provider>
}