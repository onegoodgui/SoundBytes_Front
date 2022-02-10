import { createContext, useState } from "react";

const SessionDataContext = createContext();

export function SessionDataProvider({ children }) {
    if(localStorage.getItem("sessionData") === 'undefined'){
      localStorage.clear();
    }
    const persistedSessionData = JSON.parse(localStorage.getItem("sessionData"));
    const [sessionData, setSessionData] = useState(persistedSessionData);
  
    function updateSessionData(data) {
      setSessionData(data);
      localStorage.setItem("sessionData", JSON.stringify(data));
    }
  
    return (
      <SessionDataContext.Provider value={{ sessionData, updateSessionData }}>
        {children}
      </SessionDataContext.Provider>
    )
}

  export default SessionDataContext;