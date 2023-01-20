import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { Basicdetails } from "../Components/Registration/Basicdetails";
function AppNavigator(props) {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Basicdetails/>}/>
            </Routes>
        </Router>
    );
}

export default AppNavigator;