import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { Basicdetails } from "../Components/Registration/Basicdetails";
import Teacher_DashBoard from "../Components/Teacher-Dashboard/Teacher_DashBoard.js"
function AppNavigator(props) {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Basicdetails/>}/>
                <Route exact path="/dashboard" element={<Teacher_DashBoard/>}/>
            </Routes>
        </Router>
    );
}

export default AppNavigator;