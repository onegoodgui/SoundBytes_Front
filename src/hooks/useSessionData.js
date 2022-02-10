import SessionDataContext from "../contexts/SessionDataContext";
import { useContext } from "react";

export default function useSessionData(){

    return useContext(SessionDataContext)
}