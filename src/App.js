import { createContext, useEffect, useState } from "react";
import "./App.css"
import AppNavigator from "./app/AppNavigator";
import { LoginBg } from "./auth/LoginBg";

// firebase lib
import { auth } from "./config/firebase";
import { onAuthStateChanged } from "firebase/auth";


function App() {
  const [user,setUser] = useState(false);
  const UserContext = createContext();
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    setLoading(true);
    onAuthStateChanged(auth, (userCredentials) => {
      if (userCredentials) {
        setUser(userCredentials)
      } else {
        console.log("Failed to Sign In")
      }
      setLoading(false);
    });
  },[])
  if(loading)
    return <h1>Loading</h1>
  return (
    <UserContext.Provider value={{user,setUser}}>
      {user?<AppNavigator/>:<LoginBg/>}
    </UserContext.Provider>
  );
}

export default App;
