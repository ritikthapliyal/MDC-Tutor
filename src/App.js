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


function App() {
  return (
 <>
  <Router>
      <Routes>
         <Route exact path="/" element={<Basicdetails/>}/>
      </Routes>
  </Router>
 </>
  );
}

export default App;
