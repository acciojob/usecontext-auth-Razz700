
import React, { createContext, useState } from "react";
import './../styles/App.css';
import Auth from "./Auth";

export const AuthContext=createContext();
const App = () => {
  const [status,setstatus]=useState(false);
  const handlechange=()=>{
status?setstatus(false):setstatus(true);
  }
  return (
    <AuthContext.Provider value={status}>
 <div>
      <h1>Click on the checkbox to get authenticated</h1>
        <Auth/>
        <input onChange={handlechange}  id="check" type="checkbox"/>
        <label htmlFor='check'>I'm not a robot</label>
        {/* Do not remove the main div */}
    </div>
   </AuthContext.Provider>
   
  )
}

export default App
