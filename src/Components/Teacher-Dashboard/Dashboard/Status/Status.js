import React, { useState } from 'react'
import './Status.css'



function Status() {

    const [status,setStatus] = useState(true)


    return (
        <div className='Status'>
            <div className='Status-container-1'>
                <h1>Status</h1>
                <div className='Toggle' style={{ backgroundColor : `${status ? "#51C485" : "#c45151"}`}}>
                    
                    <p style={{ transform : `translateX(${ status ? "12px" : "36px"})`}}>
                        { status ? "Online" : "Offline"}
                    </p>
                    <div 
                        onClick={()=>setStatus(!status)} 
                        className='Toggle-Ball' 
                        style={{ transform : `translateX(${ status ? "24px" : "-42px"})`}}></div>
                </div>
            </div>

            <div className="Status-container-2">
                <div style={{
                    width: '1rem',
                    height: '1rem',
                    borderRadius: '2rem',
                    backgroundColor: '#51C485'
                }}></div>
                <p>234 students online right now.</p>
            </div>
        </div>
    )
}

export default Status