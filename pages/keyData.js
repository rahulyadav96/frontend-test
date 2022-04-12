import { Navbar } from "../components/Navbar";
import {useContext} from "react";
import { AppContext } from "../context/AppContext";
export default function Key(){
    const {globalKey}  = useContext(AppContext);
    return <>
            <Navbar />
            <div>
                <h6>Key variables have value: {globalKey} </h6>
               
            </div>
    </>
    
}