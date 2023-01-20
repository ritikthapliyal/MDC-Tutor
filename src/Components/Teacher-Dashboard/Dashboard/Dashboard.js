import React from 'react'
import './Dashboard.css'
import Status from './Status/Status'
import ProfileSummary from './ProfileSummary/ProfileSummary'
import Requests from './Requests/Requests'

function Dashboard() {
  return (
    <div className='Dashboard'>
        <ProfileSummary/>
        <Status/>
        <Requests/>
    </div>
  )
}

export default Dashboard