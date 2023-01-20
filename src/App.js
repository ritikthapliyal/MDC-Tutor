import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { LoginBg } from "./auth/LoginBg";
import { Basicdetails } from "./Components/Registration/Basicdetails";
import { YearOfExp } from "./Components/Registration/YearOfExp";
import { ProfilePhoto } from "./Components/Registration/ProfilePhoto";
import ProfileUnlocking from "./Components/ProfileUnlocking/ProfileUnlocking.js"
import Teacher_DashBoard from "./Components/Teacher-Dashboard/Teacher_DashBoard.js"


function App() {
  return (
 <>
  <Router>
      <Routes>
         <Route exact path="/login" element={<LoginBg/>}/>
         <Route exact path="/" element={<Basicdetails/>}/>
         <Route exact path="/pl" element={<ProfileUnlocking/>}/>
         <Route exact path="/td" element={<Teacher_DashBoard/>}/>
      </Routes>
  </Router>
 </>
  );
}

export default App;
