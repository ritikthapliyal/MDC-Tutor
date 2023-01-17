import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { LoginBg } from "./auth/LoginBg";
import { Basicdetails } from "./Components/Registration/Basicdetails";


function App() {
  return (
 <>
  <Router>
      <Routes>
      <Route exact path="/" element={<LoginBg/>}/>
      </Routes>
  </Router>
 </>
  );
}

export default App;
