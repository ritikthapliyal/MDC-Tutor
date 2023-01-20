import React from 'react'
import './ProfileUnlocking.css'
import Loading from './Loading'


function ProfileUnlocking() {
  return (
    <div className='profile-unlocking'>
        
        <div className='profile-unlocking-container'>
            <Loading/>
            <h3>Your Profile is unlocking...</h3>
            <div>
                <p>Please wait for your account to be activated. If it doesn't get activated in <span>3 hours</span>,</p>
                <p>Please contact us at <a href = "mailto: raghav.mishra@doubtconnect.in">raghav.mishra@doubtconnect.in</a>.</p>
            </div>
        </div>
    </div>
  )
}

export default ProfileUnlocking