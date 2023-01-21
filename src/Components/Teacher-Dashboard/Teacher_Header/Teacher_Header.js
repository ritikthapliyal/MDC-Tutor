import React from 'react'
import './Teacher_Header.css'
import bell from '../../../assets/bell.svg'
import avatar from '../../../assets/Avatar.svg'
import logo from '../../../assets/Doubt-connect-logo.svg'

function Teacher_Header() {
  return (
    <div className='teacher-header'>
        <img src = {logo}></img>
        <div className='teacher-header-options'>
            <button><img src={bell}></img></button>
            <button><img src={avatar}></img></button>
        </div>
    </div>
  )
}

export default Teacher_Header