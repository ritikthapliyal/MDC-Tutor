import {Fragment, useState} from 'react'
import './Teacher_Dashboard.css'

import Profile from './Profile/Profile'
import Dashboard from './Dashboard/Dashboard'
import Analytics from './Analytics/Analytics'
import Activity from './Activity/Activity'
import Teacher_Header from './Teacher_Header/Teacher_Header'


function Teacher_Dashboard() {

    const [show,setShow] = useState({showProfile:false,showDashboard:true,showAnalytics:false,showActivity:false,})

    return (
        <Fragment>
            <Teacher_Header/>
            <div className='teacher-dashboard'>
                <div className='dashboard-options'>
                    <button 
                        style={{color: ` ${show.showDashboard ? "#ffffff" : ""}`}} 
                        onClick={(e)=>{
                        setShow({showProfile:false,showDashboard:true,showAnalytics:false,showActivity:false,})
                    }}>Dashboard</button>
                    

                    <button
                        style={{color: ` ${show.showAnalytics ? "#ffffff" : ""}`}} 
                        onClick={()=>{
                        setShow({showProfile:false,showDashboard:false,showAnalytics:true,showActivity:false,})
                    }}>Analytics</button>
                    

                    <button
                        style={{color: ` ${show.showActivity ? "#ffffff" : ""}`}}  
                        onClick={()=>{
                        setShow({showProfile:false,showDashboard:false,showAnalytics:false,showActivity:true,})
                    }}>Activity</button>
                    
                    <button
                        style={{color: ` ${show.showProfile ? "#ffffff" : ""}`}}  
                        onClick={()=>{
                        setShow({showProfile:true,showDashboard:false,showAnalytics:false,showActivity:false,})
                    }}>Profile</button>
                </div>
                
                <div className='dashboard-option-selected'>
                    { show.showProfile && <Profile/>}
                    { show.showActivity && <Activity/>}
                    { show.showAnalytics && <Analytics/>}
                    { show.showDashboard && <Dashboard/>}
                </div>

            </div>
        </Fragment>

    )
}

export default Teacher_Dashboard