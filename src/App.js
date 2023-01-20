import "./App.css"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
// import { LoginBg } from "./auth/LoginBg";
// import { Basicdetails } from "./Components/Registration/Basicdetails";

import ProfileUnlocking from './Components/ProfileUnlocking/ProfileUnlocking'
// import Teacher_Dashboard from "./Components/Teacher-Dashboard/Teacher_DashBoard";


function App() {
  return (
 <>
  <Router>
      <Routes>
         {/* <Route exact path="/" element={<Teacher_Dashboard/>}/> */}
         <Route exact path="/" element={<ProfileUnlocking/>}/>
      </Routes>
  </Router>
 </>
  );
}

export default App;
